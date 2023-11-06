import { StatusBar } from "expo-status-bar";
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Groups />
    </ThemeProvider>
  );
}
