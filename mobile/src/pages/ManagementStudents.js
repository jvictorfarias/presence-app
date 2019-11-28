import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import logo from "../assets/logo.png";

export default function ManagementStudents() {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <View style={{ height: 350 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.info}>Aluno</Text>
            <Text style={styles.name}>Jamerson Alves Aguiar da Silva</Text>
            <Text style={styles.info}>418866</Text>
            <Text style={styles.info}>Presenças: 8 / Faltas: 2</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.info}>Aluno</Text>
            <Text style={styles.name}>João Victor Oliveira Farias</Text>
            <Text style={styles.info}>418266</Text>
            <Text style={styles.info}>Presenças: 8 / Faltas: 4</Text>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GERAR PDF</Text>
      </TouchableOpacity>
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
  contentContainer: {
    alignSelf: "center"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 300,
    width: 300,
    alignSelf: "stretch",
    marginTop: 25,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  info: {
    fontWeight: "bold",
    color: "#444",
    margin: 5
  },
  name: {
    fontSize: 32
  },
  button: {
    height: 42,
    marginTop: 25,
    alignSelf: "stretch",
    marginHorizontal: 25,
    backgroundColor: "#f34545",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
