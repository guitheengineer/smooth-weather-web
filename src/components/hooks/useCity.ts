import { useQuery } from 'react-query';
import { capitalize } from 'utils';

const getCity = async (search: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capitalize(
      search ? search : 'California'
    )}&units=metric&appid=1a91952eda02ed514b41072449874b55`
  );
  return res.json();
};

type Result = {
  message: string;
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
};

const useCity = (search: string) =>
  useQuery<Result, Error>(['city', search], () => getCity(search));

export default useCity;
