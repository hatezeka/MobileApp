import { StyleSheet, Text, View } from "react-native";

export default function WelcomeCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Përshëndetje, Hata!</Text>
      <Text style={styles.description}>Komponenti im i parë React Native.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E8F0FE",
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1D4ED8",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: "#333333",
  },
});
