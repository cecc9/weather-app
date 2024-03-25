import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },

    colors: {
        background: {
            // primary: "#101014",
            // secondary: "#1e1e1e",
            primary: "#2b3d4f",
            secondary: "#354a5f",
            transparent: "transparent",
        },
        card: {
            primary: "#bbd8ec",
            secondary: "#adcade",
            tertiary: "#fff",
            // primary: "#51ace4", // twitter
            // secondary: "#1da1f2",
            // tertiary: "#fff",
            // primary: "#808d8e", //
            // secondary: "#354a5f",
            // tertiary: "#fff",
        },

        text: {
            primary: "#fbfafc",
            secondary: "#727276",
            tertiary: "#000",
        },
    },

    container: {
        height: "100vh", // 100% del alto de la ventana
        width: "100vw", // 100% del ancho de la ventana
    },

    styles: {
        global: {
            body: {
                bg: "#2c2c2c",
                color: "#fff",
            },
        },
    },
});

export { theme };
