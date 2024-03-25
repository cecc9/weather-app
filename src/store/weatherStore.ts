import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { GlobalState, Actions } from './interfaces';
import { NotFound, Root, RootKey } from '../services/interface1';
import { getGeolocation } from '../services/apiGeolocation';
import {
    getUserWeatherData,
    getWeatherDataByCity,
    getWeatherDataByCoordHour,
    getWeatherDataByCityHour,
} from '../services/apiWeather';

export const useWeatherStore = create<GlobalState & Actions>((set, get) => ({
    weatherData: null,
    cityNotFound: null,
    cityNotFoundHour: null,
    listWeatherDataHour: null,
    listOfCities: [],

    getCoords: async () => {
        const dt = await getGeolocation();
        get().getUserWeather(dt);
        get().getUserWeatherHour(dt);
    },

    getUserWeather: async ({ lat, lon }) => {
        const dt = await getUserWeatherData({ lat: lat, lon: lon });
        set((state) => ({ ...state, weatherData: dt }));
    },

    getCityWeather: async (city) => {
        const dt = await getWeatherDataByCity(city);
        get().getCityWeatherHour(city);
        if (dt.cod !== '404') {
            set((state) => ({
                ...state,
                weatherData: dt as Root,
                listOfCities: [
                    { ...dt, key: nanoid() } as RootKey,
                    ...state.listOfCities,
                ],
            }));
        } else {
            set((state) => ({
                ...state,
                cityNotFound: dt as NotFound,
            }));

            setTimeout(
                () =>
                    set((state) => ({
                        ...state,
                        cityNotFound: null,
                    })),
                2500
            );
        }

        // console.log("listCities", get().listOfCities);
    },

    getUserWeatherHour: async ({ lat, lon }) => {
        const dtHour = await getWeatherDataByCoordHour({ lat: lat, lon: lon });
        set((state) => ({
            ...state,
            listWeatherDataHour: dtHour,
        }));
    },

    getCityWeatherHour: async (city) => {
        const dtCityHour = await getWeatherDataByCityHour(city);

        const stateUpdates = Array.isArray(dtCityHour)
            ? { listWeatherDataHour: dtCityHour }
            : { cityNotFoundHour: dtCityHour };

        set((state) => ({
            ...state,
            ...stateUpdates,
        }));
    },
}));
