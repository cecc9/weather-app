import { useEffect } from "react";
import { useWeatherStore } from "../../store/weatherStore";
import { Box, Stack, useToast } from "@chakra-ui/react";
import Header from "../Header";
import MainContainer from "../MainContainer";

import { useBreakpoints } from "../../hooks/useBreakpoints";

const WeatherApp = () => {
    const toast = useToast();
    const { isLessThan700 } = useBreakpoints();

    const getCoords = useWeatherStore((state) => state.getCoords);
    const cityNotFound = useWeatherStore((state) => state.cityNotFound);

    useEffect(() => {
        if (cityNotFound) {
            toast({
                title: "Invalid city!",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
        }
    }, [cityNotFound, toast]);

    useEffect(() => {
        getCoords();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            width='100%'
            height='100%'
            bg='background.transparent'
            display='flex'
            justifyContent='center'
            paddingY={`${isLessThan700 ? 4 : 16}`}
            paddingX={`${isLessThan700 ? 4 : 10}`}
        >
            <Stack
                // width='100%'
                height='100%'
                maxWidth='1200px'
                minWidth='350px'
                bg='background.primary'
                borderRadius='3xl'
                p={6}
                gap='20px'
            >
                <Header />
                <MainContainer />
            </Stack>
        </Box>
    );
};

export default WeatherApp;
