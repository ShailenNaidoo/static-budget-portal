import React from 'react';
import {
  mockPresentationalProps,
  TpresentationProps,
  mockProgrammes,
  mockHeading,
  mockDropdown,
} from '../../schema';
import DepartmentSummary from '../../Presentation';

const passedProps: TpresentationProps = {
  ...mockPresentationalProps(),
  heading: {
    ...mockHeading(),
    selectionDropdown: {
      ...mockDropdown(),
      loading: true,
    },
  },
  programmes: {
    ...mockProgrammes(),
    chartLoading: false,
    chartNoticeData: null,
  },
};

const Test = () => <DepartmentSummary {...passedProps} />;

export default Test;