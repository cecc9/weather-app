import { Coord, Root, NotFound } from "./interface1";
import { RootHour, List } from "./interface2";

const api_key = import.meta.env.VITE_API_KEY;

// This function gets the weather data for the specified latitude and longitude.
//
// Args:
//   lat: The latitude.
//   lon: The longitude.
//
// Returns:
//   A promise that resolves to the weather data.

export const getUserWeatherData = async ({
    lat,
    lon,
}: Coord): Promise<Root> => {
    const response: Response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_API_KEY
        }`
    );
    const data = await response.json();
    return data;
};

export const getWeatherDataByCity = async (
    city: string
): Promise<Root | NotFound> => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`
    );
    const data = await response.json();
    // console.log(data);
    return data;
};

export const getWeatherDataByCoordHour = async ({
    lat,
    lon,
}: Coord): Promise<List[]> => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    const data: RootHour = await response.json();
    return data.list.slice(0, 8);
};

export const getWeatherDataByCityHour = async (
    city: string
): Promise<List[] | NotFound> => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${api_key}`
    );
    const data = await response.json();
    if (data.cod !== "200") {
        return data;
    }
    return data.list.slice(0, 8);
};
