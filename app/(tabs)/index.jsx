import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

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
        <Link style={{ marginHorizontal: "auto" }} href="/contact-us" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
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
    marginBottom: 20,
  },
  link: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 32,
    fontWeight: 400,
    letterSpacing: 1,
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
