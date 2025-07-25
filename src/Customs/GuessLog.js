import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import GameScreen from "../Screens/GameScreen";

function GuessLog({ roundNumber, guess }) {
  return (
    <>
      <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text style={styles.textSize}>Opponent's Guess: {guess}</Text>
      </View>
    </>
  );
}

export default GuessLog;
const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 8,
    marginVertical: 2,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRaduis: 3,
  },
  textItem: {
    fontSize: 25,
  },
});
