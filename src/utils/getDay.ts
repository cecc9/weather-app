export const getDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedDay = date.toLocaleString("es-ES", { weekday: "long" });

    return formattedDay;
};
