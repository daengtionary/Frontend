// Style
import { StyledInput } from "./Input.styled";

const Input = ({
  type,
  value,
  _onChange,
  _onKeyPress,
  _onKeyDown,
  _minLength,
  _maxLength,
  _ref,
  style,
  placeholder,
  defaultValue,
  name,
  lineHeight,
}) => {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      onKeyDown={_onKeyDown}
      minLength={_minLength}
      maxLength={_maxLength}
      ref={_ref}
      lineHeight={style?.lineHeight}
      width={style?.width}
      height={style?.height}
      ft_size={style?.ft_size}
      bg_color={style?.bg_color}
      color={style?.color}
      pd_top={style?.pd_top}
      pd_bottom={style?.pd_bottom}
      pd_left={style?.pd_left}
      pd_right={style?.pd_right}
      mg_top={style?.mg_top}
      mg_bottom={style?.mg_bottom}
      mg_left={style?.mg_left}
      mg_right={style?.mg_right}
      bd_radius={style?.bd_radius}
      bd={style?.bd}
      bd_bottom={style?.bd_bottom}
      required
    />
  );
};

export default Input;
