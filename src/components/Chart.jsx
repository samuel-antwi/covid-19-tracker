import React, { useContext } from 'react';
import { APIContext } from '../context/APIContext';
import styled from 'styled-components';
import { Line, Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

const Chart = () => {
  const { data, daily, countryCode } = useContext(APIContext);
  const { cases, recovered, deaths } = data;

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const lineChart = daily[0] ? (
    <Line
      data={{
        labels: daily.map(({ date }) => date),
        datasets: [
          {
            data: daily.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#FFA500',
            backgroundColor: '#FFA500',
            fill: true,
          },
          {
            data: daily.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#ff6666',
            backgroundColor: '#ff6666',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = cases ? (
    <Bar
      data={{
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#FFA500', '#00ffab', '#ff6666'],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
      }}
    />
  ) : null;

  return (
    <React.Fragment>
      <Styles>
        <Container className='py-5'>
          <p className='text-center font-weight-bold'>
            Current state in {countryCode}
          </p>
          {countryCode === 'global' ? (
            <div>{lineChart}</div>
          ) : (
            <div>{barChart}</div>
          )}
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default Chart;

const Styles = styled.div``;
