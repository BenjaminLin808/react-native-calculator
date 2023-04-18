import CalculatorScreen from "./screens/CalculatorScreen";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("./assets/fonts/Outfit/static/Outfit-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit/static/Outfit-Regular.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Bold.ttf"),
    "SedgwickAve-Regular": require("./assets/fonts/Sedgwick_Ave_Display/SedgwickAveDisplay-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <CalculatorScreen />;
};

export default App;
