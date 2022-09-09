import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import { getList } from "../../redux/modules/listSlice";
// import { FixedSizeList as List } from "react-window";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.getList);
  const location = useLocation();
  const [dataList, setDataList] = useState();
  console.log(location);
  console.log(data);
  console.log(dataList);

  useEffect(() => {
    dispatch(getList(location.pathname));
    setDataList(data);
  }, []);

  const [isTopButtonOn, setIsTopButtonOn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [isTopButtonOn]);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      console.log(isTopButtonOn);
      setIsTopButtonOn(true);
      return;
    }
    if (window.scrollY <= 300) {
      console.log(isTopButtonOn);
      setIsTopButtonOn(false);
      return;
    }
  };

  return (
    <ListWrap>
      {dataList &&
        dataList
          // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          .map((data, i) => <ListPageCard key={i} data={data} />)}
      {isTopButtonOn ? (
        <TopBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          TOP
        </TopBtn>
      ) : null}
    </ListWrap>
  );
};

export default List;

////////////////////////////////////////////////////////
// const Exam = () => {
//   const data = ["hello", "world"];
//   return (
//     <List
//       className="List"
//       // class 이름
//       height={1000}
//       // 아이템이 보이는 곳의 크기
//       itemCount={1000}
//       // 아이템 개수
//       itemSize={75}
//       // 아이템 높이
//       width={"100vw"}
//       // 아이템 보이는 곳의 넓이
//       itemData={data}
//       // 아이템 데이터 (배열로 줘서 component에서 indexing 해주자)
//       style={{}}
//     >
//       {Column}
//     </List>
//   );
// };
// const Column = (props) => {
//   // props의 구조는 { data, style, index, isScrolling }으로 되어있다.
//   return (
//     <div>
//       <ListPageCard data={props.data} />
//       {console.log(props)}
//     </div>
//   );
// };
// export default Exam;
///////////////////////////////////////////////////////////

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
  bottom: 3em;
  right: 3em;

  cursor: pointer;

  transition: all 200ms;
  :hover {
    transform: scale(1.2);
  }
`;
