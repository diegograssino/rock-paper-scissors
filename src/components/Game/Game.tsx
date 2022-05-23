import React, {useEffect, useState} from "react";

import {Styled} from "./Game.styled";

const Game = () => {
  type Weapons = "💎" | "📖" | "✂" | "";

  enum GameState {
    Playing,
    Won,
    Lost,
    Draw,
    Error,
  }

  const [playerWeapon, setPlayerWeapon] = useState<Weapons>("");
  const [randomWeapon, setRandomWeapon] = useState<Weapons>("");
  const [result, setResult] = useState<GameState>(GameState.Playing);

  useEffect(() => {
    if (playerWeapon && randomWeapon) {
      if (playerWeapon === randomWeapon) {
        setResult(GameState.Draw);
      } else if (
        (playerWeapon === "💎" && randomWeapon === "✂") ||
        (playerWeapon === "✂" && randomWeapon === "📖") ||
        (playerWeapon === "📖" && randomWeapon === "💎")
      ) {
        setResult(GameState.Won);
      } else {
        setResult(GameState.Lost);
      }
    }
  }, [randomWeapon]);

  function handleWeaponSelection(weapon: Weapons): void {
    if (result !== GameState.Playing) {
      resetBoard();
      setPlayerWeapon(weapon);
    } else {
      setPlayerWeapon(weapon);
    }
  }
  function handlePlay(): void {
    if (playerWeapon && (result === GameState.Playing || result === GameState.Error)) {
      const newRandomWeapon: number = Math.floor(Math.random() * 3);

      switch (newRandomWeapon) {
        case 0:
          setRandomWeapon("💎");
          break;
        case 1:
          setRandomWeapon("📖");

          break;
        case 2:
          setRandomWeapon("✂");
          break;
      }
    } else if (result === GameState.Won || result === GameState.Lost) {
      resetBoard();
    } else {
      setResult(GameState.Error);
    }
  }

  function resetBoard(): void {
    setPlayerWeapon("");
    setRandomWeapon("");
    setResult(GameState.Playing);
  }

  return (
    <Styled>
      <div className="container">
        <div className="grid2x1">
          <div>Vos:</div>
          <div>Random:</div>
          <div className="square">{playerWeapon}</div>
          <div className="square">{randomWeapon}</div>
        </div>
        <div className="select">Seleciona tu arma:</div>
        <div className="grid3x1">
          <div className="square" onClick={() => handleWeaponSelection("💎")}>
            💎
          </div>
          <div className="square" onClick={() => handleWeaponSelection("📖")}>
            📖
          </div>
          <div className="square" onClick={() => handleWeaponSelection("✂")}>
            ✂
          </div>
        </div>
        <div className="btn-play" onClick={handlePlay}>
          Play!
        </div>
        <div className="btn-play" onClick={resetBoard}>
          Reset
        </div>
        {result === GameState.Won && <div className="select">¡GANASTE!</div>}
        {result === GameState.Lost && <div className="select">¡PERDISTE!</div>}
        {result === GameState.Draw && <div className="select">¡EMPATE!</div>}
        {result === GameState.Error && <div className="select">¡Selecciona un arma!</div>}
      </div>
    </Styled>
  );
};

export default Game;
