import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { TbCameraPlus, TbCircleCheck } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import { myDogInfo, myList, myPageInfo } from "../../redux/modules/myPageSlice";
// import jwt from "jsonwebtoken";

const MyPage = () => {
  // // // 토큰 변수 할당
  // let token = window.sessionStorage.getItem("authorization");
  // console.log(token);
  // // // 토큰 decode 하는 부분
  // let decoded = token && jwtDecode(token);
  // console.log(decoded);

  // console.log(window.sessionStorage.getItem("email"));
  // console.log(window.sessionStorage.getItem("nick"));
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myPage.myPageInfo);
  console.log(data);
  //버튼에 dispatch 달아서 특정 강아지 정보만 가져오도록하자
  const dogData = data.dogs;
  console.log(dogData);
  const dogList = useSelector((state) => state.myPage.myDogInfo);
  console.log(dogList);

  // // input에다 넣을 값??
  // console.log(data && data.dogs[0]);
  // const dogsdogs = data && Object.values(data.dogs[0]).slice(1, 5);
  // console.log(dogsdogs);
  useEffect(() => {
    dispatch(myPageInfo());
  }, []);

  const DogProfileInputList = [
    {
      name: "name",
      placeholder: "강아지이름",
      defaultValue: dogList.name,
    },
    {
      name: "breed",
      placeholder: "강이지종류",
      defaultValue: dogList.breed,
    },
    {
      name: "gender",
      placeholder: "성별",
      defaultValue: dogList.gender,
    },
    {
      name: "weight",
      placeholder: "몸무게(kg)",
      defaultValue: dogList.weight + " kg",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [profile, setProfile] = useState({});
  const [dogProfile, setDogProfile] = useState({});
  const [myDogImg, setMyDogImg] = useState("");
  // console.log("프로필:", profile, "강아지프로필:", dogProfile);
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
    console.log(file);

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append(
      "data",
      new Blob([JSON.stringify(dogProfile)], { type: "application/json" })
    );
    // formdata.append("name", dogProfile.dogname);
    // formdata.append("breed", dogProfile.dogbreed);
    // formdata.append("gender", dogProfile.dogsex);
    // formdata.append("weight", dogProfile.dogweight);

    for (const keyValue of formdata) console.log(keyValue);
    // formdata전송 테스트
    dispatch(myList(formdata));
  };
  const dogInfoHandler = (e) => {
    // console.log(e.target.id);
    const { id } = e.target;
    dispatch(myDogInfo(id));
  };

  // const uploadHandler = (e) => {
  //   const file = dogImgRef.current.files[0];
  //   console.log(file);

  //   file && reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const base64data = reader.result;
  //     console.log(base64data);

  //     const formdata = new FormData();
  //     formdata.append("image", base64data);
  //     formdata.append("name", dogProfile.dogname);
  //     formdata.append("breed", dogProfile.dogbreed);
  //     formdata.append("gender", dogProfile.dogsex);
  //     formdata.append("weight", dogProfile.dogweight);

  //     for (const keyValue of formdata) console.log(keyValue);
  //     // formdata전송 테스트
  //     dispatch(myList(formdata));
  //   };
  // };
  // console.log(dogProfile);
  return (
    <MyPageWrap>
      <MyPageProfileWrap>
        <MyPageProfileBox>
          <MyPageProfileTitle>나의 정보</MyPageProfileTitle>
          <MyPageEmail>
            {data.email === null ? "이메일" : data?.email}
          </MyPageEmail>
          <Input
            key={data.nick === null ? "" : data?.nick}
            defaultValue={data.nick === null ? "" : data?.nick}
            name={"nick"}
            placeholder={"닉네임"}
            _onChange={onChangeProfile}
            type="text"
            style={{
              mg_top: "1.6em",
              bd_color: "transparent",
              bd_bottom: "#ccc",
              bd: "1px solid transparent",
            }}
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
              <MyPageDogImg src={dogList.image} />
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
                onChange={onImgHandler}
                type="file"
                accept="image/*"
              />
            </MyPageDogImgDot>
          </MyPageDogImgBox>
          {dogData.map((dog, i) => (
            <Button key={i} id={i} text={dog.name} _onClick={dogInfoHandler} />
          ))}
          {DogProfileInputList.map((inputList, i) => (
            <div key={i} style={{ width: "100%" }}>
              <Input
                // key={i}

                key={inputList.defaultValue}
                defaultValue={inputList.defaultValue}
                placeholder={inputList.placeholder}
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
          <SelectDog onClick={() => setChecked(!checked)}>
            <CheckMark checkColor={checked} checkFontWeight={checked}>
              <TbCircleCheck
                style={{
                  marginRight: "2px",
                }}
              />
              이 아이로 활동하기
            </CheckMark>
          </SelectDog>
          <Button
            // ref={dogImgRef}
            text={"댕프로필 추가하기"}
            _onClick={uploadHandler}
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
  cursor: pointer;
`;
