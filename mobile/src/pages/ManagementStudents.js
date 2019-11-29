import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
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

import config from "../config/env";
import logo from "../assets/logo.png";
import api from "../services/api";
import present from "../assets/situation-present.png";
import absent from "../assets/situation-absent.png";
console.disableYellowBox = true;

export default function ManagementStudents() {
  const [students, setStudents] = useState([]);
  const [SArray, setSArray] = useState([]);

  useEffect(() => {
    const socket = socketio(config.SERVER_URL);
    socket.on("confirmation", studentConfirmed => {
      loadStudents();
      /*
      setStudents(
        students.map(student =>
          student.id === studentConfirmed
            ? ((student.present = true), (student.hit = student.hit += 1))
            : student
        )
      );
      */
    });

    async function loadStudents() {
      const authorization = await AsyncStorage.getItem("tokenSession");
      const discipline = await AsyncStorage.getItem("disciplineChosen");
      const response = await api.get("/classroom", {
        headers: {
          authorization: "bearer " + authorization,
          discipline_id: discipline
        }
      });

      setStudents(response.data);
    }

    loadStudents();
  }, [students.id]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ marginTop: 135 }} />

      <View
        style={{
          alignSelf: "stretch",
          paddingHorizontal: 20,
          marginTop: 25,
          marginBottom: 75
        }}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {students.map(student => (
            <View style={styles.card} key={student.id}>
              <Text style={styles.info}>Estudante</Text>
              <Text style={styles.name}>{student.student_disc.name}</Text>
              <Text style={styles.info}>
                {student.student_disc.matriculation}
              </Text>
              <Text style={styles.info}>
                Presenças: {student.hit} / Faltas: {student.miss}
              </Text>
              <Text style={styles.info}>Situação: </Text>
              <Image
                style={styles.situationImage}
                source={student.present ? present : absent}
              ></Image>
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
    height: 250,
    alignSelf: "stretch",
    marginBottom: 25,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  info: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#444",
    margin: 3
  },
  name: {
    fontFamily: "sans-serif-thin",
    fontSize: 28,
    margin: 4
  },
  situationImage: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center"
  },
  button: {
    backgroundColor: "#f34545",
    borderRadius: 2,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 10,
    height: 30
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
