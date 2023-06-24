import React from "react";

const Login = ({ login, setPlayer1, setPlayer2, handleLogin }) => {
  return (
    <div className={`login ${login ? "hidden" : "flex"}  flex-col bg-black w-fit h-fit rounded-[10px] p-[20px]`}>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="inputs flex gap-[10px]">
          <label>
            <p className="text-[24px]">Player 1</p>
            <input
              type="text"
              onChange={(e) => setPlayer1(e.target.value)}
              className="w-[200px] h-[35px] rounded-[10px] mt-[8px] text-[#000] text-[20px] px-[10px]"
            />
          </label>
          <label>
            <p className="text-[24px]">Player 1</p>

            <input
              type="text"
              onChange={(e) => setPlayer2(e.target.value)}
              className="w-[200px] h-[35px] rounded-[10px] mt-[8px] text-[#000] text-[20px] px-[10px]"
            />
          </label>
        </div>
        <button className="w-full py-[10px] px-[30px] bg-white rounded-[10px] text-[#000] text-[20px] mt-[20px]">
          Start game
        </button>
      </form>
    </div>
  );
};

export default Login;
