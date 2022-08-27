// Style
import { StyledButton } from './Button.styled';

const Button = ({ type, text, style, _onClick }) => {
  return (
    <StyledButton
      type={type}
      onClick={_onClick}
      width={style?.width}
      height={style?.height}
      ft_size={style?.ft_size}
      bg_color={style?.bg_color}
      color={style?.color}
      mg_top={style?.mg_top}
      mg_bottom={style?.mg_bottom}
      mg_left={style?.mg_left}
      mg_right={style?.mg_right}
      bd_radius={style?.bd_radius}
      bd_color={style?.bd_color}
      position={style?.position}
    >
      {text}
    </StyledButton>
  );
};

export default Button;