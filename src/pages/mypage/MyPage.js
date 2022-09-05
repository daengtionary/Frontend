import { useRef, useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";

const MyPage = () => {
  // console.log(window.sessionStorage.getItem("nick"));
  // console.log(window.sessionStorage.getItem("email"));
  const data = useSelector((state) => state);
  console.log(data);
  const DogProfileInputList = [
    "강아지 이름",
    "강이지 종류",
    "성별",
    "몸무게(kg)",
  ];
  const [checked, setChecked] = useState(false);
  const [profile, setProfile] = useState({});
  const [dogProfile, setDogProfile] = useState({});
  const [myDogImg, setMyDogImg] = useState("");
  console.log("프로필:", profile, "강아지프로필:", dogProfile);
  const onChangeProfile = (e) => {
    const { value, name } = e.target;
    value
      ? setProfile({
          ...profile,
          [name]: value,
        })
      : setProfile({
          // email: window.sessionStorage.getItem("email"),
          nick: window.sessionStorage.getItem("nick"),
        });
  };
  const onChangeDogProfile = (e) => {
    const { value, name } = e.target;
    setDogProfile({
      ...dogProfile,
      [name]: value,
    });
  };
  const dogImgRef = useRef();
  const onClickDogInput = () => {
    dogImgRef.current.click();
  };
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    fileBlob && reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setMyDogImg(reader.result);

        resolve();
      };
    });
  };
  return (
    <MyPageWrap>
      <>
        <br />
        <br />
        헤더 자리
        <br />
        <br />
      </>
      <MyPageProfileWrap>
        <MyPageProfileBox>
          <MyPageProfileTitle>나의 정보</MyPageProfileTitle>
          <MyPageEmail>
            {window.sessionStorage.getItem("email") !== "undefined"
              ? window.sessionStorage.getItem("email")
              : "이메일"}
          </MyPageEmail>
          <Input
            defaultValue={
              window.sessionStorage.getItem("nick") !== "undefined"
                ? window.sessionStorage.getItem("nick")
                : ""
            }
            style={{
              mg_top: "1.6em",
              bd_color: "transparent",
              bd_bottom: "#ccc",
            }}
            name={"nick"}
            placeholder={"닉네임"}
            _onChange={onChangeProfile}
            type="text"
          />
          {/* {ProfileInputList.map((inputList, i) => (
            <Input
              key={i}
              name={"닉네임"}
              defaultValue={inputList}
              style={{
                mg_top: "1.6em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
              }}
              placeholder={inputList}
              _onChange={onChangeProfile}
              type="text"
            />
          ))} */}
          {/* <EditButton top={"30%"}>수정 &#62;</EditButton> */}
          <EditButton top={"55%"}>수정 &#62;</EditButton>
          <Button
            text={"로그아웃"}
            style={{
              width: "100%",
              height: "4em",
              color: "#000",
              bg_color: "#f5f5f8",
              bd_color: "transparent",
              bd_radius: "8px",
              mg_top: "3em",
              ft_size: ".8em",
            }}
          />
        </MyPageProfileBox>
        <MyPageProfileBox>
          <MyPageProfileTitle>나의 강아지</MyPageProfileTitle>
          <MyPageDogImgBox>
            {myDogImg ? (
              <MyPageDogImg alt="미리보기" src={myDogImg} />
            ) : (
              <MyPageDogImg background={"#ccc"} />
            )}
            <MyPageDogImgDot onClick={onClickDogInput}>
              <TbCameraPlus
                style={{
                  position: "absolute",
                  top: "2.5px",
                  right: "2.5px",
                }}
                size="11"
                color="#fff"
              />
              <MyPageDogImgInput
                ref={dogImgRef}
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
                type="file"
                accept="image/*"
              />
            </MyPageDogImgDot>
          </MyPageDogImgBox>
          {DogProfileInputList.map((inputList, i) => (
            <Input
              key={i}
              style={{
                mg_top: "1.6em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
              }}
              placeholder={inputList}
              _onChange={onChangeDogProfile}
            />
          ))}
          <SelectDog onClick={() => setChecked(!checked)}>
            <CheckMark checkColor={checked} checkFontWeight={checked}>
              ✓&#32;이 아이로 활동하기
            </CheckMark>
          </SelectDog>
          <Button
            text={"댕프로필 추가하기"}
            style={{
              width: "100%",
              height: "4em",
              color: "#000",
              bg_color: "#f5f5f8",
              bd_color: "transparent",
              bd_radius: "8px",
              mg_top: "3em",
              ft_size: ".8em",
            }}
          />
        </MyPageProfileBox>
      </MyPageProfileWrap>
      <MyPageNavWrap>
        <MyPageNavBox color={"#fff"} background={"#797979"}>
          마이 페이지
        </MyPageNavBox>
        <MyPageNavBox>찜 목록</MyPageNavBox>
        <MyPageNavBox>내가 쓴 글</MyPageNavBox>
      </MyPageNavWrap>
    </MyPageWrap>
  );
};

export default MyPage;

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative; */
`;
const MyPageProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 100px 0 0 0;
`;
const MyPageProfileBox = styled.div`
  width: 22em;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const MyPageProfileTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 1em;
`;
const MyPageEmail = styled.div`
  align-self: flex-start;
  margin-top: 1.6em;
  border-color: transparent;
  border-bottom: 1px solid #ccc;
  width: 100%;
  line-height: 50px;
  font-size: 13px;
`;
const MyPageDogImgBox = styled.div`
  width: 5em;
  height: 5em;
  border: none;
  border-radius: 50%;
  margin-bottom: 2em;
  position: relative;
`;
const MyPageDogImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${(props) =>
    props.background ? props.background : "none"};
`;
const MyPageDogImgDot = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  background: #666;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
`;
const MyPageDogImgInput = styled.input`
  display: none;
`;
const EditButton = styled.div`
  padding: 5px 10px 5px 7px;
  font-size: 0.2em;
  font-weight: 700;
  border: 1.5px solid #000;
  border-radius: 20px;
  position: absolute;
  top: ${(props) => props.top};
  right: 0;
  cursor: pointer;
`;
const SelectDog = styled.div`
  width: 100%;
  margin-top: 1em;
  font-size: 0.6em;
  text-align: left;
  cursor: pointer;
`;
const MyPageNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* left: -30%; */
  top: -63em;
  margin-right: 60em;
  white-space: nowrap;
`;
const MyPageNavBox = styled.div`
  padding: 11px 110px 11px 10px;
  /* margin-bottom: 5px; */
  font-size: 0.8em;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const CheckMark = styled.span`
  color: ${(props) => (props.checkColor ? "#0066ff" : "#000")};
  font-weight: ${(props) => (props.checkFontWeight ? "700" : "400")};
`;
