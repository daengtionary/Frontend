import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import { addPlaceThunk } from "../../redux/modules/placeSlice";
import imgAddIcon from "../../static/image/이미지추가.png";

const PlacePosting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgRef = useRef();
  const addrRef = useRef();

  const [placeImg, setPlaceImg] = useState([]);
  const [placeInfo, setPlaceInfo] = useState({ data: { title: "", category: "hospital", address: "", content: "" }, imgUrl: [] });
  const [checked, setChecked] = useState([true, false]);
  const onClickSetCheck = (i) => {
    const checkArr = new Array(checked.length).fill(false);
    checkArr[i] = true;
    setChecked(checkArr);
  };

  const onClickImgInput = () => {
    imgRef.current.click();
  };

  const onImgHandler = (e) => {
    const { files } = e.target;

    const imageList = [];
    let filesLength = files.length > 10 ? 10 : files.length;

    for (let i = 0; i < filesLength; i++) {
      let file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
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
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, address: addrRef.current.value + ", " + value } });
    } else {
      setPlaceInfo({ ...placeInfo, data: { ...placeInfo.data, [name]: value } });
    }
  };

  const uploadHandler = () => {
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
          <StyledInputTitle>이미지 등록</StyledInputTitle>
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
            <StyledInput ref={imgRef} onChange={onImgHandler} type="file" accept="image/*" multiple placeholder={"이미지"} display={"none"} />
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
            {[
              { value: "hospital", text: "애견병원" },
              { value: "room", text: "애견호텔" },
            ].map((cate, i) => (
              <StyledCategotyButton
                key={i}
                name="category"
                value={cate.value}
                checked={checked[i]}
                onClick={(e) => {
                  onChangePlaceInfo(e);
                  onClickSetCheck(i);
                }}
              >
                {cate.text}
              </StyledCategotyButton>
            ))}

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
                height: "50px",
                ft_size: "1em",
                color: "#757575",
                bd_color: "#757575",
                bg_color: "#fff",
                mg_left: "5px",
                mg_right: "5px",
                bd_radius: "10px",
                pd_left: "20px",
                pd_right: "20px",
                top: "0",
                left: "524px",
                ft_weight: "500",
                media: {
                  width: "5em",
                  height: "50px",
                  pd_left: "0px",
                  pd_right: "0px",
                  left: "288px",
                },
              }}
            />
          </StyledInputField>
        </StyledInputBox>
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
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`;
const StyledPageTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;

  width: 77.1em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const StyledPostingWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 77em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const StyledInputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4em;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1em;
  }
`;
const StyledInputTitle = styled.div`
  display: flex;
  font-weight: 700;
  margin: 0 0 1em 0;
  flex: 1 1;
  @media screen and (max-width: 768px) {
    margin: 1em 0;
  }
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
  background: ${(props) => (props.uploaded ? "none" : `url(${imgAddIcon}) center / contain no-repeat`)};
  background-color: ${(props) => (props.uploaded ? "none" : "#f1f1f5")};
  border: 2px #9493ff solid;
  padding: 3px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 1.4em 0 0;

  object-fit: contain;
  @media screen and (max-width: 768px) {
    margin: ${(props) => (props.width ? "0" : "0 1em 0 0")};
    width: ${(props) => (props.width ? "24em" : "10em")};
    height: ${(props) => (props.height ? "12em" : "10em")};
  }
`;
const StyledInput = styled.input`
  display: ${(props) => (props.display ? props.display : "")};
  width: ${(props) => (props.width ? props.width : "38em")};
  height: 3em;
  font-size: 1em;
  padding: 0 1em;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 0 1em 0;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.width ? "66%" : "90%")};
  }
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
