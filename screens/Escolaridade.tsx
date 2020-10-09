import * as React from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function Escolaridade() {
  return (
    <View style={tela.fundo}>
      <Text style={tela.texto}>
        Estou no 3° ano do ensino médio e também nos últimos meses do meu curso
        de T.I no SENAC</Text>
    </View>
  );
}

const tela = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "black",
  },

  texto: {
    fontSize: 25,
    color: "white",
  },
});
