import { useState } from 'react';
import {
  View, Text, TextInput, Pressable,
  StyleSheet, Image, Alert
} from 'react-native';

export default function App() {
  const [palpite, setPalpite] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [corResultado, setCorResultado] = useState<string>('#333');

  function descobrir() {
    const numeroAleatorio = Math.floor(Math.random() * 11);
    const palpiteNumero = parseInt(palpite);

    if (isNaN(palpiteNumero) || palpiteNumero < 0 || palpiteNumero > 10) {
      Alert.alert('Atenção', 'Digite um número válido entre 0 e 10!');
      return;
    }

    if (palpiteNumero === numeroAleatorio) {
      setResultado(`Acertou! O número era ${numeroAleatorio}!`);
      setCorResultado('#1a7a1a');
    } else {
      setResultado(`Errou! O número era ${numeroAleatorio}.`);
      setCorResultado('#c0392b');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>

        <View style={styles.imagemContainer}>
          <Image
            source={{ uri: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/11/25/2040466044-chuu.jpg' }}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.instrucao}>Pense em um nº de 0 a 10</Text>

        <TextInput
          style={styles.input}
          value={palpite}
          onChangeText={setPalpite}
          keyboardType="numeric"
          maxLength={2}
          placeholder="0"
          placeholderTextColor="#aaa"
          textAlign="center"
        />

        {resultado !== '' && (
          <Text style={[styles.resultado, { color: corResultado }]}>
            {resultado}
          </Text>
        )}

        <Pressable style={styles.botao} onPress={descobrir}>
          <Text style={styles.botaoTexto}>Descobrir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#222',
  },
  imagemContainer: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#201f1f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  instrucao: {
    fontSize: 15,
    color: '#c0392b',
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#c0392b',
    width: 100,
    fontSize: 22,
    fontWeight: '600',
    color: '#c0392b',
    paddingBottom: 4,
    marginBottom: 16,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#90ee90',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a5c1a',
  },
});