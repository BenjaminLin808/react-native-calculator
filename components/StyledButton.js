import { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const StyledButton = ({ text, handler }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={() => {
        handler(text);
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      style={[
        [
          text === "DEL" || text === "RESET"
            ? [styles.button, { backgroundColor: "hsl(224, 28%, 35%)" }]
            : text === "="
            ? [styles.button, { backgroundColor: "hsl(6, 70%, 34%)" }]
            : styles.button,
        ],
        isPressed ? styles.hide : null,
      ]}
    >
      <Text
        style={[
          [
            text === "DEL" || text === "RESET"
              ? [styles.afterButton, { backgroundColor: "hsl(225, 21%, 49%)" }]
              : text === "="
              ? [styles.afterButton, { backgroundColor: "hsl(6, 63%, 50%)" }]
              : styles.afterButton,
          ],
          isPressed ? styles.moveDown : null,
        ]}
      ></Text>
      <Text
        style={[
          [
            text === "DEL" || text === "RESET"
              ? [styles.buttonText, { color: "hsl(0, 0%, 100%)", fontSize: 25 }]
              : text === "="
              ? [styles.buttonText, { color: "hsl(0, 0%, 100%)", fontSize: 25 }]
              : styles.buttonText,
          ],
          isPressed ? styles.moveDown : null,
        ]}
      >
        {text === "*" ? "x" : text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "23%",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "hsl(28, 16%, 65%)",
  },
  hide: {
    backgroundColor: "transparent",
  },
  moveDown: {
    bottom: -4,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "hsl(221, 14%, 31%)",
  },
  afterButton: {
    position: "absolute",
    bottom: 4,
    width: "102%",
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "transparent",
    backgroundColor: "hsl(30, 25%, 89%)",
  },
});

export default StyledButton;
