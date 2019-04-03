import styled from 'styled-components';
import Down from '@material-ui/icons/ArrowDropDown';
import Up from '@material-ui/icons/ArrowDropUp';

const Wrapper = styled.div`
  font-family: Roboto;
  justify-content: center;
  margin-right: 16px;
  margin-left: 16px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1200px;
`;

const Numbers = styled.div`
  display: flex;
`;

const Budget = styled.div`
  width: 33%;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

const IntroMainHeading = styled.h1`
  font-size: 24px;
  line-height: 1.3;
  margin: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 900px) {
    font-size: 48px;
  }
`;

const IntroSubHeading = styled.p`
  font-size: 10px;
  margin: 0;
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;

const Percentages = styled.div`
  display: flex;
  justify-content: space-around;
  width: 66%;
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;

const PercentageBlock = styled.div`
  margin: 0 10px;
  @media screen and (min-width: 900px) {
    margin: 0 40px;
  }
`;

const DownIcon = styled(Down)`
  && {
    font-size: 20px;
    margin-right: 4px;
    @media screen and (min-width: 900px) {
      font-size: 40px;
    }
  }
`;

const UpIcon = styled(Up)`
  && {
    font-size: 20px;
    margin-right: 4px;
    @media screen and (min-width: 900px) {
      font-size: 40px;
    }
  }
`;

export {
  Wrapper,
  Summary,
  Numbers,
  Budget,
  IntroMainHeading,
  IntroSubHeading,
  Percentages,
  PercentageBlock,
  DownIcon,
  UpIcon,
}

export default {
  Wrapper,
  Summary,
  Numbers,
  Budget,
}