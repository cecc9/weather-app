import {
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
    TextProps,
    GridItemProps,
} from "@chakra-ui/react";

import { Root } from "../../services/interface1";
import { getHour } from "../../utils/getHour";

interface Props {
    weatherData: Root | null;
}

const CardWeatherBottom = ({ weatherData }: Props) => {
    const gridItemStyles: GridItemProps = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const flexTextStyles: TextProps = {
        as: "samp",
        color: "text.secondary",
        fontSize: "sm",
    };

    return (
        <Grid
            h='calc(100% - 50px)'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
        >
            <GridItem {...gridItemStyles}>
                <Text fontSize='4xl' fontWeight={500} color='text.tertiary'>
                    {weatherData?.main.temp}º
                </Text>
            </GridItem>
            <GridItem {...gridItemStyles}>
                <Image
                    src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                    alt={weatherData?.weather[0].description}
                    title={weatherData?.weather[0].description}
                />
            </GridItem>
            <GridItem borderBottomLeftRadius='3xl' p={4} color='text.tertiary'>
                <Flex gap={2}>
                    <Text {...flexTextStyles}>humidity:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.main.humidity}%
                    </Text>
                </Flex>
                <Flex gap={2}>
                    <Text {...flexTextStyles}>Pressure:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.main.pressure}MB
                    </Text>
                </Flex>
                <Flex gap={2}>
                    <Text {...flexTextStyles}>Longitud:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.coord.lon}
                    </Text>
                </Flex>
                <Flex gap={2}>
                    <Text {...flexTextStyles}>Latitud:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.coord.lat}
                    </Text>
                </Flex>
            </GridItem>
            <GridItem
                borderBottomRightRadius='3xl'
                color='text.tertiary'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                p={4}
            >
                <Flex gap={2}>
                    <Text {...flexTextStyles}>Sunrise:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.sys.sunrise &&
                            getHour(weatherData?.sys.sunrise)}
                    </Text>
                </Flex>
                <Flex gap={2}>
                    <Text {...flexTextStyles}>Sunsel:</Text>
                    <Text fontWeight={300} fontSize='sm'>
                        {weatherData?.sys.sunset &&
                            getHour(weatherData?.sys.sunset)}
                    </Text>
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default CardWeatherBottom;
