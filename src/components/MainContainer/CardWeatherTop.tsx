import { Flex, Text } from "@chakra-ui/react";
import { getHour } from "../../utils/getHour";
import { getDay } from "../../utils/getDay";
import { Root } from "../../services/interface1";

interface Props {
    weatherData: Root | null;
}

const CardWeatherTop = ({ weatherData }: Props) => {
    return (
        <Flex
            h='50px'
            bg='card.secondary'
            p={3}
            borderTopRadius='3xl'
            align='center'
            justify='space-between'
        >
            <Text fontWeight={300} color='text.tertiary' fontSize='xl'>
                {weatherData?.dt && getDay(weatherData?.dt)}
            </Text>
            <Text as='b' color='text.tertiary' fontSize='xl'>
                {weatherData?.dt && getHour(weatherData?.dt)}
            </Text>
        </Flex>
    );
};

export default CardWeatherTop;
