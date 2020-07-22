import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const APIContext = createContext();
const APIContextProvider = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState('global');
  const [daily, setDaily] = useState([]);
  const [countryIso2, setCountryIso2] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios('https://disease.sh/v3/covid-19/all');
      setData(response.data);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  // Get All Countries

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios(
          'https://disease.sh/v3/covid-19/countries'
        );
        setCountries(response.data.map((country) => country));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  // Handle form Onchange
  const handleChange = async (e) => {
    window.scrollTo(0, 0);
    const countryCode = e.target.value;
    const url =
      countryCode === 'global'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const response = await axios(url);
    setCountryCode(countryCode);
    setData(response.data);
  };

  // Get daily cases
  useEffect(() => {
    const fetchDaily = async () => {
      try {
        const response = await axios('https://covid19.mathdro.id/api/daily');
        const data = response.data.map(
          ({ confirmed, deaths, reportDate: date }) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date,
          })
        );
        setDaily(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDaily();
  }, []);

  useEffect(() => {
    const getIso = async () => {
      try {
        const res = await axios(
          `https://restcountries.eu/rest/v2/name/${countryCode}`
        );
        setCountryIso2(res.data.map((country) => country.alpha2Code));
      } catch (error) {
        console.log(error);
      }
    };
    getIso();
  }, [countryCode]);

  return (
    <APIContext.Provider
      value={{
        data,
        isLoading,
        countries,
        countryCode,
        handleChange,
        daily,
        countryIso2,
      }}>
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
