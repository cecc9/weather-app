import { Coord } from "./interface1";

export const getGeolocation = (): Promise<Coord> => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = position.coords;
            resolve({ lat: coords.latitude, lon: coords.longitude });
        });
    });
};
