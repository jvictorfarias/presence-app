import React from "react";
import { View, Image, Text, TextInput, StyleSheet } from "react-native";

import logo from "../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Identificação</Text>
        <TextInput
          style={styles.input}
          placeholder="Matrícula/SIAPE"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b405e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },

  form: {
    backgroundColor: "#fff",
    marginTop: 25,
    alignSelf: "stretch",
    paddingHorizontal: 30,
    borderRadius: 4,
    marginHorizontal: 25
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  }
});
