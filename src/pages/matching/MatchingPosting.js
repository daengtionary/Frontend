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
  StyleTradeUplodeLabel,
  StyleShowImageBox,
  StyleShowImage,
  StylePreviewBox,
  StyledInputField,
  StyledInput,
} from "./MatchingPosting.styled";
import { useDispatch } from "react-redux";
import { postingMatching } from "../../redux/modules/matchingSlice";
import React from "react";

//리액트 아이콘
import { TbCameraPlus } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import Input from "../../elements/input/Input";
import { useNavigate } from "react-router-dom";

const MatchingPosting = () => {
  const [showImages, setShowImages] = useState([]);
  const [fileImage, setFileImage] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [placeInfo, setPlaceInfo] = useState("");
  // const [placeInfo, setPlaceInfo] = useState({ data: { title: "", category: "hospital", address: "", content: "" }, imgUrl: [] });
  const [maxCount, setMaxcount] = useState();

  const postingData = {
    data: {
      title: title,
      address: placeInfo,
      content: detail,
      category: category,
      maxCount: maxCount,
    },
    imgUrl: fileImage,
  };
  console.log(placeInfo);
  console.log(postingData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addrRef = useRef();

  //이미지 상대경로 저장, 요청 이미지 저장
  const uploadImage = useCallback(
    (event) => {
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
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setFileImage(fileImage.filter((_, index) => index !== id));
  };

  const checkOnlyOne = useCallback(
    (checkThis) => {
      const checkboxes = document.getElementsByName("status");
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false;
        }
        if (checkboxes[0].checked === true) {
          setCategory("산책");
        } else if (checkboxes[1].checked === true) {
          setCategory("애견카페");
        } else if (checkboxes[2].checked === true) {
          setCategory("자유");
        }
      }
    },
    [category]
  );

  const findAddr = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        var addr = "";

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        console.log(addr);
        console.log(addrRef);
        addrRef.current.value = addr;
        setPlaceInfo(addr);
      },
    }).open();
  };

  const onChangePlaceInfo = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, address: addrRef.current.value + ", " + value } }.data.address);
    } else {
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, [name]: value }.data.address });
    }
  };

  const onSubmitHandler = () => {
    console.log(postingData);
    dispatch(postingMatching(postingData))
      .unwrap()
      .then((res) => {
        alert(res.message);
        navigate("/matching");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <StyleTradePostingForm>
        <StyleTradePageTopTitle>
          <span>댕친구 등록하기</span>
        </StyleTradePageTopTitle>
        <StyleTradePostingImageBox>
          <span>이미지 업로드 </span>
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
            _onChange={(e) => setTitle(e.target.value)}
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
        <StyleTradeStatusBox>
          <span className="statusSpan">상태</span>
          <StyleTradeCheckBoxWrap>
            <span>
              <input type={"checkbox"} name="status" value="Used" onChange={(e) => checkOnlyOne(e.target)} />
              산책
            </span>
            <span>
              <input type={"checkbox"} name="status" value="almostNew" onChange={(e) => checkOnlyOne(e.target)} />
              애견카페
            </span>
            <span>
              <input type={"checkbox"} name="status" value="new" onChange={(e) => checkOnlyOne(e.target)} />
              자유
            </span>
          </StyleTradeCheckBoxWrap>
        </StyleTradeStatusBox>
        <StyleTradePriceBox>
          <span>최대 인원</span>
          <div>
            <Input
              type={"text"}
              value={maxCount}
              _onChange={(e) => setMaxcount(e.target.value)}
              style={{
                width: "20%",
                height: "40px",
                pd_left: "10px",
                mg_right: "0px",
                bd: "1px solid lightGray ",
                bd_bottom: "1px solid lightGray ",
                bd_radius: "10px",
              }}
              placeholder={"최대 인원 수"}
            />
            &nbsp;
            <span className="won">명</span>
          </div>
        </StyleTradePriceBox>
        <StyleTradePlaceBox>
          <span>거래지역</span>
          <StyledInputField column={true}>
            <StyledInput className="addrName" ref={addrRef} name="address" readOnly width={"30em"} />
            <StyledInput className="detailAddrName" name="address" placeholder="상세주소를 입력해주세요:)" onChange={onChangePlaceInfo} />
            <Button
              _onClick={findAddr}
              text={"주소 검색"}
              style={{
                position: "absolute",
                width: "6em",
                height: "1.8em",
                ft_size: "1em",
                color: "#757575",
                bd_color: "#757575",
                bg_color: "#fff",
                mg_left: "1px",
                mg_right: "1px",
                bd_radius: "10px",
                pd_left: "10px",
                pd_right: "10px",
                left: "65.2%",
                top: "0px",
                ft_weight: "500",
                media: {
                  width: "5em",
                  height: "1.8em",
                  pd_left: "0px",
                  pd_right: "0px",
                  left: "320px",
                  top: "0px",
                },
              }}
            />
          </StyledInputField>
        </StyleTradePlaceBox>
        <StyleTradeDetailBox>
          <span>설명</span>
          <Input
            type={"text"}
            value={detail}
            _onChange={(e) => setDetail(e.target.value)}
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

export default MatchingPosting;
