import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import FontWeights from "../constants/FontWeights";
import FontSizes from "../constants/FontSizes";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: FontSizes.xlarge,
    fontWeight: FontWeights.medium
  }
});
