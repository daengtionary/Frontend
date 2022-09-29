import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import { setChecked } from "../../redux/modules/listSlice";
import { addPlaceThunk } from "../../redux/modules/placeSlice";
import dogIcon_gray from "../../static/image/dogIcon_gray.png";
import editIcon from "../../static/image/수정하기.png";

const PlacePosting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.place.placeInfoRes);

  const imgRef = useRef();
  const addrRef = useRef();

  const [placeImg, setPlaceImg] = useState([]);
  console.log(placeImg);
  const [placeInfo, setPlaceInfo] = useState({ data: { title: "", category: "hospital", address: "", content: "" }, imgUrl: [] });
  console.log(placeInfo);

  const onClickImgInput = () => {
    imgRef.current.click();
  };

  // const reader = new FileReader();
  const onImgHandler = (e) => {
    const { files } = e.target;
    console.log(files);

    const imageList = []; //state 값으로 대체해도 됨
    let filesLength = files.length > 10 ? 10 : files.length;

    for (let i = 0; i < filesLength; i++) {
      let file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        imageList[i] = reader.result;
        setPlaceImg([...imageList]);
      };
      reader.readAsDataURL(file);
    }
    setPlaceInfo({ ...placeInfo, imgUrl: files });
  };

  const onChangePlaceInfo = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, address: addrRef.current.value + " " + value } });
    } else {
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, [name]: value } });
    }
  };

  const uploadHandler = (e) => {
    dispatch(addPlaceThunk(placeInfo));
    alert("등록이 완료 되었습니다.");
    navigate("/place");
  };

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
        setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, address: addr } });
      },
    }).open();
  };

  return (
    <StylePlacePostWrap>
      <StyledPageTitle>
        <h2>장소 등록하기</h2>
      </StyledPageTitle>
      <StyledPostingWrap>
        <StyledInputBox>
          <StyledInputTitle>상품 이미지</StyledInputTitle>
          <StyledInputField>
            {placeImg.length !== 0 ? (
              placeImg.map((img, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <StyledImgNum>{i + 1}</StyledImgNum>
                  <StyledImgInput src={img} uploaded={true} />
                </div>
              ))
            ) : (
              <StyledImgInput onClick={onClickImgInput} width={"40em"} height={"24em"} />
            )}
            {/* <div style={{ position: "relative" }}>
              <StyledImgNum>다른 이미지</StyledImgNum>
              <StyledImgInput src={editIcon} uploaded={true} onClick={onClickImgInput} />
            </div> */}
            <StyledInput
              ref={imgRef}
              onChange={onImgHandler}
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              multiple
              placeholder={"이미지"}
              display={"none"}
            />
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>제목</StyledInputTitle>
          <StyledInputField>
            <StyledInput name="title" placeholder={"제목을 입력해주세요."} onChange={onChangePlaceInfo} />
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>분류</StyledInputTitle>
          <StyledInputField>
            <StyledCategotyButton name="category" value={"hospital"} onClick={onChangePlaceInfo}>
              애견병원
            </StyledCategotyButton>
            <StyledCategotyButton name="category" value={"room"} onClick={onChangePlaceInfo}>
              애견호텔
            </StyledCategotyButton>
            {/* <StyledCategotyButton name="category" value={"cafe"} onClick={() => alert("준비 중 입니다.")}>
              애견카페
            </StyledCategotyButton> */}
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>주소</StyledInputTitle>
          <StyledInputField column={true}>
            <StyledInput ref={addrRef} name="address" readOnly width={"30em"} />
            <StyledInput name="address" onChange={onChangePlaceInfo} />
            <Button
              _onClick={findAddr}
              text={"주소 검색"}
              style={{
                position: "absolute",
                width: "7em",
                height: "3em",
                ft_size: "1em",
                color: "#757575",
                bd_color: "#757575",
                bg_color: "#fff",
                mg_left: "5px",
                mg_right: "5px",
                bd_radius: "10px",
                bd_color: "#ccc",
                pd_left: "20px",
                pd_right: "20px",
                top: "10.5px",
                left: "524px",
                ft_weight: "500",
              }}
            />
          </StyledInputField>
        </StyledInputBox>
        {/* <StyledInputBox>
          <StyledInputTitle>정보</StyledInputTitle>
          <StyledInputField>
            <Input placeholder={"상세정보"} />
          </StyledInputField>
        </StyledInputBox> */}
        <StyledInputBox>
          <StyledInputTitle>설명</StyledInputTitle>
          <StyledInputField>
            <StyledTextArea name="content" onChange={onChangePlaceInfo} />
          </StyledInputField>
        </StyledInputBox>
      </StyledPostingWrap>
      <Button
        text={"등록하기"}
        _onClick={() => uploadHandler()}
        style={{
          width: "20em",
          height: "4em",
          color: "#fff",
          bg_color: "#9493FF",
          bd_color: "transparent",
          bd_radius: "8px",
          mg_top: "3em",
          ft_size: ".8em",
        }}
      />
    </StylePlacePostWrap>
  );
};
export default PlacePosting;

const StylePlacePostWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledPageTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;

  width: 77.1em;
`;
const StyledPostingWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 77em;
`;
const StyledInputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4em;
`;
const StyledInputTitle = styled.div`
  display: flex;
  font-weight: 700;
  flex: 1 1;
`;
const StyledInputField = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: wrap;
  flex: 7 7;

  position: relative;
`;
const StyledTextArea = styled.textarea`
  width: 65em;
  min-height: 16em;
  font-size: 1em;
  padding: 0.4em 1em;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: auto;
`;
const StyledImgNum = styled.div`
  display: inline-block;
  position: absolute;

  line-height: 1em;
  text-align: center;
  padding: 3px 5px;

  font-size: 12px;

  border: none;
  border-radius: 5px;
  background: #6563ff;
  color: #fff;
`;
const StyledImgInput = styled.img`
  width: ${(props) => (props.width ? props.width : "12em")};
  height: ${(props) => (props.height ? props.height : "12em")};
  background: ${(props) => (props.uploaded ? "none" : `url(${dogIcon_gray}) center / contain no-repeat`)};
  background-color: ${(props) => (props.uploaded ? "none" : "#f1f1f5")};
  border: 2px #9493ff solid;
  padding: 3px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 1.4em;

  object-fit: contain;
`;
const StyledInput = styled.input`
  display: ${(props) => (props.display ? props.display : "")};
  width: ${(props) => (props.width ? props.width : "38em")};
  height: 3em;
  /* text-indent: 1em; */
  font-size: 1em;
  padding: 0 1em;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0.6em 0;
`;
const StyledCategotyButton = styled.button`
  display: flex;
  color: ${(props) => (props.checked ? "#6563ff" : "#757575")};
  border: ${(props) => (props.checked ? "2px solid #6563ff" : "1px solid #757575")};

  background: none;
  padding: 0.5em 1em;
  margin-right: 1em;
  font-size: 1em;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`;
