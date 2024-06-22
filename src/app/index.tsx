import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";

import { Participant } from "@/src/components/Participant";

export default function Home() {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    const participantNameFormatted = participantName.trim();

    if (participantNameFormatted.length === 0) {
      return Alert.alert(
        "Nome do participante",
        "O nome do participante não pode ser vazio."
      );
    }

    if (participants.includes(participantNameFormatted)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantNameFormatted]);
    setParticipantName("");

    Keyboard.dismiss();
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Curso React Native</Text>

      <Text style={styles.eventDate}>Sábado, 6 de Junho de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          autoCapitalize="words"
          value={participantName}
          onChangeText={setParticipantName}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 5,
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#1F1E25",
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  flatList: {
    gap: 10,
  },
  listEmptyText: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
  },
});
