import styled from "styled-components";

const red = `invert(24%) sepia(100%) saturate(5885%) hue-rotate(357deg) brightness(102%) contrast(129%);`;

export const CommunityCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #797979;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
  
  &:hover {
    box-shadow: 3px 3px 3px #6563ff50;
  }

  @media screen and (max-width: 768px) {
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #dbdbdb;
    height: 350px;
  }
`;
export const CardContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  height: 120px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
  gap: 5px;

  @media screen and (max-width: 768px) {
    margin: 0;
    gap: 0px;
  }
`;

export const IconBox = styled.span`
  width: ${(props) => props.length};
  height: ${(props) => props.length};
  cursor: pointer;

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

  @media screen and (max-width: 768px) {
    width: 0px;
    height: 0px;
  }
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

  @media screen and (max-width: 768px){
    left: -10px;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    margin-bottom: 10px;
  }
`

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
  background-size: 57px;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin: 0;
    background-size: 35px;
  }
`;

export const Names = styled.div`
  margin: 0 20px 0 0;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 10px;
  }
`;

export const ContentImg = styled.img`
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  border-radius: 15px;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }
`

export const DefaultImg = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  border-radius: 15px;
  margin-right: 15px;
  
  background-image: url("img/dogIconGray.png");
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #F1F1F5;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 200px;
    margin-bottom: 15px;
    background-size: 100px;
  }
  
`

export const CategoryTitleWrap = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #6563ff;
  color: #6563ff;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 16px;
  margin-right: 20px;
  width: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px){
    height: 20px;
    width: 30px;
    font-size: 14px;
    margin: 0;
    border-radius: 15px;
  }
`;

export const Title = styled.div`
  font-size: 15px;
  color: #797979;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 80%;
    /* border: 1px solid red; */
  }
`;
export const Dog = styled.div`
  color: #797979;
  font-size: 12px;
`;

export const User = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
