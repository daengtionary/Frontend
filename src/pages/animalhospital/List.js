import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import { getList } from "../../redux/modules/listSlice";



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
