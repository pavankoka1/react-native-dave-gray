import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

import PikachuImage from "@/assets/images/pikachu.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={PikachuImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Pikachu</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 32,
    fontWeight: 400,
    letterSpacing: 1,
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
