import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import StyledButton from "../components/StyledButton";

const CalculatorScreen = () => {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState("0");
  const [calc, setCalc] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [disableButton2, setDisableButton2] = useState(false);
  const [shrink, setShrink] = useState(true);

  // triggered when a number is pressed
  const handleNumberPress = (number) => {
    if (memory.length > 10) {
      setShrink(false);
    }
    if (memory.length > 14) {
      setMemory(memory.slice(0, 15));
      setDisplay(memory.slice(0, 15));
      return;
    }
    if (memory.length <= 10) {
      setShrink(true);
    }
    if (number === ".") {
      setDisplay(display + number);
      setMemory(memory + number);
      setDisableButton(false);
      setDisableButton2(true);
    } else if (display === "0") {
      setDisplay(number);
      setMemory(number);
    } else if (calc) {
      setDisplay(number);
      setMemory(number);
      setCalc(false);
    } else if (
      number != "0" &&
      memory[memory.length - 1] === "0" &&
      disableButton2 === false
    ) {
      setDisplay(memory.slice(0, -1) + number);
      setMemory(memory.slice(0, -1) + number);
      setDisableButton2(true);
      return;
    } else if (number != "0") {
      setDisplay(display + number);
      setMemory(memory + number);
      setDisableButton2(true);
    } else {
      setDisplay(display + number);
      setMemory(memory + number);
    }
  };

  const checkOperator = (operator) => {
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "/"
    ) {
      return true;
    }
    return false;
  };
  // triggered when an operator is pressed
  const handleOperatorPress = (operator) => {
    if (calc) {
      setCalc(false);
    }
    if (checkOperator(memory[memory.length - 1])) {
      setMemory(memory.substring(0, memory.length - 1) + operator);
      setDisplay(memory.substring(0, memory.length - 1) + operator);
    } else {
      setMemory(memory + operator);
      setDisplay(display + operator);
    }
    if (memory.length > 10) {
      setShrink(false);
    }
    if (memory.length > 14) {
      setMemory(memory.slice(0, 15));
      setDisplay(memory.slice(0, 15));
      return;
    }
    if (memory.length <= 10) {
      setShrink(true);
    }
    setDisableButton(true);
    setDisableButton2(false);
  };

  // triggered when the equal sign is pressed
  const handleEqualPress = () => {
    if (eval(memory) === Infinity) {
      setDisplay("ERROR");
      setMemory("0");
      return;
    }
    let res = eval(memory);
    if (res % 1 !== 0) {
      res.toFixed(2);
    }
    if (res.length > 8) {
      res = Number.parseFloat(res).toExponential(2);
    }
    setDisplay(res + "");
    setMemory(res + "");
    setCalc(true);
  };

  // triggered when the clear button is pressed
  const handleClearPress = () => {
    setCalc(false);
    setDisplay("0");
    setMemory("0");
    setDisableButton(true);
    setDisableButton2(false);
    setShrink(true);
  };

  const handleNone1 = () => {
    return;
  };

  const handleNone = () => {
    if (memory[memory.length - 1] !== "0") {
      setDisplay(display + "0");
      setMemory(memory + "0");
    }
    return;
  };

  const handleDelete = () => {
    if (memory.length > 10) {
      setShrink(false);
    }
    if (memory.length > 14) {
      setMemory(memory.slice(0, 15));
      setDisplay(memory.slice(0, 15));
      return;
    }
    if (memory.length <= 10) {
      setShrink(true);
    }
    if (display === "0") {
      return;
    }
    if (calc) {
      setDisplay("0");
      setMemory("");
      setCalc(false);
      return;
    }
    if (display.length === 1) {
      setDisplay("0");
      setMemory("");
      return;
    }
    setDisplay(display.slice(0, -1));
    setMemory(memory.slice(0, -1));
  };

  return (
    <View testID="calculator-screen" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>calc</Text>
      </View>
      <TextInput
        value={display}
        editable={false}
        testID="calculator-input"
        style={shrink ? styles.result : [styles.result, { fontSize: 40 }]}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <StyledButton text="7" handler={handleNumberPress} />
          <StyledButton text="8" handler={handleNumberPress} />
          <StyledButton text="9" handler={handleNumberPress} />
          <StyledButton text="DEL" handler={handleDelete} />
        </View>
        <View style={styles.row}>
          <StyledButton text="4" handler={handleNumberPress} />
          <StyledButton text="5" handler={handleNumberPress} />
          <StyledButton text="6" handler={handleNumberPress} />
          <StyledButton text="+" handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text="1" handler={handleNumberPress} />
          <StyledButton text="2" handler={handleNumberPress} />
          <StyledButton text="3" handler={handleNumberPress} />
          <StyledButton text="-" handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton
            text="."
            handler={disableButton ? handleNumberPress : handleNone1}
          />
          <StyledButton
            text="0"
            handler={disableButton2 ? handleNumberPress : handleNone}
          />
          <StyledButton text="/" handler={handleOperatorPress} />
          <StyledButton text="*" handler={handleOperatorPress} />
        </View>
        <View style={styles.lastRow}>
          <StyledButton text="RESET" handler={handleClearPress} />
          <StyledButton text="=" handler={handleEqualPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(222, 26%, 31%)",
  },
  titleContainer: {
    display: "flex",
    width: "90%",
    height: 60,
  },
  title: {
    fontFamily: "LeagueSpartan-Bold",
    color: "#fff",
    fontSize: 30,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    // display: "grid",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "50%",
    backgroundColor: "hsl(223, 31%, 20%)",
    gap: 10,
    borderRadius: 5,
  },
  result: {
    width: "90%",
    height: 80,
    fontSize: 50,
    textAlign: "right",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    paddingRight: 20,
    backgroundColor: "hsl(224, 36%, 15%)",
    color: "#fff",
    fontFamily: "LeagueSpartan-Bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    height: "15%",
    gap: 30,
  },
  lastRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "175%",
    gap: 14,
  },
});

export default CalculatorScreen;
