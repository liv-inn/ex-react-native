import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
    contador: {
    fontSize: 48,
    backgroundColor: "#aa0000",
    color: "#fff",
    padding: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 20,
  },
  btnMais:{
    backgroundColor: "#00aa00",
    color: "#fff",
    padding: 10,
    width: 200,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#00aa00",
    borderRadius: 5,
  },
  btnMenos:{
    backgroundColor: "#aa0000",
    color: "#fff",
    padding: 10,
    width: 200,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#aa0000",
    borderRadius: 5,
  }
}); 