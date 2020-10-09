import * as React from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function Habilidades() {
  return (
    <View style={tela.fundo}>
      <Text style={tela.texto}>
        Sou muito comunicativo, aprendo rápido, gosto de terminar as coisas
        rapidamente e gosto de ser o melhor no que faço.</Text>
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
