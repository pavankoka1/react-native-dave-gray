import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ContactPika from "@/assets/images/contact-pika.jpg";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const ContactUs = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#000" }}
      headerImage={
        <Image
          style={styles.image}
          source={ContactPika} // Change to 'source'
        />
      }
    >
      <ThemedView>
        <ThemedText>Contact Us</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  image: {
    width: "100%", // Adjusted dimensions
    height: "100%", // Adjusted dimensions
  },
});
