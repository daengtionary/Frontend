import styled from "styled-components";
import { TbCameraPlus, TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import Input from "../../elements/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDogThunk } from "../../redux/modules/myPageSlice";
import Button from "../../elements/button/Button";
import dogIcon from "../../static/image/dogIcon.png";

const DogAddModal = ({ dogProfileInputList, onModalHandler }) => {
  const dispatch = useDispatch();
  const dogImgRef = useRef();
  const [dogProfile, setDogProfile] = useState({ name: "", breed: "", weight: "0", gender: "" });
  const [myDogImg, setMyDogImg] = useState("");
  const [checked, setChecked] = useState([false, false]);
  const genderButtonList = [
    { key: "여아", value: "암컷" },
    { key: "남아", value: "수컷" },
  ];

  const genderSelect = (i) => {
    const newArr = Array(genderButtonList.length).fill(false);
    newArr[i] = true;
    setChecked(newArr);
  };

  const onChangeDogProfile = (e) => {
    const { value, name } = e.target;
    if (name !== "gender" && name !== "weight") {
      setDogProfile({
        ...dogProfile,
        [name]: value,
      });
    } else if (name === "weight") {
      setDogProfile({
        ...dogProfile,
        [name]: value.replace(/[^0-9]/g, ""),
      });
    } else if (name === "gender") {
      setDogProfile({
        ...dogProfile,
        [name]: e.currentTarget.value,
      });
    }
  };
  const onClickDogInput = () => {
    dogImgRef.current.click();
  };

  const reader = new FileReader();
  const onImgHandler = (e) => {
    const { files } = e.target;

    files[0] && reader.readAsDataURL(files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setMyDogImg(reader.result);

        resolve();
      };
    });
  };
  const uploadHandler = (e) => {
    const file = dogImgRef.current.files[0];

    const formdata = new FormData();
    file ? formdata.append("image", file) : alert("사진을 추가해주세요.");
    formdata.append(
      "data",
      new Blob([JSON.stringify(dogProfile)], {
        type: "application/json;charset=UTF-8",
      })
    );

    for (const keyValue of formdata) console.log(keyValue);
    if (dogProfile.name !== "" && dogProfile.breed !== "" && dogProfile.gender !== "") {
      const addDogconfirm = file && window.confirm("강아지 프로필을 추가하시겠습니까?");
      if (addDogconfirm === true) {
        dispatch(addDogThunk(formdata));
        onModalHandler();
        alert("등록완료!");
      } else if (addDogconfirm === false) {
        return;
      }
    } else {
      alert("빈칸을 모두 입력해주세요!");
    }
  };

  return (
    <StyledModalWrap>
      <StyledAddBox>
        <StyledCloseButton onClick={onModalHandler}>
          <IoClose size={24} />
        </StyledCloseButton>
        <StyledMyPageProfileTitle>나의 강아지</StyledMyPageProfileTitle>
        <StyledMyPageDogImgBox>
          {myDogImg ? <StyledMyPageDogImg alt="미리보기" src={myDogImg} /> : <StyledMyPageDogImg src={dogIcon} imgSize={"70%"} />}
          <StyledMyPageDogImgDot onClick={onClickDogInput}>
            <TbCameraPlus
              style={{
                position: "absolute",
                top: "2.5px",
                right: "2.5px",
              }}
              size="14"
              color="#fff"
            />
            <StyledMyPageDogImgInput ref={dogImgRef} onChange={onImgHandler} type="file" accept="image/*" />
          </StyledMyPageDogImgDot>
        </StyledMyPageDogImgBox>
        {dogProfileInputList.map((inputList, i) => (
          <div key={i} style={{ width: "80%" }}>
            <Input
              key={inputList.defaultValue}
              placeholder={inputList.placeholder}
              type="text"
              _maxLength={inputList.length}
              _onChange={onChangeDogProfile}
              name={inputList.name}
              style={{
                mg_top: "1.6em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
                bd: "1px solid transparent",
              }}
            />
          </div>
        ))}
        <StyledGenderButtonWrap>
          성별
          {genderButtonList.map((gender, i) => (
            <StyledGenderButton
              key={i}
              name="gender"
              value={gender.value}
              onClick={(e) => {
                onChangeDogProfile(e);
                genderSelect(i);
              }}
              checked={checked[i]}
            >
              {i === 0 ? (
                <TbGenderFemale color={checked[i] ? "#6563FF" : "#757575"} size={18} />
              ) : (
                <TbGenderMale color={checked[i] ? "#6563FF" : "#757575"} size={18} />
              )}

              {gender.key}
            </StyledGenderButton>
          ))}
        </StyledGenderButtonWrap>
        <Button
          text={"댕프로필 추가하기"}
          _onClick={() => {
            uploadHandler();
          }}
          style={{
            width: "80%",
            height: "4em",
            color: "#fff",
            bg_color: "#9493FF",
            bd_color: "transparent",
            bd_radius: "8px",
            mg_top: "3em",
            ft_size: ".8em",
          }}
        />
      </StyledAddBox>
    </StyledModalWrap>
  );
};

export default DogAddModal;

const StyledModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
const StyledAddBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  padding: 3em 0;

  background: #fff;
  width: 25em;
  position: relative;
  @media screen and (max-width: 768px) {
  }
`;
const StyledMyPageDogImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 6em;
  border: none;
  border-radius: 50%;
  margin-bottom: 2em;
  position: relative;
  background-color: ${(props) => (props.background ? props.background : "#eee")};
`;
const StyledMyPageDogImg = styled.img`
  width: ${(props) => (props.imgSize ? props.imgSize : "100%")};
  height: ${(props) => (props.imgSize ? props.imgSize : "100%")};
  object-fit: cover;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.background ? props.background : "#eee")};
`;
const StyledMyPageDogImgDot = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  background: #6563ff;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledMyPageDogImgInput = styled.input`
  display: none;
`;
const StyledMyPageProfileTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  display: inline-block;
  margin: 1em 0;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "center")};
  width: ${(props) => (props.width ? props.width : "")};
`;
const StyledCloseButton = styled.div`
  position: absolute;
  top: 1.8em;
  right: 1.8em;
  cursor: pointer;
  padding: 5px 5px;
  @media screen and (max-width: 768px) {
    top: 4.2em;
    right: 1.8em;
  }
`;
export const StyledGenderButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 80%;
  color: #757575;
  font-size: 0.8em;
  text-indent: 1px;
  margin-top: 1.6em;
`;
export const StyledGenderButton = styled.button`
  display: flex;
  color: ${(props) => (props.checked ? "#6563ff" : "#757575")};
  border: ${(props) => (props.checked ? "2px solid #6563ff" : "2px solid #757575")};

  background: none;
  padding: 3px 10px 3px 7px;
  font-size: 1em;
  border-radius: 20px;
  cursor: pointer;
`;
