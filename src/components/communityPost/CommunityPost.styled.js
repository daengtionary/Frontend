import styled from "styled-components";

export const StyledCommunityPostForm = styled.form`
  width: 100%;
  height: 60vh;
  border: 1px solid #797979;
  border-radius: 10px;

  @media screen and (max-width: 768px){
    height: 85%;
  }
`;
export const StyledCategory = styled.div`
  display: flex;
  height: 10%;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 5%;
  }
`;
export const StyledUserName = styled.div`
  display: flex;
  height: 10%;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 5%;
  }
`;
export const StyledTitle = styled.div`
  display: flex;
  height: 10%;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 5%;
  }
`;

export const StyledImgFile = styled.div`
  display: flex;
  height: 10%;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 5%;
  }
`;


export const StyledContent = styled.div`
  display: flex;
  height: 60%;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    height: 80%;
  }
`;

export const StyledLabel = styled.div`
  box-sizing: border-box;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-left-radius: ${(props) => props.topLeftRadius};
  border-bottom-left-radius: ${(props) => props.bottomLeftRadius};
  border-top: ${(props) => props.borderTop};
  /* border-bottom: ${(props) => props.borderBottom}; */
  background-color: #f1f1f1;

  label { 
    font-size: 12px;
  }
`;

export const StyledUserNick = styled.div`
  font-size: 12px;

`

export const StyledPosts = styled.div`
  box-sizing: border-box;
  width: 85%;
  padding: 0 25px;
  height: 100%;
  border-top: ${(props) => props.borderTop};
  display: flex;
  align-items: center;
`;

export const StyledFileInput = styled.input`
  display: flex;
  align-items: center;
  height: 90%;
  
  `
export const StyledInput = styled.input`
    border: none;
    width: 100%;
    height: 60%;
`


export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: 95%;
  border: none;
  padding: 10px;
`

export const StyledButtonWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  
  button {
    border: none;
    width: 220px;
    height: 45px;
    border-radius: 10px;
    background-color: #6563FF;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    button {
    width: 100%;
    height: 45px;
  }
  }
`

export const StyledSelect = styled.select`
  border: 1px solid #f1f1f1;
  width: 100px;
  border-radius: 10px;
  height: 60%;
  padding: 0 10px
`