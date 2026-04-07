import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles'; 
export default function Contador() {
  const [contador, setContador] = React.useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

    return (
        <View style={styles.area}>
            <Text style={styles.titulo}>Contador de Pessoas</Text>
            <Text style={styles.contador}>{contador}</Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.btnMais} onPress={incrementar}>+</Text>
                <Text style={styles.btnMenos} onPress={decrementar}>-</Text>
            </View>
        </View>
    );
}