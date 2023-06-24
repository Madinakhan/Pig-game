import { styles } from "./styles";

const Button = ({ style, text, img, onButton }) => {
  return (
    <div
      className={`${style} absolute m-auto z-20 ${styles.center} w-[150px] h-[50px] text-[#000] cursor-pointer gap-3 bg-white rounded-[20px] uppercase transition-[0.010s] active:scale-[0.97] `}
      onClick={onButton}
    >
      <i className={`fa-solid ${img}`}></i>
      <span>{text}</span>
    </div>
  );
};

export default Button;