import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { TbCameraPlus, TbCircleCheck } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import {
  editNick,
  myDogInfo,
  myList,
  myPageInfo,
} from "../../redux/modules/myPageSlice";
SwiperCore.use([Pagination, Autoplay, Navigation]);

// import jwt from "jsonwebtoken";

const MyPage = () => {
  const navigate = useNavigate();
  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");
  // 토큰 decode 하는 부분
  let decoded = token && jwtDecode(token);
  console.log(decoded);
  // 토큰 만료시간
  let exp = token && Number(decoded.exp + "000");
  let expTime = new Date(exp);
  console.log(expTime, "만료 시간");
  let now = new Date();
  console.log(now, "현재 시간");
  const checkToken = () => {
    if (expTime <= now || token === null) {
      token && window.sessionStorage.removeItem("authorization");
      alert("로그인이 만료 되었습니다. 다시 로그인해 주세요!");
      navigate("/signin");
    } else {
      dispatch(myPageInfo());
    }
  };

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
  const [buttonToggle, setButtonToggle] = useState(false);

  const dogImgRef = useRef();
  const nickRef = useRef();

  useEffect(() => {
    checkToken();
  }, [buttonToggle]);

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
  const onClickEditNick = () => {
    setButtonToggle(!buttonToggle);
    nickRef.current.focus();

    if (buttonToggle) {
      dispatch(editNick(profile.nick));
      dispatch(myPageInfo());
      alert("닉네임이 수정되었습니다 :)");
    }
  };
  console.log(buttonToggle);
  console.log(profile);
  const onChangeDogProfile = (e) => {
    const { value, name } = e.target;
    setDogProfile({
      ...dogProfile,
      [name]: value,
    });
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
    console.log(file);

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append(
      "data",
      new Blob([JSON.stringify(dogProfile)], { type: "application/json" })
    );

    for (const keyValue of formdata) console.log(keyValue);
    // formdata전송 테스트
    dispatch(myList(formdata));
  };
  const dogInfoHandler = (e) => {
    const { id } = e.target;
    if (expTime >= now || token !== null) {
      dispatch(myDogInfo(id));
    }
  };

  return (
    <MyPageWrap>
      <MyPageProfileWrap>
        <MyPageProfileTitle width={"55em"}>
          댕과사전 마이페이지
        </MyPageProfileTitle>
        <MyPageNavWrap>
          <MyPageNavButton color={"#000"} background={"#cccccc80"}>
            프로필
          </MyPageNavButton>
          <MyPageNavButton>찜 목록</MyPageNavButton>
          {/* <MyPageNavButton>내가 쓴 글</MyPageNavButton> */}
        </MyPageNavWrap>
        <MyPageProfileBox>
          <MyPageProfileTitle>나의 정보</MyPageProfileTitle>
          <MyPageProfileContent>
            {/* <MyPageEmail>
              {data.email === null ? "이메일" : data?.email}
            </MyPageEmail> */}
            <Input
              value={data.email === null ? "이메일" : data?.email}
              type="text"
              style={{
                mg_top: "1.6em",
                mg_bottom: "1.6em",
                mg_left: "2em",
                mg_right: "2em",
                bd_color: "transparent",
                bd_bottom: "#ccc",
                bd: "1px solid transparent",
                lineHeight: "50px",
              }}
            />
            {!buttonToggle ? (
              <Input
                _ref={nickRef}
                key={data.nick === null ? "" : data?.nick}
                value={data.nick === null ? "" : data?.nick}
                name={"nick"}
                placeholder={"닉네임"}
                _onChange={onChangeProfile}
                type="text"
                style={{
                  mg_top: "1.6em",
                  mg_bottom: "1.6em",
                  mg_left: "2em",
                  mg_right: "2em",
                  bd_color: "transparent",
                  bd_bottom: "#ccc",
                  bd: "1px solid transparent",
                  lineHeight: "50px",
                }}
              />
            ) : (
              <Input
                _ref={nickRef}
                key={data.nick === null ? "" : data?.nick}
                defaultValue={data.nick === null ? "" : data?.nick}
                name={"nick"}
                placeholder={"닉네임"}
                _onChange={onChangeProfile}
                type="text"
                style={{
                  bg_color: "#cccccc50",
                  mg_top: "1.6em",
                  mg_bottom: "1.6em",
                  mg_left: "2em",
                  mg_right: "2em",
                  bd_color: "transparent",
                  bd_bottom: "#ccc",
                  bd: "1px solid transparent",
                  lineHeight: "50px",
                }}
              />
            )}

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
            {!buttonToggle ? (
              <EditButton onClick={onClickEditNick}>수정 &#62;</EditButton>
            ) : (
              <EditButton onClick={onClickEditNick}>완료 &#62;</EditButton>
            )}
          </MyPageProfileContent>
          <Button
            text={"로그아웃"}
            style={{
              width: "50%",
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
          {/* <MyPageDogImgBox>
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
            <div key={i} style={{ width: "50%" }}>
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
          </SelectDog> */}
          <StyledSwiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
          >
            {dogData.map((dog, i) => (
              <SwiperSlide>
                <DogInfoSlide>
                  <MyPageDogImgBox>
                    <MyPageDogImg src={`${dog.image}`} />
                  </MyPageDogImgBox>
                  <DogInfoSlideText>{dog.name}</DogInfoSlideText>
                  <DogInfoSlideText>{dog.breed}</DogInfoSlideText>
                  <DogInfoSlideText>{dog.gender}</DogInfoSlideText>
                  <DogInfoSlideText>{dog.weight} kg</DogInfoSlideText>
                </DogInfoSlide>
              </SwiperSlide>
            ))}
          </StyledSwiper>
          <Button
            // ref={dogImgRef}
            text={"댕프로필 추가하기"}
            _onClick={uploadHandler}
            style={{
              width: "50%",
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
`;
const MyPageProfileBox = styled.div`
  width: 44em;

  margin: 3em 0;
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
  margin: 1em 0;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "center")};
  width: ${(props) => (props.width ? props.width : "")};
`;
const MyPageProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  width: 6em;
  height: 6em;
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
  top: ${(props) => (props.top ? props.top : "42%")};
  right: ${(props) => (props.right ? props.right : "4%")};
  cursor: pointer;
`;
const SelectDog = styled.div`
  width: 50%;
  margin-top: 1em;
  font-size: 0.6em;
  text-align: left;
  cursor: pointer;
`;
const MyPageNavWrap = styled.div`
  width: 77em;
  display: flex;
  flex-direction: row;
  /* position: relative; */
  /* left: -30%; */
  /* top: -63em; */
  margin-top: 1em;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
`;
const MyPageNavButton = styled.div`
  padding: 11px 110px 11px 10px;
  /* margin-bottom: 5px; */
  font-size: 0.8em;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`;
const CheckMark = styled.span`
  color: ${(props) => (props.checkColor ? "#0066ff" : "#000")};
  font-weight: ${(props) => (props.checkFontWeight ? "700" : "400")};
  cursor: pointer;
`;
const StyledSwiper = styled(Swiper)`
  /* background: #ff000050; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 120%;
  padding: 2em 2em 4em 2em;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
`;
const DogInfoSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4.5em;
`;
const DogInfoSlideText = styled.div`
  line-height: 50px;
  font-size: 13px;
  height: 50px;
  margin: 1.6em 0 0 0;
  width: 100%;
  margin-top: 1.6em;
  border: none;
  border-bottom: 1px solid #ccc;
`;
