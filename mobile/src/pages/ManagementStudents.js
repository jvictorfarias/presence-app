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

import logo from "../assets/logo.png";
import api from "../services/api";

export default function ManagementStudents() {
  const [students, setStudents] = useState([]);
  const [SArray, setSArray] = useState([]);

  useEffect(() => {
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
      <Image source={logo} />

      <View style={{ height: 350 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        >
          {students.map(student => (
            <View style={styles.card} key={student.id}>
              <Text style={styles.info}>Estudante</Text>
              <Text style={styles.name}>{student.student_disc.name}</Text>
              <Text style={styles.info}>
                {student.student_disc.matriculation}
              </Text>
              <Text style={styles.name}>{student.hit}</Text>
              <Text style={styles.name}>{student.miss}</Text>
              <Text style={styles.name}>{student.present}</Text>
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
    height: 200,
    width: 200,
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
