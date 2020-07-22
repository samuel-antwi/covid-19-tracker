import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Styles>
      <div className='nav'>
        <Container className='py-4'>
          <div className='nav-items'>
            <div>
              <a className='text-muted' href='/'>
                COVID-19 | UPDATE
              </a>
            </div>
            <div>
              <Link to='/about' className='text-muted'>
                ABOUT
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Styles>
  );
};

export default Navbar;

const Styles = styled.div`
  .nav-items {
    display: flex;
    justify-content: space-around;
  }
`;
