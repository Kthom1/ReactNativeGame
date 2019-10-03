import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const numberInputHandler = textInput => {
    setEnteredValue(textInput.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.startTitle}>Start a New Game</Text>
        <Card style={styles.inputBox}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonBox}>
            <View style={styles.button}>
              <Button title="Reset" color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center"
  },
  buttonBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100
  }
});
