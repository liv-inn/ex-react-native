import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 20,
  },

  form:{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  formInput: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  btnForm: {
    backgroundColor: '#00a',
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    borderWidth: 1,
    borderColor: "#00a",
  },
  resultado:{
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#00a",
  }
});