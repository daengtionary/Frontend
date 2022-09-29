// Style
import { StyledButton } from "./Button.styled";
// import placeButtonImg from "../../static/image/플레이스.jpg";
// import tradeButtonImg from "../../static/image/장터.jpg";
// import communityButtonImg from "../../static/image/커뮤니티.jpg";

const Button = ({ type, text, style, _onClick, checked, id, img }) => {
  return (
    <StyledButton
      id={id}
      type={type}
      onClick={_onClick}
      checked={checked}
      width={style?.width}
      height={style?.height}
      ft_size={style?.ft_size}
      ft_weight={style?.ft_weight}
      // bg_img={style?.bg_img}
      bg_color={style?.bg_color}
      color={style?.color}
      mg_top={style?.mg_top}
      mg_bottom={style?.mg_bottom}
      mg_left={style?.mg_left}
      mg_right={style?.mg_right}
      pd_top={style?.pd_top}
      pd_bottom={style?.pd_bottom}
      pd_left={style?.pd_left}
      pd_right={style?.pd_right}
      bd_radius={style?.bd_radius}
      bd_color={style?.bd_color}
      hv_color={style?.hv_color}
      hv_bd_color={style?.hv_bd_color}
      hv_ft_weight={style?.hv_ft_weight}
      f_color={style?.f_color}
      f_bd_color={style?.f_bd_color}
      f_ft_weight={style?.f_ft_weight}
      position={style?.position}
      top={style?.top}
      left={style?.left}
    >
      {img && <img src={img} />}
      {text}
    </StyledButton>
  );
};

export default Button;
