import { Text, View, StyleSheet, FlatList } from "react-native";

export default function App() {

  const vagas = [
    { id: '1', titulo: 'Desenvolvedor Backend', salario: 'R$ 3000,00', descricao: 'Desenvolver APIs e serviços backend' },
    { id: '2', titulo: 'QA Tester', salario: 'R$ 2200,00', descricao: 'Testar aplicações e garantir qualidade do software' },
    { id: '3', titulo: 'DevOps', salario: 'R$ 4500,00', descricao: 'Automatizar processos e gerenciar infraestrutura' },
    { id: '4', titulo: 'Analista de Sistemas', salario: 'R$ 3200,00', descricao: 'Levantar requisitos e documentar sistemas' },
    { id: '5', titulo: 'Designer UX/UI', salario: 'R$ 2800,00', descricao: 'Projetar layouts e fluxos de navegação' },
    { id: '6', titulo: 'Desenvolvedor Frontend', salario: 'R$ 2500,00', descricao: 'Criar interfaces e melhorar experiência do usuário' },
  ];

  return (
    <FlatList
      style={styles.scroll}
      contentContainerStyle={styles.container}
      data={vagas}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={styles.titulo}>Vagas</Text>}
      renderItem={({ item }) => (
        <View style={styles.vagaContainer}>
          <Text style={styles.vaga}>{item.titulo}</Text>
          <Text style={styles.info}>Salário: {item.salario}</Text>
          <Text style={styles.info}>Descrição: {item.descricao}</Text>
          <Text style={[styles.info, { marginBottom: 10 }]}>
            Contato: (xx) xxxx-xxxx
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },

  container: {
    paddingHorizontal: 10, 
    paddingBottom: 20,
  },

  titulo: {
    fontSize: 28,
    color: "red",
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center", 
  },

  vagaContainer: {
    borderWidth: 1,
    borderColor: "#6e6464",
    padding: 10,
    marginBottom: 10,
    width: "100%", 
  },

  vaga: {
    fontSize: 18,
    color: "blue",
    marginBottom: 5,
  },

  info: {
    fontSize: 14,
    color: "black",
  },
});