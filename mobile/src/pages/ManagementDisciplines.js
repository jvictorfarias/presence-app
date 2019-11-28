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

export default function ManagementDisciplines({ navigation }) {
  async function handlePress() {
    navigation.navigate("ManagementStudents");
  }

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
            <Text style={styles.info}>Disciplina</Text>
            <Text style={styles.name}>Redes de Comunicação Móvel</Text>
            <Text style={styles.info}>
              QUA - 20:00 às 22:00{"\n"}SEX - 18:00 às 20:00
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handlePress}>
                LISTA DE PRESENÇA
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.info}>Disciplina</Text>
            <Text style={styles.name}>Sistemas Distribuídos</Text>
            <Text style={styles.info}>
              SEG - 20:00 às 22:00{"\n"}TER - 20:00 às 22:00
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handlePress}>
                LISTA DE PRESENÇA
              </Text>
            </TouchableOpacity>
          </View>
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
