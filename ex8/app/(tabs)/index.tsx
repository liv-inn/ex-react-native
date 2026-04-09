import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.titulo}>Vagas</Text>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>Desenvolvedor Backend</Text>
        <Text style={styles.info}>Salário: R$ 3000,00</Text>
        <Text style={styles.info}>
          Descrição: Desenvolver APIs e serviços backend
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>QA Tester</Text>
        <Text style={styles.info}>Salário: R$ 2200,00</Text>
        <Text style={styles.info}>
          Descrição: Testar aplicações e garantir qualidade do software
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>DevOps</Text>
        <Text style={styles.info}>Salário: R$ 4500,00</Text>
        <Text style={styles.info}>
          Descrição: Automatizar processos e gerenciar infraestrutura
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>Analista de Sistemas</Text>
        <Text style={styles.info}>Salário: R$ 3200,00</Text>
        <Text style={styles.info}>
          Descrição: Levantar requisitos e documentar sistemas
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>Designer UX/UI</Text>
        <Text style={styles.info}>Salário: R$ 2800,00</Text>
        <Text style={styles.info}>
          Descrição: Projetar layouts e fluxos de navegação
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>

      <View style={styles.vagaContainer}>
        <Text style={styles.vaga}>Desenvolvedor Frontend</Text>
        <Text style={styles.info}>Salário: R$ 2500,00</Text>
        <Text style={styles.info}>
          Descrição: Criar interfaces e melhorar experiência do usuário
        </Text>
        <Text style={[styles.info, { marginBottom: 10 }]}>
          Contato: (xx) xxxx-xxxx
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    color: "red",
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  vaga: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: "blue",
  },

  vagaContainer: {
    borderWidth: 1,
    width: "90%",
    marginBottom: 10,
  },

  info: {
    fontSize: 14,
    marginLeft: 10,
    color: "black",
  },
});
