import type { PropsWithChildren } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerContent: ReactNode;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function StaticView({
  headerContent,
  headerBackgroundColor,
  children,
}: Readonly<Props>) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor[colorScheme] },
        ]}
      >
        {headerContent}
      </View>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "32%", // 30% of the screen height for the header
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1, // Take up the rest of the space
    backgroundColor: "#d5e8ff",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
});
