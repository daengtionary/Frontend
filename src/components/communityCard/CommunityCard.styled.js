import styled from "styled-components";

const red = `invert(24%) sepia(100%) saturate(5885%) hue-rotate(357deg) brightness(102%) contrast(129%);`;

export const CommunityCardWrap = styled.div`
  width: 100%;
  border: 1px solid #797979;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const CardContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
  gap: 5px;
`;
export const IconBox = styled.span`
  width: ${(props) => props.length};
  height: ${(props) => props.length};

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: ${(props) => props.size};
  background-position: center;

  &:hover {
    ${(props) =>
      props.hover === "red"
        ? "filter: invert(24%) sepia(100%) saturate(5885%) hue-rotate(357deg) brightness(102%) contrast(129%);"
        : props.hover === "blue"
        ? "filter: invert(51%) sepia(47%) saturate(2605%) hue-rotate(203deg) brightness(101%) contrast(95%);"
        : ""}
  }
`;

export const UpdateIcon = styled.span`
  width: 24px;
  height: 24px;

  background-image: url("img/pen.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
`;
export const DeleteIcon = styled.span`
  width: 24px;
  height: 24px;

  background-image: url("img/delete.png");
  background-repeat: no-repeat;
  background-size: 28px;
  background-position: center;
`;

export const CommnetIcon = styled.span`
  width: 24px;
  height: 24px;

  background-image: url("img/comment.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
`;
export const NullCircle = styled.div`
  width: 14px;
  height: 14px;
`

export const RepleCircle = styled.div`
  border: none;
  border-radius: 50%;
  background-color: #797979;
  font-size: 10px;
  color: #ffffff;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -15px;
  top: -5px;
`;

export const ProfilePhoto = styled.div`
  border-radius: 50%;
  background-color: #ddd;
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  background-image: url(${props => props.url});
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Names = styled.div`
  margin: 0 20px 0 0;
`;

export const Category = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 16px;
  margin-right: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  width: 50%;
  padding: 10px 0;
  cursor: pointer;
`;
export const Dog = styled.div`
  color: #797979;
  font-size: 12px;
`;

export const User = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
