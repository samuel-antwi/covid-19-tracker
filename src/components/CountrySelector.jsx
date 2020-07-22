import React, { useContext } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import { APIContext } from '../context/APIContext';

const CountrySelector = () => {
  const { countries, countryCode, handleChange, isLoading } = useContext(
    APIContext
  );
  console.log(countries);

  if (isLoading) {
    return null;
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group>
              <Form.Label>
                Select a country from the down to get the current update
              </Form.Label>
              <Form.Control
                as='select'
                value={countryCode}
                onChange={handleChange}>
                <option value='global'>Global</option>
                {countries.map((country, i) => (
                  <option key={i}>{country.country}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CountrySelector;
