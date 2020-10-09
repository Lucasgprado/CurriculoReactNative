import * as React from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function Experiência() {
  return (
    <View style={tela.fundo}>
      <Text style={tela.texto}>
        Ainda não tenho experiência por isso estou à procura do meu primeiro
        emprego.</Text>
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
