import { useState } from 'react';
import {
  View, Text, TextInput, Pressable,
  ScrollView, StyleSheet, Switch
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

type DadosType = {
  nome: string;
  idade: string;
  sexo: string;
  escolaridade: string;
  limite: number;
  brasileiro: boolean;
};

export default function App() {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [sexo, setSexo] = useState<string>('');
  const [escolaridade, setEscolaridade] = useState<string>('');
  const [limite, setLimite] = useState<number>(200);
  const [brasileiro, setBrasileiro] = useState<boolean>(false);
  const [dados, setDados] = useState<DadosType | null>(null);

  function confirmar() {
    setDados({ nome, idade, sexo, escolaridade, limite, brasileiro });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={sexo} onValueChange={(val: string) => setSexo(val)}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Prefiro não informar" value="Prefiro não informar" />
        </Picker>
      </View>

      <Text style={styles.label}>Escolaridade:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={escolaridade} onValueChange={(val: string) => setEscolaridade(val)}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Ensino Fundamental" value="Ensino Fundamental" />
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Ensino Superior" value="Ensino Superior" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
      </View>

      <Text style={styles.label}>Limite na conta: R$ {Math.round(limite)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={(val: number) => setLimite(val)}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#ccc"
      />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch value={brasileiro} onValueChange={(val: boolean) => setBrasileiro(val)} />
      </View>

      <Pressable style={styles.botao} onPress={confirmar}>
        <Text style={styles.botaoTexto}>Confirmar</Text>
      </Pressable>

      {dados && (
        <View style={styles.dadosContainer}>
          <Text style={styles.dadosTitulo}>Dados informados:</Text>
          <Text style={styles.dado}>Nome: {dados.nome}</Text>
          <Text style={styles.dado}>Idade: {dados.idade}</Text>
          <Text style={styles.dado}>Sexo: {dados.sexo}</Text>
          <Text style={styles.dado}>Escolaridade: {dados.escolaridade}</Text>
          <Text style={styles.dado}>Limite: R$ {Math.round(dados.limite)}</Text>
          <Text style={styles.dado}>Brasileiro: {dados.brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    color: '#c0392b',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
    fontSize: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 14,
  },
  slider: {
    width: '100%',
    marginBottom: 14,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#b0c4de',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  dadosContainer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 16,
  },
  dadosTitulo: {
    fontSize: 17,
    color: '#c0392b',
    fontWeight: '600',
    marginBottom: 10,
  },
  dado: {
    fontSize: 15,
    marginBottom: 6,
    color: '#333',
  },
});