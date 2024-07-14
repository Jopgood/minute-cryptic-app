import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

import { StyleSheet, Image } from "react-native";

export default function HomeHeader() {
  return (
    <ThemedView style={styles.header}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <ThemedText style={styles.title}>Minute Cryptic</ThemedText>
      <ThemedText style={styles.subtitle}>
        Solve a clue with{"\n"}a hidden meaning.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: null,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    paddingTop: 72,
  },
  title: {
    fontFamily: "MulishRegular",
    fontSize: 30,
    lineHeight: 36,
  },
  subtitle: {
    fontFamily: "MulishRegular",
    fontSize: 20,
    lineHeight: 28,
    paddingTop: 16,
    paddingBottom: 24,
    textAlign: "center",
  },
  logo: {
    height: 59.2,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
});
