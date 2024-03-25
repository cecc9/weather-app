import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';
import { Root } from '../../services/interface1';

interface Props {
    itemCity: Root;
}

const CardCity = ({ itemCity }: Props) => {
    return (
        <Stack
            height='100%'
            justify='space-between'
            bg='card.primary'
            p={3}
            borderRadius='2xl'
        >
            <Text textAlign='center' fontSize='3xl' color='text.tertiary'>
                {itemCity.name}
            </Text>
            <Flex justify='center' align='center' gap='20px'>
                <Box>
                    <Text fontSize='2xl' color='text.tertiary'>
                        {itemCity.main.temp}º
                    </Text>
                </Box>
                <Box>
                    <Img
                        src={`https://openweathermap.org/img/wn/${itemCity?.weather[0].icon}@2x.png`}
                    />
                </Box>
            </Flex>
            <div>
                <Text fontSize='lg' color='text.tertiary'>
                    zona horaria: {itemCity.timezone}
                </Text>
            </div>
        </Stack>
    );
};

export default CardCity;
