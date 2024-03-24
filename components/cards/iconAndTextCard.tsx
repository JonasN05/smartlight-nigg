import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";

export default function IconAndTextCard(props: {
  icon: any;
  headText?: string;
  subText?: string;
}) {
  return (
    <View style={styles.container}>
      <Image source={props.icon} />
      <View style={styles.textField}>
        <Text style={styles.headText}>{props.headText}</Text>
        <Text style={styles.subText}>{props.subText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D3142",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  textField: {
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subText: {
    fontSize: 18,
    color: "#ffffff",
  },
});
