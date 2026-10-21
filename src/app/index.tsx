import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import WelcomeCard from "../components/WelcomeCard";

export default function Index() {
  let numriLet = 0;
  const [numri, setNumri] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Ushtrimi im i parë</Text>

      <WelcomeCard />

      <View style={styles.section}>
        <Text style={styles.label}>Numri me let: {numriLet}</Text>

        <Button
          title="Rrit numrin me let"
          onPress={() => {
            numriLet++;
            console.log("Numri me let:", numriLet);
          }}
        />

        <Text style={styles.note}>
          Ndryshimi i let nuk e rifreskon vetë ekranin.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Numri me useState: {numri}</Text>

        <Button
          title="Rrit numrin me useState"
          onPress={() => setNumri((n) => n + 1)}
        />

        <Text style={styles.note}>
          Ky numër rritet në ekran kur shtyp butonin.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
  },
  section: {
    marginTop: 24,
    gap: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  note: {
    fontSize: 14,
    color: "#555555",
    marginTop: 8,
  },
});
