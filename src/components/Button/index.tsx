import * as S from "./styles";

type Props = {
  onClick?: any;
  style?: React.CSSProperties;
  rounded?: boolean;
};

const Button: React.FC<Props> = (props) => {
  return <S.Button {...props} />;
};

export default Button;
