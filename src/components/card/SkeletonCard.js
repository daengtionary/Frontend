import styled, { keyframes } from "styled-components";

const SkeletonCard = ({ data }) => {
  return (
    <CardBox>
      <CardImgBox>
        <CardImg background={data?.mapImgUrl} />
      </CardImgBox>
      <CardTextBox>
        <CardText color="#000" margin="6px 0" fontSize="1.2em" fontWeight="400">
          {data?.title}
        </CardText>
        <CardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {data?.mapInfo}
        </CardText>
        <CardText
          color="#000"
          margin="6px 0"
          fontSize="0.5em"
          fontWeight="400"
        ></CardText>
        <CardText color="#999" margin="6px 0" fontSize="0.7em" fontWeight="700">
          {data?.address}
        </CardText>
        <CardText
          color="#999"
          margin="6px 0"
          fontSize="0.8em"
          fontWeight="400"
          height="10em"
        ></CardText>
        <CardText
          color="#000"
          margin="6px 0"
          fontSize="1em"
          fontWeight="400"
          textAlign="right"
          justify="flex-end"
        ></CardText>

        {/* {console.log(data?.mapImgUrl)} */}
      </CardTextBox>
    </CardBox>
  );
};

export default SkeletonCard;
const shine = keyframes`
  to {
    background-position:
      100% 0,
      200px 0;
  }
`;

const CardBox = styled.div`
  width: 75em;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3em;
  padding: 2em 1em;
  border: 1.5px solid #ccc;
  border-radius: 20px;
`;
const CardImgBox = styled.div`
  /* background: ${(props) =>
    `url(${props.background}) no-repeat top center`}; */
  height: 18em;
  /* width: 18em; */
  flex: 1 1;
  padding: 0 1.5em;
`;
const CardImg = styled.div`
  /* background: ${(props) =>
    props.background
      ? `url(${props.background}) center / cover no-repeat`
      : "#cccccc50"}; */
  &:empty {
    border-radius: 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(
        100deg,
        #cccccc70 30%,
        #cccccc30 50%,
        #cccccc70 80%
      ),
      linear-gradient(#eeeeee 20px, transparent 0);
    background-size: 50% 100%;
    background-position: 0 0, 0, 0;
    animation: ${shine} 1.2s infinite;
  }
  height: 100%;
  border-radius: 20px;
`;
const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  /* height: 18em; */
`;

const CardText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  height: ${(props) => (props.height ? props.height : "1em")};
  word-break: keep-all;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  border-radius: 15px;
  background: #cccccc50;
  &:empty {
    border-radius: 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(
        100deg,
        #cccccc70 30%,
        #cccccc30 50%,
        #cccccc70 80%
      ),
      linear-gradient(#eeeeee 20px, transparent 0);
    background-size: 50% 100%;
    background-position: 0 0, 0, 0;
    animation: ${shine} 1.2s infinite;
  }
`;
