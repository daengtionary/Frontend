import styled from "styled-components";

const Loading = () => {
  return (
    <Lo>
      <h1 style={{ fontSize: "10em" }}>로딩 중..</h1>
    </Lo>
  );
};
const Lo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  position: fixed;
  top: 0;
  left: 0;
`;
export default Loading;
