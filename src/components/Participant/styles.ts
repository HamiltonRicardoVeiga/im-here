import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: "#1F1E25",
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: "#FFF",
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});
