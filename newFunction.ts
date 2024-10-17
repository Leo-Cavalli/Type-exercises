const add = (a:number, b:number) => {
    return a + b;
}

const subtract = (a:number, b:number):number => {
    return a - b;
}

function divide(a:number, b:number):number {
    return a/b;
}

const multiply = (a:number, b:number):number => {
    return a * b;
}

const logger = (message:string): void => {
    console.log(message);
}

const throwError = (message:string): void => {
    if (!message) {
        throw new Error(message);
    }

}

const  todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

//pega apenas as propriedades date, weather do objeto todaysWeather e realiza notação de como esses dados estão sendo enviados
const logWeather = ({date, weather}: {date: Date, weather: string}):void =>{
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);