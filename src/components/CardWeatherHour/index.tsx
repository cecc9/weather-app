import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { List } from "../../services/interface2";
import { getHour } from "../../utils/getHour";
import { getDay } from "../../utils/getDay";

interface Props {
    itemWeather: List;
}

const CardWeatherHour = ({ itemWeather }: Props) => {
    return (
        <Flex
            h='100%'
            // p={2}
            flexDirection='column'
            justify='space-between'
            align='center'
            gap='20px'
            bg='card.primary'
            borderRadius='2xl'
        >
            <Stack
                p={3}
                w='100%'
                textAlign='center'
                bg='card.secondary'
                borderTopRadius='2xl'
                color='text.tertiary'
            >
                <Text>{getHour(itemWeather.dt)}</Text>
                <Text>{getDay(itemWeather.dt)}</Text>
            </Stack>

            <Box>
                <Img
                    src={`https://openweathermap.org/img/wn/${itemWeather?.weather[0]?.icon}@2x.png`}
                    alt=''
                />
            </Box>
            <Text
                p={2}
                w='100%'
                fontSize='3xl'
                color='text.tertiary'
                bg='card.secondary'
                borderBottomRadius='2xl'
                textAlign='center'
            >
                {itemWeather.main.temp}º
            </Text>
        </Flex>
    );
};

export default CardWeatherHour;
