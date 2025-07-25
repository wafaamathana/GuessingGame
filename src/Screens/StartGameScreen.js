import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../Customs/PrimaryButtons"; // Custom button component
import Colors from "../constants/colors";
import Title from "../Customs/Title";
import Card from "../Customs/Card";
import InstructionText from "../Customs/InstructionText";
// Web-friendly replacement for React Native's Alert
const Alert = {
  alert: (title, message, buttons) => {
    // Show a basic browser alert
    window.alert(`${title}\n\n${message}`);
    // If there's a button with an onPress handler, simulate the button press
    if (buttons && buttons[0]?.onPress) buttons[0].onPress();
  },
};
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState(""); // State to hold input

  // Handler for typing into the input
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  // Resets the input field
  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  // Confirm button logic
  function confirmInputHandler() {
    // Check for empty input
    if (enteredNumber.trim() === "") {
      Alert.alert("Invalid Number!", "Input cannot be empty!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    const chosenNumber = parseInt(enteredNumber); // Convert to number

    // Check for invalid number
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    // Number is valid
    onPickNumber(chosenNumber);
  }

  return (
    <>
      <View style={styles.rootContainer}>
        <Title>Guess my number</Title>
        <Card>
          <InstructionText>Enter a number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2} // Limit to 2 digits
            keyboardType="number-pad" // Show number pad on mobile
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

// Styling using StyleSheet (React Native style)
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: "5%",
  },
});

export default StartGameScreen;
