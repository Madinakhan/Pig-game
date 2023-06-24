import { styles } from "./styles";

const Board = ({ playerName = "Player", currentScore = 0, playerScore = 0, active }) => {
  return (
    <div
      className={`board ${active ? "active" : "bg-board"}  ${styles.center} flex-col justify-between py-[50px] text-center w-1/2 h-full `}
    >
      <div>
        <div className="player-name text-[40px] text-[#333] uppercase">{playerName}</div>
        <div className="player-score text-[80px] text-[#C7365F] uppercase">{playerScore}</div>
      </div>
      <div className={`board w-[208px] h-[120px] bg-[#C7365F] rounded-[10px] ${styles.center} flex-col gap-[20px]`}>
        <div className="current text-[17px] text-[#ddd] uppercase">CURRENT</div>
        <div className="point text-[35px] text-[#fff]">{currentScore}</div>
      </div>
    </div>
  );
};

export default Board;