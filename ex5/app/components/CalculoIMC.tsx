import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

function CalculoIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Preencha peso e altura');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Digite valores válidos');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(1);

    setResultado(imcFormatado);

    // Classificação do IMC
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc < 25) {
      setClassificacao('Peso normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else if (imc < 35) {
      setClassificacao('Obesidade grau I');
    } else if (imc < 40) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  };

  return (
    <View style={styles().container}>
      <Text style={styles().title}>Cálculo do IMC</Text>

      <View style={styles().inputContainer}>
        <Text style={styles().label}>Peso (kg)</Text>
        <TextInput
          style={styles().input}
          value={peso}
          onChangeText={setPeso}
          placeholder="0,0"
          keyboardType="numeric"
        />
      </View>

      <View style={styles().inputContainer}>
        <Text style={styles().label}>Altura (m)</Text>
        <TextInput
          style={styles().input}
          value={altura}
          onChangeText={setAltura}
          placeholder="0,00"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles().button} onPress={calcularIMC}>
        <Text style={styles().buttonText}>Verificar</Text>
      </TouchableOpacity>

      <View style={styles().resultContainer}>
        <Text style={styles().resultLabel}>IMC:</Text>
        <Text style={styles().resultText}>
          {resultado || '---'}
        </Text>
      </View>

      {classificacao ? (
        <View style={styles().classificacaoContainer}>
          <Text style={styles().classificacaoText}>{classificacao}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default CalculoIMC;
