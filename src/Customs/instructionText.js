import { View, Text, StyleSheet } from "react-native-web";
import Colors from "../constants/colors";
function instructionText({ children }) {
  return (
    <>
      <Text style={styles.instructionText}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default instructionText;
