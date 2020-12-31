import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { useCity } from 'components/hooks';
import wind from 'assets/wind.png';
import hum from 'assets/hum.png';
import { useAppInfo } from 'provider/Provider';

const date = new Date();
const month = format(date, 'LLLL');
const day = format(date, 'd');

const WheaterContent = () => {
  // setCurrentLocal({
  //   city: data.name,
  //   temperature: ,
  //   hum: data.main.humidity,
  //   wind: data.wind.speed,
  //   climate: data.weather[0].description,
  //   date: `${day} ${month}`,
  // });
  const { search } = useAppInfo();

  const { data, error } = useCity(search);
  return (
    <WeatherContentContainer>
      <StandardInfo>Today, {`${day} ${month}`}</StandardInfo>
      <Temperature>
        {data?.cod === 200 && data?.main.temp.toFixed(0)}°
      </Temperature>
      <Climate>{data?.cod === 200 && data?.weather[0].description}</Climate>
      <OtherInfoContainer>
        <Wind src={wind} />
        <Hum src={hum} />
        <OtherInfo>
          <StandardInfo>Wind</StandardInfo>
          <StandardInfo>Hum</StandardInfo>
        </OtherInfo>
        <OtherInfo>
          <StandardView>
            <StandardInfoModified>
              {data?.cod === 200 && data?.wind.speed} km/h
            </StandardInfoModified>
          </StandardView>
          <StandardView>
            <StandardInfoModified>
              {data?.cod === 200 && data?.main.humidity} %
            </StandardInfoModified>
          </StandardView>
        </OtherInfo>
      </OtherInfoContainer>
    </WeatherContentContainer>
  );
};

const Wind = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: -25px;
  top: 1px;
`;

const Hum = styled.img`
  position: absolute;
  width: 18px;
  height: 21px;
  left: -25px;
  bottom: 3px;
`;

const WeatherContentContainer = styled.div`
  align-items: center;
  flex-basis: 65%;
  width: 90%;
  max-width: 353px;
  min-height: 391px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 45px;
  @media (max-width: 320px) {
    width: 100%;
    padding: 10px;
  }
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 20px;
`;

const StandardInfo = styled.p`
  color: #ffffff;
  padding-left: 20px;
  font-family: Overpass;
  font-size: 18px;
  /* text shadow normal */
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const StandardInfoModified = styled(StandardInfo)`
  border-left: 1px solid white;
`;

const StandardView = styled.div`
  margin-left: 20px;
  display: flex;
`;

const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 80px;
  flex-basis: 23%;
  margin-top: 50px;
  @media (max-width: 320px) {
    margin-left: 10px;
  }
`;

const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Climate = styled.h2`
  color: white;
  font-weight: 700;
  font-family: Overpass;
  text-transform: capitalize;
  font-size: 24px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const Temperature = styled.h1`
  text-shadow: rgba(0, 0, 0, 0.1) -4px 8px 5px;
  font-family: Overpass;
  font-size: 100px;
  color: white;
  margin-left: 15px;
`;

export default WheaterContent;
