import styled from "styled-components";

export const SearchBarWrap = styled.div`
  input {
    border: none;
    background-color: #f1f1f1;
    padding: 10px 15px;
    border-radius: 25px;
    width: 330px;
    height: 24px;

    background-image: url("/img/search.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 95% center;
  }

  @media screen and (max-width: 425px) {
    /* border: 1px solid red; */
    width: 45%;
    input{
      width: 100%;
      background-image: url("/img/search.png");
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 95% center;
    }
    input::-webkit-input-placeholder {
      color: #f1f1f1;
      font-size: 2px;
    }
  }
`;
