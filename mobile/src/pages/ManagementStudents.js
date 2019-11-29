import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Table, Row } from "react-native-table-component";

import logo from "../assets/logo.png";

export default function ManagementStudents() {
  const widthArr = [250, 90, 75, 75, 90];
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ marginTop: 50 }} />

      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: 25,
          alignSelf: "stretch",
          borderRadius: 4,
          marginHorizontal: 25,
          paddingHorizontal: 15,
          paddingVertical: 15
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Table>
              <Row
                data={["Aluno", "Matrícula", "Presenças", "Faltas", "Situação"]}
                widthArr={widthArr}
                style={{ height: 50, borderWidth: 1 }}
                textStyle={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 14
                }}
              ></Row>
            </Table>

            <ScrollView>
              <Table>
                <Row
                  data={[
                    "JAMERSON ALVES AGUIAR DA SILVA",
                    "418866",
                    "8",
                    "2",
                    "Presente"
                  ]}
                  widthArr={widthArr}
                  style={styles.rowPresent}
                  textStyle={styles.rowText}
                ></Row>

                <Row
                  data={[
                    "JOAO VICTOR OLIVEIRA FARIAS",
                    "418082",
                    "6",
                    "4",
                    "Ausente"
                  ]}
                  widthArr={widthArr}
                  style={styles.rowAbsent}
                  textStyle={styles.rowText}
                ></Row>
              </Table>
            </ScrollView>
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
  situationImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  name: {
    fontSize: 32
  },
  rowPresent: { height: 40, backgroundColor: "#008000", borderWidth: 1 },
  rowAbsent: { height: 40, backgroundColor: "#f34545", borderWidth: 1 },
  rowText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  button: {
    height: 42,
    marginTop: 25,
    alignSelf: "stretch",
    marginHorizontal: 25,
    backgroundColor: "#f34545",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginBottom: 25
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
