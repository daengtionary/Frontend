import { throttle } from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const TopButton = () => {
  const [isTopButtonOn, setIsTopButtonOn] = useState(false);

  useEffect(
    throttle(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); //clean up
      };
    }, 200),
    [isTopButtonOn]
  );
  const handleScroll = throttle((e) => {
    const { scrollTop } = e.target.documentElement;
    console.log("aaaaaaaa");
    if (scrollTop > 300) {
      setIsTopButtonOn(true);
    }
    if (scrollTop <= 300) {
      setIsTopButtonOn(false);
    }
  }, 200);
  return isTopButtonOn ? (
    <StyledTopBtn
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      TOP
    </StyledTopBtn>
  ) : null;
};
export default TopButton;

const StyledTopBtn = styled.button`
  /* display: ${(props) => (props.ScrollActive ? "block" : "none")}; */
  width: 50px;
  height: 50px;
  z-index: 100;

  font-weight: 700;

  border: none;
  border-radius: 50%;

  background-color: initial;
  box-shadow: 0px 0px 10px gray;

  position: fixed;
  bottom: 10em;
  right: 3em;

  cursor: pointer;

  transition: all 200ms;
  :hover {
    transform: scale(1.2);
  }
`;
