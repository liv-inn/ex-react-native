import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

function AlcoolOuGasolina() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarMelhorOpcao = () => {
    if (!precoAlcool || !precoGasolina) {
      Alert.alert('Erro', 'Preencha os dois preços');
      return;
    }

    const alcool = parseFloat(precoAlcool.replace(',', '.'));
    const gasolina = parseFloat(precoGasolina.replace(',', '.'));

    if (isNaN(alcool) || isNaN(gasolina)) {
      Alert.alert('Erro', 'Digite valores válidos');
      return;
    }

    const relacao = alcool / gasolina;

    if (relacao < 0.7) {
      setResultado('Use álcool');
    } else {
      setResultado('Use gasolina');
    }
  };

  return (
    <View style={styles().container}>
      <Text style={styles().title}>Álcool ou Gasolina</Text>
      
      <View style={styles().imageContainer}>
        <Image 
          source={require('../../assets/images/alcool-ou-gasolina.png')}
          style={styles().image}
          resizeMode="contain"
        />
      </View>

      <View style={styles().inputContainer}>
        <Text style={styles().label}>Preço do Álcool</Text>
        <TextInput
          style={styles().input}
          value={precoAlcool}
          onChangeText={setPrecoAlcool}
          placeholder="0,00"
          keyboardType="numeric"
        />
      </View>

      <View style={styles().inputContainer}>
        <Text style={styles().label}>Preço da Gasolina</Text>
        <TextInput
          style={styles().input}
          value={precoGasolina}
          onChangeText={setPrecoGasolina}
          placeholder="0,00"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles().button} onPress={verificarMelhorOpcao}>
        <Text style={styles().buttonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles().resultContainer}>
        <Text style={styles().resultLabel}>Resultado:</Text>
        <Text style={styles().resultText}>
          {resultado || '---'}
        </Text>
      </View>
    </View>
  );
}

export default AlcoolOuGasolina;