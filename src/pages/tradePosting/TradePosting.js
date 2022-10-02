import { useState, useCallback, useRef } from "react";
import Button from "../../elements/button/Button";
import {
  StyleTradePostingForm,
  StyleTradePostingImageBox,
  StyleTradePageTopTitle,
  StyleTradeItemTitleBox,
  StyleTradePlaceBox,
  StyleTradeStatusBox,
  StyleTradePriceBox,
  StyleTradeDetailBox,
  StyleSubmitButton,
  StyleTradeCheckBoxWrap,
  StyleTradePlaceSpanBox,
  StyleTradeUplodeLabel,
  StyleShowImageBox,
  StyleShowImage,
  StylePreviewBox,
} from "./TradePosting.styled";
import { useDispatch } from "react-redux";
import { postingTrade } from "../../redux/modules/tradeSlice";
import React from "react";

//리액트 아이콘
import { TbCameraPlus } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import Input from "../../elements/input/Input";
import { useNavigate } from "react-router-dom";

const TradePosting = () => {
  const [showImages, setShowImages] = useState([]);
  const [fileImage, setFileImage] = useState([]);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");

  const postingData = {
    data: {
      title: title,
      address: "전국",
      stuffStatus: status,
      content: detail,
      price: price,
      postStatus: "판매중",
      exchange: "교환불가",
    },
    imgUrl: fileImage,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //이미지 상대경로 저장, 요청 이미지 저장
  const uploadImage = useCallback(
    event => {
      let sendImages = [...fileImage];
      let imageUrlLists = [...showImages];
      const imageLists = event.target.files;
      for (let i = 0; i < imageLists.length; i++) {
        sendImages.push(imageLists[i]);
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      if (imageUrlLists.length > 3) {
        imageUrlLists = imageUrlLists.slice(0, 2);
        sendImages = sendImages.slice(0, 2);
      }
      setShowImages(imageUrlLists);
      setFileImage(sendImages);
    },
    [fileImage, showImages]
  );

  console.log(showImages);
  console.log(fileImage);

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = id => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setFileImage(fileImage.filter((_, index) => index !== id));
  };

  const checkOnlyOne = useCallback(
    checkThis => {
      const checkboxes = document.getElementsByName("status");
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false;
        }
        if (checkboxes[0].checked === true) {
          setStatus("Used");
        } else if (checkboxes[1].checked === true) {
          setStatus("AlmostNew");
        } else if (checkboxes[2].checked === true) {
          setStatus("New");
        }
      }
    },
    [status]
  );

  const onSubmitHandler = () => {
    console.log(postingData);
    dispatch(postingTrade(postingData))
      .unwrap()
      .then(res => {
        alert(res.message);
        navigate("/trade");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <StyleTradePostingForm>
        <StyleTradePageTopTitle>
          <span>상품 등록하기</span>
        </StyleTradePageTopTitle>
        <StyleTradePostingImageBox>
          <span>상품 이미지</span>
          <StyleTradeUplodeLabel onChange={uploadImage} htmlFor="input-file">
            <TbCameraPlus className="camera" />
            <input type="file" multiple={true} accept="image/*" id="input-file" />
          </StyleTradeUplodeLabel>
          <StylePreviewBox>
            {showImages.map((image, id) => (
              <StyleShowImageBox key={id}>
                <span className="cancelSpanBox">
                  미리보기{id + 1} <MdOutlineCancel className="cancelIcon" onClick={() => handleDeleteImage(id)} />
                </span>
                <StyleShowImage src={image} alt={`${image}-${id}`} />
              </StyleShowImageBox>
            ))}
          </StylePreviewBox>
        </StyleTradePostingImageBox>
        <StyleTradeItemTitleBox>
          <span>제목</span>
          <Input
            type={"text"}
            value={title}
            _onChange={e => setTitle(e.target.value)}
            style={{
              width: "50%",
              height: "40px",
              pd_left: "10px",
              mg_right: "0px",
              bd: "1px solid lightGray ",
              bd_bottom: "1px solid lightGray ",
              bd_radius: "10px",
            }}
            placeholder={"제목을 입력해주세요"}
          />
        </StyleTradeItemTitleBox>
        {/* <StyleTradePlaceBox>
          <span>거래지역</span>
          <StyleTradePlaceSpanBox>
            <Button
              text="지역설정"
              style={{
                bd_color: "lightGray",
                bd_radius: "10px",
                bg_color: "white",
                color: "gray",
                width: "100px",
                mg_right: "5%",
              }}
            />
            <Button
              text="지역설정 안함"
              style={{
                bd_color: "lightGray",
                bd_radius: "10px",
                bg_color: "white",
                color: "gray",
                width: "100px",
                mg_left: "5%",
              }}
            />
          </StyleTradePlaceSpanBox>
        </StyleTradePlaceBox> */}
        <StyleTradeStatusBox>
          <span className="statusSpan">상태</span>
          <StyleTradeCheckBoxWrap>
            <span>
              <input type={"checkbox"} name="status" value="Used" onChange={e => checkOnlyOne(e.target)} />
              중고상품
            </span>
            <span>
              <input type={"checkbox"} name="status" value="almostNew" onChange={e => checkOnlyOne(e.target)} />
              거의새것
            </span>
            <span>
              <input type={"checkbox"} name="status" value="new" onChange={e => checkOnlyOne(e.target)} />
              새상품
            </span>
          </StyleTradeCheckBoxWrap>
        </StyleTradeStatusBox>
        <StyleTradePriceBox>
          <span>가격</span>
          <div>
          <Input
            type={"text"}
            value={price}
            _onChange={e => setPrice(e.target.value)}
            style={{
              width: "20%",
              height: "40px",
              pd_left: "10px",
              mg_right: "0px",
              bd: "1px solid lightGray ",
              bd_bottom: "1px solid lightGray ",
              bd_radius: "10px",
            }}
            placeholder={"가격을 입력해주세요"}
          />
          &nbsp;
          <span className="won">원</span>
          </div>
        </StyleTradePriceBox>
        <StyleTradeDetailBox>
          <span>설명</span>
          <Input
            type={"text"}
            value={detail}
            _onChange={e => setDetail(e.target.value)}
            style={{
              width: "50%",
              height: "150px",
              pd_left: "10px",
              mg_right: "0px",
              bd: "1px solid lightGray ",
              bd_bottom: "1px solid lightGray ",
              bd_radius: "10px",
            }}
            placeholder={"상품에 대해 설명해주세요"}
          />
        </StyleTradeDetailBox>
        <StyleSubmitButton onClick={onSubmitHandler}>등록하기</StyleSubmitButton>
      </StyleTradePostingForm>
    </>
  );
};

export default TradePosting;
