import jwtDecode from "jwt-decode";
import { debounce, throttle } from "lodash";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import { getListThunk, reset, resetLoad, searchListThunk, firstListThunk, resetEnd, pageUp, setChecked } from "../../redux/modules/listSlice";
import { resetPosted } from "../../redux/modules/placeSlice";
import searchIcon from "../../static/image/search.png";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.getList);
  // const searchData = useSelector((state) => state.list.searchListThunk);
  const pageNum = useSelector(state => state.list.pageNum);
  const ready = useSelector(state => state.list.isLoad);
  console.log(ready);
  const listEnd = useSelector(state => state.list.isEnd);
  console.log(listEnd);
  const checked = useSelector(state => state.list.isChecked);
  console.log(checked);
  const pathName = useSelector(state => state.list.pathName);
  console.log(pathName);
  const posted = useSelector(state => state.place.isPosted);
  console.log(posted);
  const location = useLocation();
  const { pathname, search } = location;

  // const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isTopButtonOn, setIsTopButtonOn] = useState(false);
  const filterButton = [
    { name: "#전체", path: "/place" },
    { name: "#동물병원", path: "/hospital" },
    { name: "#애견호텔", path: "/room" },
    { name: "#애견카페", path: "/cafe" },
  ];
  const [filter, setFilter] = useState({ address: "", sort: "new" });
  const { address, sort } = filter;
  const [size, setSize] = useState(4);
  // const [checked, setChecked] = useState([true, false, false, false]);
  const onClickFilterHandler = (i, path) => {
    dispatch(setChecked({ i, path }));
    // const newArr = Array(filterButton.length).fill(false);
    // newArr[i] = true;
    // setChecked(newArr);
    // dispatch(pageUp(0));
    // dispatch(reset());
    // navigate(`${path}`);
    dispatch(resetEnd());

    // if (path === "/all") {
    //   dispatch(
    //     firstListThunk({
    //       pathname: "/query?category",
    //       page: 0,
    //       size,
    //       address,
    //       sort,
    //       title: searchText,
    //       content: "",
    //       nick: "",
    //     })
    //   );
    // } else {
    //   dispatch(
    //     firstListThunk({
    //       pathname: path + "/search",
    //       page: 0,
    //       size,
    //       address,
    //       sort,
    //       title: searchText,
    //       content: "",
    //       nick: "",
    //     })
    //   );
    // }
  };
  console.log(filter);

  console.log(pathname, search);
  console.log(data);
  console.log(page, pageNum);
  // console.log(searchData);

  useLayoutEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
      dispatch(setChecked(0));
    });
    if (!listEnd) {
      if ((pathName && pathName === "place") || pathName === "/place") {
        console.log(page);
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
      } else if (pathName === "/cafe") {
        alert("애견카페 카테고리는 준비 중입니다. ㅜㅜ");
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
    // }
  }, [checked, pageNum, filter, posted]);
  // setTimeout(() => setDataList(data), 10);

  useEffect(
    throttle(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); //clean up
      };
    }, 200),
    []
  );

  const handleScroll = debounce(e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    // console.log("1", scrollTop);
    // console.log("2", scrollHeight);
    // console.log("3", scrollTop + clientHeight - scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      console.log("끝?", listEnd);
      // setPage((page) => page + 1);
      // 페이지도 스토어에 저장하는걸로....
      dispatch(pageUp(1));

      // dispatch(resetLoad());
    }
  }, 200);
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = e => {
    const { value } = e.target;
    console.log(value);
    setSearchText(value);
  };
  const onClickHandler = () => {
    // setAddress("");
    setPage(0);
    dispatch(reset());
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
    // alert("검색 실행");
  };
  const onKeyPressHandler = e => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };
  const filterHandler = e => {
    const { name, value } = e.target;
    console.log(e);
    dispatch(reset());
    setFilter({ ...filter, [name]: value });
    console.log(filter);
    setPage(0);

    // dispatch(searchListThunk({ pathname: pathname, page: page, address: value }));
  };

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
            <h2>지금 가장 핫한</h2>
            <Input
              _onKeyPress={onKeyPressHandler}
              _onChange={onChangeHandler}
              placeholder={"어떤 장소를 찾으세요?"}
              style={{
                width: "40%",
                mg_left: "3.6em;",
                bd_radius: "3em",
                bg_color: "#eee",
                bd: "none",
                bd_bottom: "none",
                pd_left: "1.6em",
                pd_right: "5em",
                height: "3.4em",
              }}
            />
            {/* <SerchIcon onClick={onClickHandler}>🔍</SerchIcon> */}
            <StyledSerchImg onClick={onClickHandler} src={searchIcon} style={{ width: "2em" }} />
          </StyledSerchBox>
          <StyledFilterBox>
            <StyledFilter name="address" value={address || " "} onChange={filterHandler} width={"60px"}>
              <option value="">위치</option>
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
              {/* <option disabled selected>
                정렬방식
              </option> */}
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
                  pd_top: "8px",
                  pd_bottom: "8px",
                  pd_left: "14px",
                  pd_right: "14px",
                  hv_color: "#767676",
                  hv_bd_color: "#767676",
                  hv_ft_weight: "700",
                  ft_weight: "700",
                  // f_color: "#000",
                  // f_bd_color: "#000",
                  // f_ft_weight: "700",
                }}
              />
            ))}
          </div>
          <Button
            _onClick={checkToken}
            text={"글쓰기"}
            style={{
              width: "auto",
              height: "auto",
              color: "#fff",
              bg_color: "#6563ff",
              mg_left: "5px",
              mg_right: "5px",
              bd_radius: "10px",
              bd_color: "#ccc",
              pd_top: "8px",
              pd_bottom: "8px",
              pd_left: "20px",
              pd_right: "20px",
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
  /* justify-content: center; */
  position: relative;
`;

export const StyledOptionWrap = styled.div`
  width: 77em;

  /* padding: 0 2em; */
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
  span {
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledFilter = styled.select`
  width: ${props => (props.width ? props.width : "")};
  border: none;
  margin-right: 20px;
  padding: 5px 5px;
`;
export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 84px;
  cursor: pointer;
  padding: 6px 20px 6px 0;
`;
export const StyledListCardWrap = styled.div`
  min-height: 100vh;
`;
