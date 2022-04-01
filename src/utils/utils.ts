import { ICity } from "../interfaces/city";

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

