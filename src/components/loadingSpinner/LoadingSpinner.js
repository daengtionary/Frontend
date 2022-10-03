import styled from "styled-components";
import loadingImg from "../../static/image/로딩-이미지.jpg";

const LoadingSpinner = () => {
  return (
    <Wrap>
      <Spinner>
        <SpinnerImg src={loadingImg} />
      </Spinner>
    </Wrap>
  );
};
const Wrap = styled.div`
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* max-width: 1360px;
  max-height: 1160px; */
  /* transform: translate(-50%, -50%); */
  background-color: #00000080;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
const Spinner = styled.div`
  width: 20%;
  background: transparent;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  text-align: center;
  animation: rotate 1.5s infinite;
  transform: rotate(0deg);
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const SpinnerImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.1);
`;

export default LoadingSpinner;
