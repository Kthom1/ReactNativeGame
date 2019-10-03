import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.startTitle}>Start a New Game</Text>
      <Card style={styles.inputBox}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonBox}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  startTitle: {
    fontSize: 20,
    marginVertical: 10
  },
  inputBox: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});
