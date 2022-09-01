import { useState } from "react";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";

const MyPage = () => {
  const ProfileInputList = ["이메일", "기본정보", "휴대전화"];
  const DogProfileInputList = [
    "강아지 이름",
    "강이지 종류",
    "성별",
    "몸무게(kg)",
  ];
  const [checked, setChecked] = useState(false);
  return (
    <MyPageWrap>
      <>
        <br />
        <br />
        헤더 자리
        <br />
        <br />
      </>
      {/* <MyPageMenuWrap>
        <div>마이페이지</div>
        <div>찜목록</div>
        <div>내가쓴글</div>
      </MyPageMenuWrap> */}
      <MyPageProfileWrap>
        <MyPageProfileBox>
          <MyPageProfileTitle>나의 정보</MyPageProfileTitle>
          {ProfileInputList.map((inputList, i) => (
            <Input
              key={i}
              style={{
                mg_top: "1.6em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
              }}
              placeholder={inputList}
            />
          ))}
          <EditButton top={"44%"}>수정 &#62;</EditButton>
          <EditButton top={"64%"}>수정 &#62;</EditButton>
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
          <MyPageDogImg>
            <MyPageDogImgDot />
          </MyPageDogImg>
          {DogProfileInputList.map((inputList, i) => (
            <Input
              key={i}
              style={{
                mg_top: "1.6em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
              }}
              placeholder={inputList}
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
// const MyPageMenuWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   justify-content: flex-end;
//   flex: 1 1;
// `;
const MyPageProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 100px auto;
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
const MyPageDogImg = styled.div`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 2em;
  position: relative;
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
  top: -74em;
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
