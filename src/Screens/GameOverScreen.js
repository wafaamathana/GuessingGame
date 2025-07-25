import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../Customs/PrimaryButtons";
import Title from "../Customs/Title";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.circlePanner}>
        {" "}
        <Text style={styles.numberText}>The final number is {userNumber}</Text>
      </View>
      <Text style={styles.summaryText}>
        your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContenet: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },
  circlePanner: {
    height: 200,
    width: 200,
    borderRadius: 150,
    borderWidth: Colors.primary800,
    borderColor: "red",
    backgroundColor: Colors.primary600,
    margin: 36,
    justifyContenet: "center",
    alignItems: "center",
    paddingTop: 90,
  },
  summaryText: {
    color: Colors.primary500,
    fontSize: 22,
    alignText: "center",
    marginBottom: 10,
  },
  highlight: {
    color: Colors.primary600,
  },
  numberText: {
    fontSize: 18,
    color: Colors.accent500,
  },
});

export default GameOverScreen;
