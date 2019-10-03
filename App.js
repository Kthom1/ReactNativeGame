import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userInput, setUserInput] = useState();

  const startGameHandler = userInput => {
    setUserInput(userInput);
  };

  let screen = <StartGameScreen startGame={startGameHandler} />;

  if (userInput) {
    screen = <GameScreen userInput={userInput} />;
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
