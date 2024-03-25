import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import { useWeatherStore } from '../../store/weatherStore';

import CardWeatherTop from './CardWeatherTop';
import CardWeatherBottom from './CardWeatherBottom';
import HourlyCityWeather from '../HourlyCityWeather';
import SearchedCities from '../SearchedCities';

import { useBreakpoints } from '../../hooks/useBreakpoints';

const MainContainer = () => {
    const { isLessThan650 } = useBreakpoints();
    const weatherData = useWeatherStore((state) => state.weatherData);

    return (
        <Grid
            // w='100%'
            h='calc(100% - 54px)'
            gap={4}
            templateRows='repeat(2, 1fr)'
            templateColumns='100%'
        >
            <GridItem display='flex' gap='20px' flexDirection='column'>
                {/* <Box>parte de arriba los botones</Box> */}
                <Flex
                    h='100%'
                    gap='20px'
                    flexDirection={`${isLessThan650 ? 'column' : 'row'}`}
                >
                    <Box flexGrow='1' bg='card.primary' borderRadius='3xl'>
                        <CardWeatherTop weatherData={weatherData} />
                        <CardWeatherBottom weatherData={weatherData} />
                    </Box>
                    <Stack
                        flexGrow='2'
                        width={`${
                            isLessThan650 ? '100%' : 'calc(100% - 345px)'
                        }`}
                        align='center'
                    >
                        <HourlyCityWeather />
                    </Stack>
                </Flex>
            </GridItem>
            <GridItem display='flex' flexDirection='column'>
                <Box p={4}>Lista de ciudades buscadas</Box>
                <SearchedCities />
            </GridItem>
        </Grid>
    );
};

export default MainContainer;
