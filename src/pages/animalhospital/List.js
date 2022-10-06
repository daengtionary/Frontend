import jwtDecode from "jwt-decode";
import { debounce, throttle } from "lodash";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import { reset, searchListThunk, resetEnd, pageUp, setChecked } from "../../redux/modules/listSlice";
import searchIcon from "../../static/image/search.png";
import { TbPlus } from "react-icons/tb";
import { resetPosted } from "../../redux/modules/placeSlice";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.getList);
  const pageNum = useSelector((state) => state.list.pageNum);
  const ready = useSelector((state) => state.list.isLoad);
  const listEnd = useSelector((state) => state.list.isEnd);
  const checked = useSelector((state) => state.list.isChecked);
  const pathName = useSelector((state) => state.list.pathName);
  const posted = useSelector((state) => state.place.isPosted);

  const [page, setPage] = useState(0);
  const filterButton = [
    { name: "#전체", path: "/place" },
    { name: "#동물병원", path: "/hospital" },
    { name: "#애견호텔", path: "/room" },
  ];
  const [filter, setFilter] = useState({ address: "", sort: "new" });
  const { address, sort } = filter;
  const [size, setSize] = useState(4);

  const onClickFilterHandler = (i, path) => {
    dispatch(setChecked({ i, path }));
    dispatch(resetEnd());
  };

  useLayoutEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
      dispatch(setChecked(0));
    });
    if (listEnd === false) {
      if ((pathName && pathName === "place") || pathName === "/place") {
        dispatch(
          searchListThunk({
            pathname: "/query?category",
            page: pageNum,
            size,
            address,
            sort,
            title: searchText,
            content: "",
            nick: "",
          })
        );
      } else {
        dispatch(
          searchListThunk({
            pathname: pathName + "/search",
            page: pageNum,
            size,
            address,
            sort,
            title: searchText,
            content: "",
            nick: "",
          })
        );
      }
      dispatch(resetPosted());
    }
  }, [checked, pageNum, filter, ready, posted]);

  useEffect(
    throttle(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 200),
    []
  );

  const handleScroll = debounce((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      dispatch(pageUp(1));
    }
  }, 200);
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  const onClickSearchHandler = () => {
    setPage(0);
    dispatch(reset());
    if ((pathName && pathName === "place") || pathName === "/place") {
      dispatch(
        searchListThunk({
          pathname: "/query?category",
          page: pageNum,
          size,
          address,
          sort,
          title: searchText,
          content: "",
          nick: "",
        })
      );
    } else {
      dispatch(
        searchListThunk({
          pathname: pathName + "/search",
          page,
          size,
          address,
          sort,
          title: searchText,
          content: "",
          nick: "",
        })
      );
    }
  };
  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      onClickSearchHandler();
    }
  };
  const filterHandler = (e) => {
    const { name, value } = e.target;
    dispatch(reset());
    setFilter({ ...filter, [name]: value });
    setPage(0);
  };

  let token = window.sessionStorage.getItem("authorization");
  let decoded = token && jwtDecode(token);
  let exp = token && Number(decoded.exp + "000");
  let expTime = new Date(exp);
  let now = new Date();

  const checkToken = () => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/signin");
    } else if (token && expTime <= now) {
      window.sessionStorage.removeItem("authorization");
      alert("로그인이 만료되었습니다. 다시 로그인 해 주세요.");
      navigate("/signin");
    } else {
      navigate("/placeposting");
    }
  };

  return (
    <StyledListWrap>
      <StyledOptionWrap>
        <StyledSerchWrap>
          <StyledSerchBox>
            <h2 style={{ whiteSpace: "nowrap" }}>&nbsp;지금 가장 핫한</h2>
            <Input
              _onKeyPress={onKeyPressHandler}
              _onChange={onChangeHandler}
              placeholder={"어떤 장소를 찾으세요?"}
              style={{
                width: "40%",
                mg_left: "1em;",
                bd_radius: "3em",
                bg_color: "#eee",
                bd: "none",
                bd_bottom: "none",
                pd_left: "1.4em",
                pd_right: "4em",
                height: "3.4em",
              }}
            />
            <StyledSerchImg onClick={onClickSearchHandler} src={searchIcon} style={{ width: "2em" }} />
          </StyledSerchBox>
          <StyledFilterBox display={"block"} r_display={"none"} position={""}>
            <StyledFilter name="address" value={address || ""} onChange={filterHandler} width={"60px"}>
              <option disabled value="">
                지역
              </option>
              <option value="">전체</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="인천">인천</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="광주">광주</option>
              <option value="울산">울산</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="충북">충북</option>
              <option value="충남">충남</option>
              <option value="경북">경북</option>
              <option value="경남">경남</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="제주">제주</option>
            </StyledFilter>
            <StyledFilter name="sort" onChange={filterHandler}>
              <option value="new">최근순</option>
              <option value="popular">인기순</option>
            </StyledFilter>
          </StyledFilterBox>
        </StyledSerchWrap>
        <StyledButtonWrap>
          <div>
            {filterButton.map((btn, i) => (
              <Button
                key={i}
                text={btn.name}
                checked={checked[i]}
                _onClick={() => {
                  onClickFilterHandler(i, btn.path);
                }}
                style={{
                  width: "auto",
                  height: "auto",
                  color: "#ccc",
                  bg_color: "#fff",
                  mg_left: "5px",
                  mg_right: "5px",
                  bd_radius: "20px",
                  bd_color: "#ccc",
                  pd_top: "5px",
                  pd_bottom: "5px",
                  pd_left: "8px",
                  pd_right: "8px",
                  hv_color: "#767676",
                  hv_bd_color: "#767676",
                  hv_ft_weight: "700",
                  ft_weight: "700",
                  media: {
                    mg_left: "3px",
                    mg_right: "3px",
                  },
                }}
              />
            ))}
          </div>
          <StyledFilterBox display={"none"} r_display={"block"} position={"absolute"}>
            <StyledFilter name="address" value={address || ""} onChange={filterHandler} width={"50px"}>
              <option disabled value="">
                지역
              </option>
              <option value=" ">전체</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="인천">인천</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="광주">광주</option>
              <option value="울산">울산</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="충북">충북</option>
              <option value="충남">충남</option>
              <option value="경북">경북</option>
              <option value="경남">경남</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="제주">제주</option>
            </StyledFilter>
            <StyledFilter name="sort" onChange={filterHandler}>
              <option value="new">최근순</option>
              <option value="popular">인기순</option>
            </StyledFilter>
          </StyledFilterBox>
          <Button
            _onClick={checkToken}
            text={<TbPlus size={20} />}
            style={{
              width: "28px",
              height: "28px",
              color: "#fff",
              bd_radius: "50%",
              bg_color: "#6563ff",
              bd_color: "#ccc",
              pd_top: "3px",
              pd_bottom: "3px",
              pd_left: "3px",
              pd_right: "3px",
            }}
          />
        </StyledButtonWrap>
      </StyledOptionWrap>
      <StyledListCardWrap>
        {!ready ? (
          <LoadingSpinner />
        ) : data.length !== 0 ? (
          data?.map((data, i) => <ListPageCard onClick={() => navigate(`/detail/${data.mapNo}`)} key={i} data={data} />)
        ) : (
          <h3>검색 결과가 없습니다.</h3>
        )}
        {!listEnd ? null : data.length !== 0 ? <h3 style={{ textAlign: "center" }}>데이터가 모두 로딩 되었습니다.</h3> : null}
      </StyledListCardWrap>
    </StyledListWrap>
  );
};

export default List;

export const StyledListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 1em 2em;
  }
`;

export const StyledOptionWrap = styled.div`
  width: 77em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledSerchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;
`;
export const StyledSerchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 3px;
  position: relative;
  width: 50%;
  span {
    width: 200px;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    span {
      width: 130px;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
export const StyledSerchIcon = styled.div`
  position: absolute;
  font-size: 1.6em;
  left: 546px;
  cursor: pointer;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const StyledFilterBox = styled.div`
  display: ${(props) => props.display};
  white-space: nowrap;

  span {
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => props.r_display};
    position: ${(props) => props.position};
    top: 114px;
    right: 66px;
  }
`;

export const StyledFilter = styled.select`
  width: ${(props) => (props.width ? props.width : "")};
  border: none;
  margin-right: 20px;
  padding: 5px 5px;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-right: 0px;
  }
`;
export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 124px;
  cursor: pointer;
  padding: 6px 30px 6px 0;
  @media screen and (max-width: 768px) {
    right: 0;
    padding: 6px 16px 6px 0;
  }
`;
export const StyledListCardWrap = styled.div`
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
