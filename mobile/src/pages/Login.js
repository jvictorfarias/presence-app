import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import logo from "../assets/logo.png";
import Constants from "expo-constants";
import api from "../services/api";
console.disableYellowBox = true;

export default function Login({ navigation }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(null);
  /*
  useEffect(() => {
    AsyncStorage.getItem("tokenSession").then(tokenSession => {
      if (tokenSession) {
        navigation.navigate("");
      }
      
  }, []);

  */

  async function handleSubmit() {
    if (id < 1 || !Number.isInteger(Number(id))) {
      Alert.alert(
        "ID inválido!",
        "use APENAS números inteiros e não deixe o campo em branco!"
      );
      return false;
    }
    if (password < 1) {
      Alert.alert("Senha em branco!");
      return false;
    }
    if (type === null) {
      Alert.alert("Selecione ALUNO ou PROFESSOR!");
      return false;
    }

    if (type === "teacher") {
      try {
        const siape = id;
        const response = await api.post("/session", { siape, password, type });

        const { token } = response.data;
        await AsyncStorage.setItem("tokenSession", token);
        navigation.navigate("ManagementDisciplines");
      } catch (error) {
        if (error.status === 403) {
          Alert.alert("Credenciais Incorretas!");
        }

        if (error.status === 400) {
          Alert.alert("Servidor Offline");
        }
      }
    } else {
      try {
        const deviceId = Constants.deviceId;
        const matriculation = id;
        const response = await api.post("/session", {
          matriculation,
          password,
          type,
          register: deviceId
        });

        const { token } = response.data;
        await AsyncStorage.setItem("tokenSession", token);
        navigation.navigate("Confirmation");
      } catch (error) {
        if (error.status === 403) {
          Alert.alert("Credenciais Incorretas!");
        }

        if (error.status === 402) {
          Alert.alert("Dispositivo diferente!");
        }

        if (error.status === 400) {
          Alert.alert("Servidor Offline");
        }
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Identificação</Text>
        <TextInput
          style={styles.input}
          placeholder="Matrícula/SIAPE"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={id}
          onChangeText={setId}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <RNPickerSelect
          value={type}
          onValueChange={setType}
          placeholder={{
            label: "Aluno / Professor",
            value: null,
            color: "#999"
          }}
          items={[
            { label: "Aluno", value: "student" },
            { label: "Professor", value: "teacher" }
          ]}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    marginHorizontal: 25,
    paddingVertical: 25
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 2,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 15
  },
  inputCaptcha: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 2,
    height: 44,
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginRight: 105,
    fontSize: 16,
    color: "#444",
    marginBottom: 15
  },
  button: {
    height: 42,
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
