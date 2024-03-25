export const getHour = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedTime = date.toLocaleTimeString();
    return formattedTime;
};
