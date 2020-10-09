import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DadosPessoais from '../screens/DadosPessoais';
import Experiencia from '../screens/Experiencia';
import Escolaridade from '../screens/Escolaridade';
import Habilidades from '../screens/Habilidades';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dados"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Dados"
        component={DadosPessoais}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Experiencia"
        component={Experiencia}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="hourglass" color={color} />,
        }}
      />
      
      <BottomTab.Screen
        name="Escolaridade"
        component={Escolaridade}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      
      <BottomTab.Screen
        name="Habilidades"
        component={Habilidades}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const DadosPessoaisStack = createStackNavigator();

function DadosPessoaisNavigator() {
  return (
    <DadosPessoaisStack.Navigator>
      <DadosPessoaisStack.Screen
        name="DadosPessoais"
        component={DadosPessoais}
        options={{ headerTitle: 'Dados Pessoais' }}
      />
    </DadosPessoaisStack.Navigator>
  );
}

const ExperienciaStack = createStackNavigator();

function ExperienciaNavigator() {
  return (
    <ExperienciaStack.Navigator>
      <ExperienciaStack.Screen
        name="Experiencia"
        component={Experiencia}
        options={{ headerTitle: 'Experiencia' }}
      />
    </ExperienciaStack.Navigator>
  );
}

const EscolaridadeStack = createStackNavigator();

function EscolaridadeNavigator() {
  return (
    <EscolaridadeStack.Navigator>
      <EscolaridadeStack.Screen
        name="Escolaridade"
        component={Escolaridade}
        options={{ headerTitle: 'Escolaridade' }}
      />
    </EscolaridadeStack.Navigator>
  );
}

const HabilidadesStack = createStackNavigator();

function HabilidadesNavigator() {
  return (
    <HabilidadesStack.Navigator>
      <HabilidadesStack.Screen
        name="Habilidades"
        component={Habilidades}
        options={{ headerTitle: 'Habilidades' }}
      />
    </HabilidadesStack.Navigator>
  );
}

