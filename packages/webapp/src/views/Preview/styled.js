import styled from 'styled-components';

import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  background: #fff;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  margin-left: 16px;

  @media screen and (min-width: 550px) {
    margin-right: 48px;
    margin-left: 48px;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 32px;
  max-width: 1200px;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-bottom: 48px;
  }
`;

const Description = styled(Typography)`
  && {
    font-size: 14px;
    line-height: 26px;
    color: #000;

    & > h2 {
      margin-top: 0;
      font-size: 16px;
    }

    @media screen and (min-width: 600px) {
      font-size: 16px;
    }

    @media screen and (min-width: 850px) {
      font-size: 16px;
      columns: 2;
      column-gap: 60px;

      & > p {
        margin-top: 0;
      }
    }
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  margin-left: 16px;

  @media screen and (min-width: 550px) {
    margin-right: 48px;
    margin-left: 48px;
  }
`;

const FooterContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  max-width: 1200px;

  @media screen and (min-width: 600px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const FooterDetails = styled(Typography)`
  && {
    font-size: 10px;
    line-height: 140%;
    color: #000;
    text-align: left;

    @media screen and (min-width: 600px) {
      font-size: 12px;
    }
  }
`;

export {
  Wrapper,
  TextWrapper,
  TextContainer,
  Description,
  FooterWrapper,
  FooterContainer,
  FooterDetails
}

export default {
  Wrapper,
  TextWrapper,
  TextContainer,
  Description,
  FooterWrapper,           
  FooterContainer,
  FooterDetails
}
