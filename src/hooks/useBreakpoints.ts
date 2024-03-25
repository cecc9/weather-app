import { useMediaQuery } from "@chakra-ui/react";

export const useBreakpoints = () => {
    const [isLessThan500] = useMediaQuery("(max-width: 500px)");
    const [isLessThan600] = useMediaQuery("(max-width: 600px)");
    const [isLessThan650] = useMediaQuery("(max-width: 650px)");
    const [isLessThan700] = useMediaQuery("(max-width: 700px)");
    const [isLessThan800] = useMediaQuery("(max-width: 800px)");
    const [isLessThan900] = useMediaQuery("(max-width: 900px)");

    return {
        isLessThan500,
        isLessThan600,
        isLessThan650,
        isLessThan700,
        isLessThan800,
        isLessThan900,
    };
};
