import { StyleSheet, Text, View } from "react-native";
import type { Artikull } from "../data/artikujt";

type KartaProps = {
  artikulli: Artikull;
};

export default function Karta({ artikulli }: KartaProps) {
  return (
    <View style={styles.karta}>
      <Text style={styles.titulli}>{artikulli.titulli}</Text>
      <Text style={styles.cmimi}>{artikulli.cmimi} €</Text>
      <Text style={styles.hint}>Prek për detaje</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  karta: {
    padding: 16,
    marginVertical: 6,
    borderRadius: 12,
    backgroundColor: "#E8F0FE",
  },
  titulli: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D4ED8",
  },
  cmimi: {
    fontSize: 16,
    marginTop: 6,
  },
  hint: {
    marginTop: 5,
    color: "#555555",
  },
});
