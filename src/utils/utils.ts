import { ICity } from '../interfaces/city';
import { ICoordinates } from '../interfaces/coordinates';
import { IForecast, IDay } from '../interfaces/forecast';

export const searchCity = (city: string): Promise<ICity[]> => {
  return new Promise((resolve, reject) => {
    let url = `https://search.reservamos.mx/api/v2/places?q=${city}`;
    fetch(url)
      .then((response: Response) => response.json())
      .then(data => {
        const results = data
          .filter((element: ICity) => element.result_type === 'city')
          .map((city: ICity) => ({
            ...city,
            sort_criteria: Number(parseFloat(String(city.sort_criteria)).toFixed(2)),
          }));
        // .find(match => match.sort_criteria > 0.60)
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const searchForecastFor = (coords: ICoordinates): Promise<any> => {
  return new Promise((resolve, reject) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?appid=a5a47c18197737e8eeca634cd6acb581&units=metric&lat=${coords.latitude}&lon=${coords.longitude}&lang=es`;
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IForecast) => {
        const result = data.daily.map((day: IDay) => ({
          temp: day.temp,
          weather: day.weather,
          timestamp: unixToDate(day.dt),
        }));

        resolve({ current: data.current, forecast: result });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const unixToDate = (unixTime: number): Date => {
  return new Date(unixTime * 1000);
};


export const dayName = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
}
