import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const startGameHandler = userInput => {
    setUserInput(userInput);
    setNumberOfGuesses(0);
  };

  const gameOverhandler = number => {
    setNumberOfGuesses(number);
  };

  const newGameHandler = () => {
    setNumberOfGuesses(0);
    setUserInput(null);
  };

  let screen = <StartGameScreen startGame={startGameHandler} />;

  if (userInput && numberOfGuesses <= 0) {
    screen = <GameScreen userInput={userInput} gameOver={gameOverhandler} />;
  } else if (numberOfGuesses > 0) {
    screen = (
      <GameOverScreen
        userInput={userInput}
        numberOfGuesses={numberOfGuesses}
        playAgain={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
