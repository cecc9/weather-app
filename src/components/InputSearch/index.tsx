import { useState, FormEvent } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { useWeatherStore } from "../../store/weatherStore";
import Search from "../Icons/Search";

const InputSearch = () => {
    const [citySearch, setCitySearch] = useState<string>("");

    const getCityWeather = useWeatherStore((state) => state.getCityWeather);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getCityWeather(citySearch);
        setCitySearch("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex
                align='center'
                bg='background.secondary'
                padding={3}
                borderRadius='3xl'
                gap='15px'
            >
                <Search />
                <Input
                    type='text'
                    id='city'
                    name='city'
                    autoComplete='off'
                    size='sm'
                    htmlSize={40}
                    placeholder='Search city...'
                    variant='unstyled'
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                />
                <Button
                    type='submit'
                    colorScheme='twitter'
                    paddingX={6}
                    borderRadius='2xl'
                >
                    Search
                </Button>
            </Flex>
        </form>
    );
};

export default InputSearch;
