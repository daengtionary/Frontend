import { debounce, throttle } from "lodash";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import Loading from "../../components/card/Loading";
import SkeletonCard from "../../components/card/SkeletonCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";
import {
  getList,
  getListFirst,
  reset,
  resetLoad,
  searchList,
} from "../../redux/modules/listSlice";
import search from "../../static/image/search.png";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.getList);
  const searchData = useSelector((state) => state.list.searchList);
  const ready = useSelector((state) => state.list.isLoad);
  console.log(ready);
  const listEnd = useSelector((state) => state.list.isEnd);
  console.log(listEnd);

  const location = useLocation();
  const { pathname, serch } = location;

  // const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isTopButtonOn, setIsTopButtonOn] = useState(false);
  const filterButton = ["#전체", "#동물병원", "#애견호텔", "#애견카페"];
  const [checked, setChecked] = useState([true, false, false, false]);
  const onClickFilterHandler = (i) => {
    const newArr = Array(filterButton.length).fill(false);
    newArr[i] = true;
    setChecked(newArr);
    // dispatch(mainList(filterButton[i]));
  };
  const [filter, setFilter] = useState({ address: "", sort: "new" });
  const { address, sort } = filter;
  const [size, setSize] = useState(4);
  console.log(filter);

  console.log(pathname, serch);
  console.log(data);
  console.log(searchData);

  // useLayoutEffect(() => {
  //   dispatch(getListFirst({ pathname: pathname, page: page, address: "" }));
  //   console.log("마운트");
  //   return () => {
  //     dispatch(getListFirst({ pathname: pathname, page: page, address: "" }));
  //     console.log("언마운트");
  //   };
  // }, []);
  useLayoutEffect(
    debounce(() => {
      // if (
      //   searchText === "" &&
      //   filter.address === ""
      //   // ||
      //   // (searchText === "" && address === "전체")
      // ) {
      // dispatch(reset());
      dispatch(
        searchList({
          pathname,
          page,
          size,
          address,
          sort,
          title: searchText,
          content: "",
          nick: "",
        })
      );
      // alert("1번 실행");
      // }
      // else if (searchText !== "" || filter.address !== "")
      // else {
      //   dispatch(
      //     searchList({
      //       pathname,
      //       page,
      //       size,
      //       address,
      //       sort,
      //       title: searchText,
      //       content: "",
      //       nick: "",
      //     })
      //   );
      //   alert("2번 실행");
      // }
      // else if (page === 0) {
      //   // dispatch(reset());
      //   dispatch(
      //     searchList({
      //       pathname,
      //       page,
      //       size,
      //       address,
      //       sort,
      //       title: "",
      //       content: "",
      //       nick: "",
      //     })
      //   );
      // }
    }, 200),
    [page, filter]
  );
  // setTimeout(() => setDataList(data), 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [isTopButtonOn]);

  const handleScroll = debounce((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    // console.log("1", scrollTop);
    // console.log("2", scrollHeight);
    // console.log("3", scrollTop + clientHeight - scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      console.log("바닥");
      setPage((page) => page + 1);
      // dispatch(resetLoad());
    }
    if (scrollTop > 300) {
      setIsTopButtonOn(true);
      // return;
    }
    if (scrollTop <= 300) {
      setIsTopButtonOn(false);
      // return;
    }
  }, 200);
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearchText(value);
  };
  const onClickHandler = () => {
    // setAddress("");
    setPage(0);
    dispatch(reset());
    dispatch(
      searchList({
        pathname,
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
  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };
  const filterHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    dispatch(reset());
    setFilter({ ...filter, [name]: value });
    console.log(filter);
    setPage(0);

    // dispatch(searchList({ pathname: pathname, page: page, address: value }));
  };
  return (
    <ListWrap>
      <OptionWrap>
        <SerchWrap>
          <SerchBox>
            <h2>지금 가장 핫한</h2>
            <Input
              _onKeyPress={onKeyPressHandler}
              _onChange={onChangeHandler}
              placeholder={"어떤 장소를 찾으세요?"}
              style={{
                width: "40%",
                mg_left: "3.6em;",
                bd_radius: "3em",
                bg_color: "#cccccc60",
                bd: "none",
                bd_bottom: "none",
                pd_left: "1.6em",
                pd_right: "5em",
                height: "3.4em",
              }}
            />
            {/* <SerchIcon onClick={onClickHandler}>🔍</SerchIcon> */}
            <SerchImg
              onClick={onClickHandler}
              src={search}
              style={{ width: "2em" }}
            />
          </SerchBox>
          <FilterBox>
            <Fiter name="address" onChange={filterHandler} width={"60px"}>
              <option disabled selected value="">
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
            </Fiter>
            <Fiter name="sort" onChange={filterHandler}>
              {/* <option disabled selected>
                정렬방식
              </option> */}
              <option value="new">최근순</option>
              <option value="popular">인기순</option>
            </Fiter>
          </FilterBox>
        </SerchWrap>
        <ButtonWrap>
          {filterButton.map((btn, i) => (
            <Button
              key={i}
              text={btn}
              checked={checked[i]}
              _onClick={() => onClickFilterHandler(i)}
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
                hv_color: "#000",
                hv_bd_color: "#000",
                f_color: "#000",
                f_bd_color: "#000",
                ft_weight: "700",
                f_ft_weight: "700",
                hv_ft_weight: "700",
              }}
            />
          ))}
        </ButtonWrap>
      </OptionWrap>
      <ListCardWrap>
        {
          // !address || address === "전체"?
          // ready && data.length !== 0 ? (
          //   data?.map(
          //     (data, i) => (
          //       // isLoad ? (
          //       <ListPageCard key={i} data={data} />
          //     )
          //     // ) : (
          //     //   <SkeletonCard key={i} />
          //     // )
          //   )
          // ) : !ready ? (
          //   <h3>로딩중</h3>
          // ) : (
          //   <h3 style={{ paddingTop: "2em" }}>검색 결과가 없습니다.</h3>
          // )

          !ready ? (
            <LoadingSpinner />
          ) : data.length !== 0 ? (
            data?.map((data, i) => <ListPageCard key={i} data={data} />)
          ) : (
            <h3>검색 결과가 없습니다.</h3>
          )
        }
        {!listEnd ? null : data.length !== 0 ? (
          <h3 style={{ textAlign: "center" }}>
            데이터가 모두 로딩 되었습니다.
          </h3>
        ) : null}
      </ListCardWrap>
      {isTopButtonOn ? (
        <TopBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          TOP
        </TopBtn>
      ) : null}
    </ListWrap>
  );
};

export default List;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
`;
const TopBtn = styled.button`
  /* display: ${(props) => (props.ScrollActive ? "block" : "none")}; */
  width: 50px;
  height: 50px;

  font-weight: 700;

  border: none;
  border-radius: 50%;

  background-color: initial;
  box-shadow: 0px 0px 10px gray;

  position: fixed;
  bottom: 10em;
  right: 3em;

  cursor: pointer;

  transition: all 200ms;
  :hover {
    transform: scale(1.2);
  }
`;
const OptionWrap = styled.div`
  width: 77em;

  /* padding: 0 2em; */
`;
const SerchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;
`;
const SerchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 3px;
  position: relative;
  width: 50%;
`;
const SerchIcon = styled.div`
  position: absolute;
  font-size: 1.6em;
  left: 546px;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
export const FilterBox = styled.div``;
export const Fiter = styled.select`
  width: ${(props) => (props.width ? props.width : "")};
  border: none;
  margin-right: 20px;
  padding: 5px 5px;
`;
const SerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 84px;
  cursor: pointer;
  padding: 6px 20px 6px 0;
`;
const ListCardWrap = styled.div`
  min-height: 30em;
`;
