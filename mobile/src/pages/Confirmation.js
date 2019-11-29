import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native";
import socketio from "socket.io-client";

import logo from "../assets/logo.png";
import api from "../services/api";
import config from "../config/env";
console.disableYellowBox = true;

export default function Confirmation() {
  const [disciplines, setDisciplines] = useState([]);

  async function handlePress(e) {
    const auth = await AsyncStorage.getItem("tokenSession");
    const studentPresent = await api.post("/presence", null, {
      "Content-Type": "application/json",
      headers: { authorization: "bearer " + auth },
      body: { discipline_id: e }
    });
  }

  useEffect(() => {
    const socket = socketio(config.SERVER_URL);
    socket.on("present", disciplineConfirmed => {
      loadDisciplines();
      Alert.alert("Presença confirmada!");
    });
    async function loadDisciplines() {
      const authorization = await AsyncStorage.getItem("tokenSession");

      const response = await api.get("/classroom/student", {
        headers: { authorization: "bearer " + authorization }
      });
      setDisciplines(response.data);
    }
    loadDisciplines();
  }, [disciplines.id]);

  return (
    <View style={styles.container}>
      <Image source={logo} />

      <View style={{ height: 350 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        >
          {disciplines.map(discipline => (
            <View style={styles.card} key={discipline.id}>
              <Text style={styles.info}>Disciplina</Text>
              <Text style={styles.name}>{discipline.name}</Text>
              <Text style={styles.info}>{discipline.class_time}</Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "#f34545",
                  borderRadius: 2,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 25,
                  marginTop: 10,
                  height: 30
                }}
                onPress={() => handlePress(discipline.id)}
              >
                <Text style={styles.buttonText}>CONFIRMAR PRESENÇA</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
