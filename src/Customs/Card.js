import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
function Card({ children }) {
  return (
    <>
      <View style={styles.card}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});

export default Card;
