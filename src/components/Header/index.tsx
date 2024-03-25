import { Box, Flex, Text } from "@chakra-ui/react";
import Emoji from "../Icons/Emoji";
import Location from "../Icons/Location";
import Notification from "../Icons/Notification";
import InputSearch from "../InputSearch";
import { useWeatherStore } from "../../store/weatherStore";

import { useBreakpoints } from "../../hooks/useBreakpoints";

const Header = () => {
    const { isLessThan600 } = useBreakpoints();
    const weatherData = useWeatherStore((state) => state.weatherData);

    return (
        <Flex
            align='center'
            gap={`${isLessThan600 ? "20px" : "50px"}`}
            flexDirection={`${isLessThan600 ? "column" : "row"}`}
        >
            <Flex gap='20px' align='center'>
                <Box bg='background.secondary' padding={4} borderRadius='full'>
                    <Emoji />
                </Box>
                <Box bg='background.secondary' padding={4} borderRadius='full'>
                    <Notification />
                </Box>
                <Flex gap='10px' align='center'>
                    <Location />
                    <Text fontSize='md'>{weatherData?.name}</Text>
                </Flex>
            </Flex>
            <InputSearch />
        </Flex>
    );
};

export default Header;
