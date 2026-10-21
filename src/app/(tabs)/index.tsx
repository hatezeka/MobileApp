

import { useState } from "react";
import { Link } from "expo-router";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Karta from "../../components/Karta";
import { artikujt } from "../../data/artikujt";

export default function Index() {
  const [tePreferuar, setTePreferuar] = useState<string[]>([]);

  function ndryshoPreferuar(id: string) {
    setTePreferuar((gjendja) =>
      gjendja.includes(id)
        ? gjendja.filter((artikullId) => artikullId !== id)
        : [...gjendja, id]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulli}>Lista e artikujve</Text>

      <Text style={styles.nentitulli}>
        Zgjidh një artikull për të parë detajet.
      </Text>

      <Text style={styles.preferuar}>
        Artikuj të preferuar: {tePreferuar.length}
      </Text>

      <FlatList
        data={artikujt}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.artikulli}>
            <Link
              href={{
                pathname: "/artikull/[id]",
                params: { id: item.id },
              }}
              asChild
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Shiko detajet për ${item.titulli}`}
                style={({ pressed }) => [
                  styles.kartaKlikueshme,
                  pressed && styles.kartaShtypur,
                ]}
              >
                <Karta artikulli={item} />
              </Pressable>
            </Link>

            <Pressable
              style={styles.buton}
              onPress={() => ndryshoPreferuar(item.id)}
              accessibilityRole="button"
            >
              <Text style={styles.butonTekst}>
                {tePreferuar.includes(item.id)
                  ? "Hiqe nga të preferuarat"
                  : "Shto te të preferuarat"}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
  },
  titulli: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#111827",
  },
  nentitulli: {
    fontSize: 15,
    color: "#666666",
    marginTop: 8,
    marginBottom: 12,
  },
  preferuar: {
    fontSize: 15,
    marginBottom: 12,
    color: "#1D4ED8",
    fontWeight: "600",
  },
  lista: {
    paddingBottom: 24,
  },
  artikulli: {
    marginBottom: 8,
  },
  kartaKlikueshme: {
    borderRadius: 12,
  },
  kartaShtypur: {
    opacity: 0.7,
  },
  buton: {
    padding: 10,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
  butonTekst: {
    color: "#1D4ED8",
    fontWeight: "600",
  },
});
