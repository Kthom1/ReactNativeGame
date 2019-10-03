import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";
import FontWeights from "../constants/FontWeights";

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.topText}>Game Over</Text>
      <Card style={styles.card}>
        <Text style={styles.bottomText}>Your number was {props.userInput}</Text>
        <Text style={styles.bottomText}>
          The computer guessed {props.numberOfGuesses} times
        </Text>
        <View style={styles.button}>
          <Button title="Play Again" onPress={props.playAgain} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 150,
    height: 200
  },
  topText: {
    fontWeight: FontWeights.large,
    fontSize: FontSizes.large,
    color: Colors.accent,
    marginTop: 50
  },
  bottomText: {
    fontSize: FontSizes.large,
    fontWeight: FontWeights.light
  },
  button: {
    marginTop: 30
  }
});
