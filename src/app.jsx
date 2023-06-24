import { useState, useEffect } from "react";
import { Board, Button, Image, Alert, Img1, Img2, Img3, Img4, Img5, Img6, Login } from "./components";
import { styles } from "./components/styles";

const App = () => {
  const [login, setLogin] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [alert, setAlert] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentScore, setcurrentScore] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [img, setImg] = useState(Img6);

  const buttonActions = [
    { action: "new", style: "top-[50px]", text: "New game", img: "fa-right-left" },
    { action: "roll", style: "top-[350px]", text: "Roll dice", img: "fa-dice-four" },
    { action: "hold", style: "top-[440px]", text: "Hold", img: "fa-right-left" },
  ];

  useEffect(() => {
    const storedPlayer1 = localStorage.getItem("player1");
    const storedPlayer2 = localStorage.getItem("player2");

    if (storedPlayer1 && storedPlayer2) {
      setPlayer1(storedPlayer1);
      setPlayer2(storedPlayer2);
      setLogin(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (player1.trim() !== "" && player2.trim() !== "") {
      setLogin(true);
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };

  const handleNewButton = () => {
    console.log("New button pressed");
    setActivePlayer(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setcurrentScore(0);
  };

  const handleRollButton = () => {
    const roll = Math.floor(Math.random() * 6) + 1;

    if (roll === 1) {
      setcurrentScore(0);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setImg(Img1);
    } else if (roll === 2) {
      setImg(Img2);
      setcurrentScore(currentScore + roll);
    } else if (roll === 3) {
      setImg(Img3);
      setcurrentScore(currentScore + roll);
    } else if (roll === 4) {
      setImg(Img4);
      setcurrentScore(currentScore + roll);
    } else if (roll === 5) {
      setImg(Img5);
      setcurrentScore(currentScore + roll);
    } else if (roll === 6) {
      setImg(Img6);
      setcurrentScore(currentScore + roll);
    }
  };

  const win = false;

  const handleHoldButton = () => {
    const newScore = activePlayer === 1 ? player1Score + currentScore : player2Score + currentScore;
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setcurrentScore(0);
    if (newScore >= 100) {
      setPlayer1Score(0);
      setPlayer2Score(0);
    } else {
      activePlayer === 1 ? setPlayer1Score(newScore) : setPlayer2Score(newScore);
    }
  };

  const handleButton = (button) => {
    switch (button) {
      case "new":
        return handleNewButton();
      case "roll":
        return handleRollButton();
      case "hold":
        return handleHoldButton();
      default:
        break;
    }
  };

  return (
    <>
      <div
        className={`main relative ${login ? "flex" : "hidden"}  ${
          styles.center
        } max-w-[1000px] w-full overflow-hidden h-[550px] bg-white rounded-[10px]`}
      >
        {buttonActions.map(({ style, text, img, action }, idx) => (
          <Button style={style} text={text} img={img} key={idx} onButton={() => handleButton(action)} />
        ))}
        <div className="images absolute top-[150px] m-auto w-[120px] h-[120px] bg-red-500">
          <Image src={img} />
        </div>

        <Board
          playerName={player1}
          currentScore={activePlayer === 1 ? currentScore : 0}
          playerScore={player1Score}
          active={activePlayer == 1 ? true : false}
        />
        <Board
          playerName={player2}
          currentScore={activePlayer === 2 ? currentScore : 0}
          playerScore={player2Score}
          active={activePlayer == 2 ? true : false}
        />
      </div>
      <Alert alert={alert} text={"Please enter players name !"} color={false} />
      <Login login={login} handleLogin={handleLogin} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
    </>
  );
};

export default App;
