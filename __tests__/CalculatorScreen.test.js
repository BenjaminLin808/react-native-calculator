import { render, fireEvent, act } from "@testing-library/react-native";
import CalculatorScreen from "../screens/CalculatorScreen";
// import { act } from "react-test-renderer";

describe("CalculatorScreen", () => {
  // test rendering
  it("should render the calculator screen", () => {
    const { getByTestId } = render(<CalculatorScreen />);
    const calculatorScreen = getByTestId("calculator-screen");
    expect(calculatorScreen).toBeDefined();
  });

  // test number input
  it("should add numbers when pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    act(() => {
      fireEvent.press(getByText("1"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("3"));
    });
    const calculatorInput = getByTestId("calculator-input");

    expect(calculatorInput.props.value).toBe("123");
  });

  // test addition
  it("should add two numbers when pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });
    // fireEvent.press(getByText("2"));
    // fireEvent.press(getByText("+"));
    // fireEvent.press(getByText("3"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("5");
  });

  // test subtraction
  it("should subtract two numbers when pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("5"));
    });
    act(() => {
      fireEvent.press(getByText("-"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });

    // fireEvent.press(getByText("5"));
    // fireEvent.press(getByText("-"));
    // fireEvent.press(getByText("2"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("3");
  });

  // test multiplication
  it("should multiply two numbers when pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("x"));
    });
    act(() => {
      fireEvent.press(getByText("4"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });

    // fireEvent.press(getByText("3"));
    // fireEvent.press(getByText("x"));
    // fireEvent.press(getByText("4"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("12");
  });

  // test division
  it("should divide two numbers when pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("/"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });

    // fireEvent.press(getByText("8"));
    // fireEvent.press(getByText("/"));
    // fireEvent.press(getByText("2"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("4");
  });

  // test complex calculation
  it("should perform a complex calculation", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("/"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });

    // fireEvent.press(getByText("8"));
    // fireEvent.press(getByText("+"));
    // fireEvent.press(getByText("8"));
    // fireEvent.press(getByText("/"));
    // fireEvent.press(getByText("2"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("12");
  });

  // test a user error case: neighboring operators
  it("should catch some user errors", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("x"));
    });
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });

    // fireEvent.press(getByText("8"));
    // fireEvent.press(getByText("+"));
    // fireEvent.press(getByText("x"));
    // fireEvent.press(getByText("8"));
    // fireEvent.press(getByText("="));

    expect(calculatorInput.props.value).toBe("64");
  });

  it("should have a limit of 14 digits", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("1"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("4"));
    });
    act(() => {
      fireEvent.press(getByText("5"));
    });
    act(() => {
      fireEvent.press(getByText("6"));
    });
    act(() => {
      fireEvent.press(getByText("7"));
    });
    act(() => {
      fireEvent.press(getByText("8"));
    });
    act(() => {
      fireEvent.press(getByText("9"));
    });
    act(() => {
      fireEvent.press(getByText("0"));
    });
    act(() => {
      fireEvent.press(getByText("1"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("4"));
    });
    act(() => {
      fireEvent.press(getByText("5"));
    });

    expect(calculatorInput.props.value).toBe("123456789012345");
  });

  it("should display error when dividing by zero", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("1"));
    });
    act(() => {
      fireEvent.press(getByText("/"));
    });
    act(() => {
      fireEvent.press(getByText("0"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });
    expect(calculatorInput.props.value).toBe("ERROR");
  });

  it("should continue calculation after the previous calculation if an operator is press", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    // 2 + 2 = 4
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });
    // 4 + 2 = 6
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });
    expect(calculatorInput.props.value).toBe("6");
  });

  it("should start over the calculation after the previous calculation if a number is press", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    // 2 + 2 = 4
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("="));
    });
    // 4 + 2 = 6
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    expect(calculatorInput.props.value).toBe("2+2");
  });

  it("should not have leading zeros", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("+"));
    });
    act(() => {
      fireEvent.press(getByText("0"));
    });
    act(() => {
      fireEvent.press(getByText("0"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    expect(calculatorInput.props.value).toBe("3+2");
  });

  it("should not allow multiple decimal points", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("0"));
    });
    act(() => {
      fireEvent.press(getByText("."));
    });
    act(() => {
      fireEvent.press(getByText("."));
    });
    act(() => {
      fireEvent.press(getByText("."));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });

    expect(calculatorInput.props.value).toBe("0.2");
  });

  it("should delete the last digit when the DEL button is pressed", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("1"));
    });
    act(() => {
      fireEvent.press(getByText("2"));
    });
    act(() => {
      fireEvent.press(getByText("3"));
    });
    act(() => {
      fireEvent.press(getByText("DEL"));
    });
    expect(calculatorInput.props.value).toBe("12");
  });

  it("should have a limit of 14 digits", () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId("calculator-input");
    act(() => {
      fireEvent.press(getByText("1"));
    });

    act(() => {
      fireEvent.press(getByText("4"));
    });
    act(() => {
      fireEvent.press(getByText("DEL"));
    });
    expect(calculatorInput.props.value).toBe("1");
  });
});
