import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles'; 

export default function MultiNumber() {
  const [resultado, setResultado] = React.useState(0);

  const calcular = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const primeiroNumero = parseFloat((form[0] as HTMLInputElement).value);
    const segundoNumero = parseFloat((form[1] as HTMLInputElement).value);
    setResultado(primeiroNumero * segundoNumero);
  };

  return (
    <View style={styles.area}>
      <Text style={styles.title} >Multiplicador de Números</Text>
    <View>
      <form style={styles.form} action="" onSubmit={calcular}>
        <input style={styles.formInput} type="number" placeholder='Digite o primeiro número' />
        <input style={styles.formInput} type="number" placeholder='Digite o segundo número' />
        <button style={styles.btnForm} type="submit">Calcular</button>
      </form>
    </View>
    <Text style={styles.resultado}>
      Resultado: {resultado}
    </Text>
    </View>
  );
}