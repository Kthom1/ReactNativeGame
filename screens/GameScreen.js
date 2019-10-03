import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import FontWeights from "../constants/FontWeights";
import FontSizes from "../constants/FontSizes";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween1(min, max, exlude);
  } else {
    return randomNumber;
  }
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userInput)
  );
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button title="Lower" />
          <Button title="Higher" />
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
