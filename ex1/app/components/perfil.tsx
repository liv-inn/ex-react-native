import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {styles} from './styles'; 

export default function PerfilProfissional() {
  return (
    <View style={styles.area}>
      <Text style={styles.textoPrincipal}>App Meu Perfil</Text>
      <Image style={styles.img}
        source={require('../../assets/images/ponyzer.jpeg')}
      />
      <Text style={styles.subtitulo}>Dados pessoais</Text>
      <Text style={styles.texto}>Nome: Lívia N</Text>
      <Text style={styles.texto}>Idade: 23 anos</Text>
      <Text style={styles.texto}>Email: livia.n@email.com</Text>
      <Text style={styles.texto}>Telefone: (13) 99999-9999</Text>

      <Text style={styles.subtitulo}>Formação</Text>
      <Text style={styles.texto}>Curso: Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.texto}>Instituição: FATECRL</Text>
      <Text style={styles.texto}>Ano de Conclusão: 2027</Text>

      <Text style={styles.subtitulo}>Experiência </Text>
      <Text style={styles.texto}>Empresa: Tech Solutions</Text>
      <Text style={styles.texto}>Cargo: Estagiária de Desenvolvimento</Text>
      <Text style={styles.texto}>Período: Jan 2023 - Presente</Text>

      <Text style={styles.subtitulo}>Projetos</Text>
      <Text style={styles.texto}>- Clone do Instagram em React Native</Text>
      <Text style={styles.texto}>- App de Lista de Tarefas com Firebase</Text>
      <Text style={styles.texto}>- Portfólio pessoal em React</Text>
      <Text style={styles.texto}>- Site institucional para ONG</Text>
    </View>
  );
}

