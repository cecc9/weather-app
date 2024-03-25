import { Coord, Root, RootKey, NotFound } from "../services/interface1";
import { List } from "../services/interface2";

export interface GlobalState {
    weatherData: Root | null;
    cityNotFound: NotFound | null;
    cityNotFoundHour: NotFound | null;
    listWeatherDataHour: List[] | null;
    listOfCities: RootKey[];
}

export interface Actions {
    getCoords: () => Promise<void>;
    getUserWeather: (dt: Coord) => Promise<void>;
    getCityWeather: (city: string) => Promise<void>;
    getUserWeatherHour: (dtHour: Coord) => Promise<void>;
    getCityWeatherHour: (city: string) => Promise<void>;
}
