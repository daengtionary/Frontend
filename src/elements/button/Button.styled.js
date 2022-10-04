import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  /* ${(props) => (props.checked ? css`` : css``)} */
  width: ${(props) => (props.width ? props.width : "160px")};
  height: ${(props) => (props.height ? props.height : "44px")};
  font-size: ${(props) => (props.ft_size ? props.ft_size : "13px")};
  font-weight: ${(props) => (props.ft_weight ? props.ft_weight : "400")};
  background-color: ${(props) => (props.bg_color ? props.bg_color : "rgba(0, 0, 0, 0.25)")};
  margin-top: ${(props) => (props.mg_top ? props.mg_top : "0px")};
  margin-bottom: ${(props) => (props.mg_bottom ? props.mg_bottom : "0px")};
  margin-left: ${(props) => (props.mg_left ? props.mg_left : "0px")};
  margin-right: ${(props) => (props.mg_right ? props.mg_right : "0px")};
  padding-top: ${(props) => (props.pd_top ? props.pd_top : "0px")};
  padding-bottom: ${(props) => (props.pd_bottom ? props.pd_bottom : "0px")};
  padding-left: ${(props) => (props.pd_left ? props.pd_left : "0px")};
  padding-right: ${(props) => (props.pd_right ? props.pd_right : "0px")};
  border-radius: ${(props) => (props.bd_radius ? props.bd_radius : "0px")};
  overflow: hidden;
  position: ${(props) => (props.position ? props.position : "relative")};
  top: ${(props) => (props.top ? props.top : "")};
  left: ${(props) => (props.left ? props.left : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  right: ${(props) => (props.right ? props.right : "")};
  z-index: ${(props) => (props.z_index ? props.z_index : "0")};

  img {
    width: 11em;
    height: 11em;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 0.2s;
    transform: translate(-50%, -50%) scale(1) rotate(0.001deg);
  }

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.media?.width ? props.media?.width : props.width)};
    height: ${(props) => (props.media?.height ? props.media?.height : props.height)};
    font-size: ${(props) => (props.media?.ft_size ? props.media?.ft_size : props.ft_size)};
    font-weight: ${(props) => (props.media?.ft_weight ? props.media?.ft_weight : props.ft_weight)};
    background-color: ${(props) => (props.media?.bg_color ? props.media?.bg_color : props.bg_color)};
    margin-top: ${(props) => (props.media?.mg_top ? props.media?.mg_top : props.mg_top)};
    margin-bottom: ${(props) => (props.media?.mg_bottom ? props.media?.mg_bottom : props.mg_bottom)};
    margin-left: ${(props) => (props.media?.mg_left ? props.media?.mg_left : props.mg_left)};
    margin-right: ${(props) => (props.media?.mg_right ? props.media?.mg_right : props.mg_right)};
    padding-top: ${(props) => (props.media?.pd_top ? props.media?.pd_top : props.pd_top)};
    padding-bottom: ${(props) => (props.media?.pd_bottom ? props.media?.pd_bottom : props.pd_bottom)};
    padding-left: ${(props) => (props.media?.pd_left ? props.media?.pd_left : props.pd_left)};
    padding-right: ${(props) => (props.media?.pd_right ? props.media?.pd_right : props.pd_right)};
    border-radius: ${(props) => (props.media?.bd_radius ? props.media?.bd_radius : props.bd_radius)};
    overflow: hidden;
    position: ${(props) => (props.media?.position ? props.media?.position : props.position)};
    display: ${(props) => (props.media?.display ? props.media?.display : props?.display)};
    top: ${(props) => (props.media?.top ? props.media?.top : props.top)};
    left: ${(props) => (props.media?.left ? props.media?.left : props.left)};
    bottom: ${(props) => (props.media?.bottom ? props.media?.bottom : props.bottom)};
    right: ${(props) => (props.media?.right ? props.media?.right : props.right)};
    z-index: ${(props) => (props.media?.z_index ? props.media?.z_index : props.z_index)};
    transform: ${(props) => (props.media?.transform ? props.media?.transform : props.transform)};
    img {
      width: 6.5em;
      height: 6.5em;
      position: absolute;
      top: 50%;
      left: 50%;
      transition: transform 0.2s;
      transform: translate(-50%, -50%) scale(1) rotate(0.001deg);
    }
  }

  &:hover {
    cursor: pointer;
    outline: none;
    font-weight: ${(props) => (props.hv_ft_weight ? props.hv_ft_weight : props.ft_weight)};
    color: ${(props) => (props.hv_color ? props.hv_color : props.color)};
    border: 0.1px solid ${(props) => (props.hv_bd_color ? props.hv_bd_color : props.bd_color)};
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.15) rotate(0.001deg);
    }
  }
  ${(props) =>
    !props.checked
      ? css`
          border: 0.1px solid ${(props) => (props.bd_color ? props.bd_color : "#000000")};
          font-weight: ${(props) => (props.ft_weight ? props.ft_weight : "400")};
          color: ${(props) => (props.color ? props.color : "#ffffff")};
        `
      : css`
          cursor: pointer;
          outline: none;
          font-weight: ${(props) => (props.hv_ft_weight ? props.hv_ft_weight : props.ft_weight)};
          color: #6563ff;
          border: 2px solid #6563ff;
          background-color: #fff;
          &:hover {
            color: #6563ff;
            border: 2px solid #6563ff;
          }
        `}
`;
