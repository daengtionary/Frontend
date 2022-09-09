import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ListPageCard from "../../components/card/ListPageCard";
import { getList } from "../../redux/modules/listSlice";
import ChatFloatButton from "../../components/chatFloatButton/ChatFloatButton";

const List = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.list.getList);
  const location = useLocation();
  console.log(location.pathname);
  console.log(dataList);
  useEffect(() => {
    dispatch(getList(location.pathname));
  }, []);
  return (
    <ListWrap>
      {dataList.map((data) => (
        <ListPageCard data={data} />
      ))}
      <TopBtn
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        TOP
      </TopBtn>
      <ChatFloatButton></ChatFloatButton>
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
