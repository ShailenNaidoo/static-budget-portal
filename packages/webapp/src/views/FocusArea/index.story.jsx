import React from 'react';
import { storiesOf } from '@storybook/react';
import FocusAreaTemp from './';

const item = (value) => ({
  national: [
    {
      name: 'Administration',
      amount: 695320000000,
      url: null
    },
    {
      name: 'Economic Statistics',
      amount: 493210000000,
      url: null
    },
    {
      name: 'Population & Social Statistics',
      amount: 202300000000,
      url: null
    },
    {
      name: 'Methodology, Standards & Reasearch',
      amount: 67400000000,
      url: null
    },
    {
      name: 'Statistical Support & Informatics',
      amount: 267100000000,
      url: null
    },
    {
      name: 'Statistical Collection & Outreach',
      amount: 608000000000,
      url: null
    },
    {
      name: 'Survey Operations',
      amount: 194740000000,
      url: null
    }
  ],
  // items: null,
  notices: ['This data will be available upon the release of the 2019-20 Provincial Budgets'],
  name: 'Something',
  footnote: [
    'sourceEquitable: Estimates of National Expenditure 2017-19',
    'note: Provincial  Share is excluded as it is not part of national departments’ operations expenditure.'
  ],
  provincial: [
    {
      name: 'Administration',
      amount: 695320000000,
      url: null
    },
    {
      name: 'Economic Statistics',
      amount: 493210000000,
      url: null
    },
    {
      name: 'Population & Social Statistics',
      amount: 202300000000,
      url: null
    },
    {
      name: 'Methodology, Standards & Reasearch',
      amount: 67400000000,
      url: null
    },
    {
      name: 'Statistical Support & Informatics',
      amount: 267100000000,
      url: null
    },
    {
      name: 'Statistical Collection & Outreach',
      amount: 608000000000,
      url: null
    },
    {
      name: 'Survey Operations',
      amount: 194740000000,
      url: null
    }
  ],
  // items: null,
  notices: ['This data will be available upon the release of the 2019-20 Provincial Budgets'],
  name: 'Something',
  footnote: [
    'sourceEquitable: Estimates of National Expenditure 2017-19',
    'note: Provincial  Share is excluded as it is not part of national departments’ operations expenditure.'
  ],
  id: value
});


const items = [1,2,3,4,5].map((value) => {
  return item(value)
});


const initialSelected = {
  name: 'Provincial Department Contributions',
  value: 92348259852,
  url: null,
  color: 'rgba(0, 0, 0, 0.1)'
}

const props = {
  items,
  department: 2,
  initialSelected
}


const basic = () => <FocusAreaTemp {...props} />;


storiesOf('view.FocusAreaTemp', module)
  .add('Default', basic)