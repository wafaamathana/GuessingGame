import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Title from "../Customs/Title";
import NumberContainer from "../Customs/gameLogic/NumberContainer";
import PrimaryButton from "../Customs/PrimaryButtons";
import Card from "../Customs/PrimaryButtons";
import InstructionText from "../Customs/InstructionText";
//import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLog from "../Customs/GuessLog";

const Alert = {
  alert: (title, message, buttons) => {
    // Show a basic browser alert
    window.alert(`${title}\n\n${message}`);
    // If there's a button with an onPress handler, simulate the button press
    if (buttons && buttons[0]?.onPress) buttons[0].onPress();
  },
};

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or lower
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                -
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                +
              </PrimaryButton>
            </View>
          </View>
        </Card>

        <View>
          <Text>Log rounds</Text>
        </View>
        <View style={styles.listContainer}>
          {/*{guessRounds.map((guessRound) => (<Text key={guessRound}>{guessRound}</Text>))}*/}

          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLog
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    //marginTop: 12,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    borderColor: "#566",
    borderWidth: 0,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "#ddb52f",
  },
  listContainer: {
    flex: 1,
    padding: 16,
    maxHeight: 300,
  },
});

export default GameScreen;
