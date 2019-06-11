import React from 'react';
import { mockProps, mockYearsProp, mockPhasesProp, Tprops } from '../../schema';
import ChartSection from '../..';

const passedProps: Tprops = {
  ...mockProps(),
  phases: {
    ...mockPhasesProp(),
    loading: true,
  },
  years: {
    ...mockYearsProp(),
    loading: true,
  },
};

const Test = () => <ChartSection {...passedProps} />;

export default Test;