import * as React from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function DadosPessoais() {
  return (
    <View style={tela.fundo}>
      <Text style={tela.texto}>
        Nome completo: Lucas Gomes do Prado | Idade: 18 anos | Estado civil:
        Solteiro | Nacionalidade: Brasileiro | Telefone: (11) 98852-9993 |
        E-mail: lucsgprado28@gmail.com | Endereço: Rua Icaraí, 156 AP 23 |
        Bairro: Tatuapé | Cidade: São Paulo | Estado: São Paulo</Text>
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
