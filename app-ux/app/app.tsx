import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListaClientesScreen from './screens/ListaClientesScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ListaClientesScreen />
    </SafeAreaProvider>
  );
}