import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import { deleteDogThunk, editNickThunk, myPageInfoThunk } from "../../redux/modules/myPageSlice";
import DogAddModal, { StyledGenderButton, StyledGenderButtonWrap } from "../../components/dogAddModal/DogAddModal";
import DeleteButton from "../../static/image/delete.png";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const MyPage = () => {
  const navigate = useNavigate();
  let token = window.sessionStorage.getItem("authorization");
  let decoded = token && jwtDecode(token);
  let exp = token && Number(decoded.exp + "000");
  let expTime = new Date(exp);
  let now = new Date();
  const checkToken = () => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/signin");
    } else if (expTime <= now || token === null) {
      token && window.sessionStorage.removeItem("authorization");
      alert("로그인이 만료 되었습니다. 다시 로그인해 주세요!");
      navigate("/signin");
    } else {
      dispatch(myPageInfoThunk());
    }
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.myPage.myPageInfo);
  const dogData = data.dogs;
  const dogList = useSelector((state) => state.myPage.myDogInfo);
  const myDogList = useSelector((state) => state.myPage.myDogList);

  const dogProfileInputList = [
    {
      name: "name",
      placeholder: "강아지이름",
      length: 8,
      defaultValue: dogList.name,
    },
    {
      name: "breed",
      placeholder: "강이지종류",
      length: 12,
      defaultValue: dogList.breed,
    },
    {
      name: "weight",
      placeholder: "몸무게(kg)",
      length: 4,
      defaultValue: dogList.weight + " kg",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [profile, setProfile] = useState({});
  const [buttonToggle, setButtonToggle] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const nickRef = useRef();

  const onModalHandler = () => {
    setOnModal(!onModal);
  };
  useEffect(() => {
    checkToken();
  }, [buttonToggle, onModal, myDogList, profile]);

  const onChangeProfile = (e) => {
    const { value, name } = e.target;
    value
      ? setProfile({
          ...profile,
          [name]: value,
        })
      : setProfile({
          nick: window.sessionStorage.getItem("nick"),
        });
  };
  const onClickEditNick = () => {
    setButtonToggle(!buttonToggle);
    nickRef.current.focus();

    if (buttonToggle && data.nick !== profile.nick) {
      const nickEditConfirm = window.confirm("닉네임을 수정하시겠습니까?");
      if (nickEditConfirm === true) {
        dispatch(editNickThunk(profile.nick));
        alert("닉네임이 수정되었습니다 :)");
        checkToken();
      } else if (nickEditConfirm === false) {
        return;
      }
    }
  };
  const onKeyPressEditNick = (e) => {
    onClickEditNick();
  };

  const deleteDogHandler = (dogNo) => {
    const deleteDogconfirm = window.confirm("강아지 프로필을 삭제하시겠습니까?");
    if (deleteDogconfirm === true) {
      dispatch(deleteDogThunk(dogNo));
      alert("삭제완료!");
    } else if (deleteDogconfirm === false) {
      return;
    }
  };

  return (
    <StyledMyPageWrap>
      <StyledMyPageProfileWrap>
        <StyledMyPageProfileTitle width={"55em"}>마이페이지</StyledMyPageProfileTitle>
        <StyledMyPageProfileBox>
          <StyledMyPageProfileTitle>나의 정보</StyledMyPageProfileTitle>
          <StyledMyPageProfileContent>
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
                _onKeyDown={onKeyPressEditNick}
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
                _maxLength={8}
                style={{
                  bg_color: "#f5f5f8",
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
            {!buttonToggle ? (
              <StyledEditButton onClick={onClickEditNick}>수정 &#62;</StyledEditButton>
            ) : (
              <StyledEditButton onClick={onClickEditNick}>완료 &#62;</StyledEditButton>
            )}
          </StyledMyPageProfileContent>
        </StyledMyPageProfileBox>
        <StyledMyPageProfileBox>
          <StyledMyPageProfileTitle>나의 강아지</StyledMyPageProfileTitle>
          {onModal ? (
            <DogAddModal
              dogData={dogData}
              checked={checked}
              dogProfileInputList={dogProfileInputList}
              onModalHandler={onModalHandler}
              onModal={onModal}
              checkToken={checkToken}
            />
          ) : null}
          {dogData.length === 1 ? (
            <StyledSwiper spaceBetween={36} slidesPerView={1} pagination={{ clickable: true }} loop={false} centeredSlides={true} initialSlide={0}>
              {dogData?.map((dog, i) => (
                <SwiperSlide key={dog.dogNo}>
                  <StyledDogInfoSlide>
                    <StyledDeleteButton
                      onClick={() => {
                        deleteDogHandler(dog.dogNo);
                      }}
                    />
                    <StyledMyPageDogImgBox>
                      <StyledMyPageDogImg src={`${dog.image}`} />
                    </StyledMyPageDogImgBox>
                    <StyledDogInfoSlideText>{dog.name}</StyledDogInfoSlideText>
                    <StyledDogInfoSlideText>{dog.breed}</StyledDogInfoSlideText>
                    <StyledDogInfoSlideText>{dog.weight !== 0 ? dog.weight + " kg" : "모름"}</StyledDogInfoSlideText>
                    {dog.gender === "암컷" ? (
                      <StyledGenderButtonWrap style={{ width: "100%" }}>
                        <StyledGenderButton style={{ color: "#6563FF", border: "2px solid #6563ff" }}>
                          <TbGenderFemale color={"##"} size={18} />
                          여아
                        </StyledGenderButton>
                      </StyledGenderButtonWrap>
                    ) : (
                      <StyledGenderButtonWrap style={{ width: "100%" }}>
                        <StyledGenderButton style={{ color: "#6563FF", border: "2px solid #6563ff" }}>
                          <TbGenderMale color={"#6563FF"} size={18} />
                          남아
                        </StyledGenderButton>
                      </StyledGenderButtonWrap>
                    )}
                  </StyledDogInfoSlide>
                </SwiperSlide>
              ))}
            </StyledSwiper>
          ) : dogData.length !== 0 ? (
            <StyledSwiper spaceBetween={36} slidesPerView={1} pagination={{ clickable: true }} loop={true} centeredSlides={true} initialSlide={0}>
              {dogData?.map((dog, i) => (
                <SwiperSlide key={dog.dogNo}>
                  <StyledDogInfoSlide>
                    <StyledDeleteButton
                      onClick={() => {
                        deleteDogHandler(dog.dogNo);
                      }}
                    />
                    <StyledMyPageDogImgBox>
                      <StyledMyPageDogImg src={`${dog.image}`} />
                    </StyledMyPageDogImgBox>
                    <StyledDogInfoSlideText>{dog.name}</StyledDogInfoSlideText>
                    <StyledDogInfoSlideText>{dog.breed}</StyledDogInfoSlideText>
                    <StyledDogInfoSlideText>{dog.weight !== 0 ? dog.weight + " kg" : "모름"}</StyledDogInfoSlideText>
                    {dog.gender === "암컷" ? (
                      <StyledGenderButtonWrap style={{ width: "100%" }}>
                        <StyledGenderButton style={{ color: "#6563FF", border: "2px solid #6563ff" }}>
                          <TbGenderFemale color={"##"} size={18} />
                          여아
                        </StyledGenderButton>
                      </StyledGenderButtonWrap>
                    ) : (
                      <StyledGenderButtonWrap style={{ width: "100%" }}>
                        <StyledGenderButton style={{ color: "#6563FF", border: "2px solid #6563ff" }}>
                          <TbGenderMale color={"#6563FF"} size={18} />
                          남아
                        </StyledGenderButton>
                      </StyledGenderButtonWrap>
                    )}
                  </StyledDogInfoSlide>
                </SwiperSlide>
              ))}
            </StyledSwiper>
          ) : (
            "댕프로필이 없습니다. 댕프로필을 추가해주세요."
          )}
          <Button
            text={"댕프로필 추가하기"}
            _onClick={onModalHandler}
            style={{
              width: "50%",
              height: "4em",
              color: "#fff",
              bg_color: "#9493FF",
              bd_color: "transparent",
              bd_radius: "8px",
              mg_top: "3em",
              ft_size: ".8em",
            }}
          />
        </StyledMyPageProfileBox>
      </StyledMyPageProfileWrap>
    </StyledMyPageWrap>
  );
};

export default MyPage;

const StyledMyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledMyPageProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
const StyledMyPageProfileBox = styled.div`
  width: 44em;

  margin: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StyledMyPageProfileTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  display: inline-block;
  margin: 1em 0;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "center")};
  width: ${(props) => (props.width ? props.width : "")};
`;
const StyledMyPageProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 50%;
    flex-direction: column;
  }
`;
const StyledMyPageDogImgBox = styled.div`
  width: 6em;
  height: 6em;
  border: none;
  border-radius: 50%;
  margin-bottom: 2em;
  position: relative;
  overflow: hidden;
  :not(:last-child) {
    overflow: visible;
  }
`;
const StyledMyPageDogImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${(props) => (props.background ? props.background : "none")};
`;
export const StyledEditButton = styled.div`
  padding: 5px 10px 5px 7px;
  font-size: 0.3em;
  font-weight: 700;
  color: #9493ff;
  border: 1.5px solid #9493ff;
  border-radius: 20px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : "64%")};
  right: ${(props) => (props.right ? props.right : "4%")};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 77%;
    right: 25%;
    font-size: 14px;
  }
`;
const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 120%;
  padding: 2em 6em 4em 6em;
  @media screen and (max-width: 768px) {
    padding: 2em 3em 4em 3em;
  }
`;
const StyledDogInfoSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4.5em;
  position: relative;
  z-index: 1000;
`;
const StyledDogInfoSlideText = styled.div`
  line-height: 50px;
  font-size: 13px;
  height: 50px;
  margin: 1.6em 0 0 0;
  width: 100%;
  margin-top: 1.6em;
  border: none;
  border-bottom: 1px solid #ccc;
`;
const StyledDeleteButton = styled.div`
  position: absolute;
  top: 0em;
  right: -0.6em;
  z-index: 100;
  background: url(${DeleteButton}) center / cover no-repeat;
  filter: contrast(30%);

  width: 2em;
  height: 2em;
  cursor: pointer;
`;
