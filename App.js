
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './screen/Page1';
import Page2 from './screen/Page2'
import Pembatalan from './screen/Daftar Pembatalan';
import Pembayaran from './screen/Pembayaran';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Pembatalan" component={Pembatalan} />
        <Stack.Screen name="Pembayaran" component={Pembayaran} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
