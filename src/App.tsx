import { ChakraProvider } from "@chakra-ui/react";

import WeatherApp from "./components/WeatherApp/WeatherApp";
import { theme } from "./theme/theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <WeatherApp />
        </ChakraProvider>
    );
}

export default App;
