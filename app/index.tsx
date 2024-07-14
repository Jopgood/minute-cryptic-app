import { StyleSheet } from "react-native";
import StaticView from "@/components/StaticView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import HomeHeader from "@/components/HomeHeader";
import { ExternalLink } from "@/components/ExternalLink";

export default function HomeScreen() {
  function handlePlay() {
    console.log("Play");
  }

  return (
    <StaticView
      headerBackgroundColor={{ light: "#fff", dark: "#fff" }}
      headerContent={<HomeHeader />}
    >
      <ThemedView style={styles.main}>
        {/*
      
        ============
        Button Menu  
        ============

        */}
        <ThemedView style={styles.gameButtons}>
          <Button
            buttonStyle={styles.playButton.button}
            textStyle={styles.playButton.text}
            title="Play"
            onPress={handlePlay}
          />
          <Button
            buttonStyle={styles.htpButton.button}
            textStyle={styles.htpButton.text}
            title="How to play"
            onPress={() => handlePlay}
          />
        </ThemedView>

        {/*
      
        ============
        Socials
        ============

        */}
        <ThemedView style={styles.socials}>
          <ThemedText style={styles.socialsHeader}>Watch solutions</ThemedText>
          <ThemedView style={styles.socialsButtons}>
            <ExternalLink
              style={styles.socialsButton}
              href={"https://www.instagram.com/minutecryptic/"}
            >
              <FontAwesomeIcon size={48} icon={faInstagram} border />
            </ExternalLink>
            <ExternalLink
              style={styles.socialsButton}
              href={"https://www.tiktok.com/@minutecryptic"}
            >
              <FontAwesomeIcon size={48} icon={faTiktok} />
            </ExternalLink>
            <ExternalLink
              style={styles.socialsButton}
              href={"https://youtube.com/@minutecryptic?si=ySZTrgnHJzhQfRu2"}
            >
              <FontAwesomeIcon size={48} icon={faYoutube} />
            </ExternalLink>
          </ThemedView>
        </ThemedView>

        {/*
      
        ============
        Footer
        ============

        */}
        <ThemedView style={styles.footerContent}>
          <ThemedText style={styles.footerText}>13 July 2024</ThemedText>
          <ThemedText style={styles.footerText}>
            Clue by Liam Runnalls
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </StaticView>
  );
}

const styles = StyleSheet.create({
  /*
  
  =========
  Button Menu
  =========

  */
  gameButtons: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  playButton: {
    button: {
      backgroundColor: "#f5d1fd",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 4,
      borderRadius: 4,
      width: 240,
      padding: 8,
    },
    text: {
      fontSize: 24,
      fontFamily: "SansitaExtraBoldItalic",
      color: "black",
      lineHeight: 32,
    },
  },
  htpButton: {
    button: {
      backgroundColor: "#fff2b1",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 4,
      borderRadius: 4,
      width: 240,
      padding: 8,
      marginVertical: 8,
    },
    text: {
      fontSize: 24,
      fontFamily: "SansitaExtraBoldItalic",
      color: "black",
      lineHeight: 32,
    },
  },

  /*
  
  =========
  Socials
  =========

  */
  socials: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  socialsHeader: {
    textAlign: "center",
    fontFamily: "MulishBold",
    color: "black",
  },
  socialsButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  socialsButton: {
    marginHorizontal: 5,
  },

  /*
  
  =========
  Footer
  =========

  */
  footerContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
  },
  footerText: {
    color: "black",
    fontFamily: "MulishRegular",
    fontSize: 14,
  },

  main: {
    justifyContent: "space-between",
    flex: 1,
  },
});
