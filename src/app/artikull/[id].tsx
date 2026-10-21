import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { gjeArtikullin } from "../../data/artikujt";

export default function Detajet() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const artikulli = gjeArtikullin(id);

  if (!artikulli) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Artikulli nuk u gjet" }} />
        <Text style={styles.titulli}>Artikulli nuk u gjet.</Text>
        <Text>ID e kërkuar: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: artikulli.titulli }} />

      <Text style={styles.titulli}>{artikulli.titulli}</Text>

      <Text style={styles.pershkrimi}>{artikulli.pershkrimi}</Text>

      <Text style={styles.cmimi}>Çmimi: {artikulli.cmimi} €</Text>

      <Text style={styles.id}>ID: {artikulli.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
  },
  titulli: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pershkrimi: {
    fontSize: 17,
    lineHeight: 25,
  },
  cmimi: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
  id: {
    marginTop: 12,
    color: "#666666",
  },
});
