import React from 'react';
import styled from 'styled-components';

const formatNumber = number => Intl.NumberFormat().format(number);

const MinutesCounter = styled.div`
  font-family: 'Fjalla One';
  z-index: 5;
  margin: 0;
  padding: 0;
  text-shadow:
    0 0.0625rem 0 #ccc,
    0 0.125rem 0 #c9c9c9,
    0 0.1875rem 0 #bbb,
    0 0.25rem 0 #b9b9b9,
    0 0.3125rem 0 #aaa,
    0 0.375rem 0.0625rem rgba(0, 0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 0.0625rem 0.1875rem rgba(0,0,0,.3),
    0 0.1875rem 0.3125rem rgba(0,0,0,.2),
    0 0.375rem 0.625rem rgba(0,0,0,.25),
    0 0.625rem 0.625rem rgba(0,0,0,.2),
    0 1.25rem 1.25rem rgba(0,0,0,.15);

  @media only screen and (max-width: 21rem) { /* width < 21rem */
    font-size: 6rem;
  }

  @media only screen and (min-width: 21rem) and (max-width: 62rem) {  /* width > 21rem) and (width < 62rem */
    font-size: 10rem;
  }

  @media only screen and (min-width: 62rem) { /* width > 62rem */
    font-size: 18rem;
  }
`;

const Wrapper = ({ remainingMinutes }) => (
  <MinutesCounter>
    {formatNumber(remainingMinutes)}
  </MinutesCounter>
);

Wrapper.displayName = 'MinutesCounter';

export default Wrapper;
