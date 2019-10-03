import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import FontWeights from "../constants/FontWeights";
import FontSizes from "../constants/FontSizes";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userInput)
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userInput, gameOver } = props;

  useEffect(() => {
    if (currentGuess === userInput) {
      gameOver(numberOfGuesses);
    }
  }, [currentGuess, userInput, gameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userInput) ||
      (direction === "higher" && currentGuess > props.userInput)
    ) {
      Alert.alert("Hey!", "No cheating!", [
        {
          text: "Close",
          style: "cancel"
        }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setNumberOfGuesses(currentNumber => currentNumber + 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => {
              nextGuessHandler("lower");
            }}
          />
          <Button
            title="Higher"
            onPress={() => {
              nextGuessHandler("higher");
            }}
          />
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  container: {
    marginTop: 150,
    alignItems: "center"
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: FontWeights.light
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});
