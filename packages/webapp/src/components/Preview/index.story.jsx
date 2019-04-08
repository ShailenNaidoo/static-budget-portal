import React from 'react';
import { storiesOf } from '@storybook/react';
import Preview from './';


const props = {
  resources: {
      value: 372800000,
      consolidated: 37,
      change: -5,
    },
  items: [
    {
      title: 'Administration',
      amount: 695320000000
    },
    {
      title: 'Economic Statistics',
      amount: 493210000000
    },
    {
      title: 'Population & Social Statistics',
      amount: 202300000000
    },
    {
      title: 'Methodology, Standards & Reasearch',
      amount: 67400000000
    },
    {
      title: 'Statistical Support & Informatics',
      amount: 267100000000
    },
    {
      title: 'Statistical Collection & Outreach',
      amount: 608000000000
    },
    {
      title: 'Survey Operations',
      amount: 194740000000
    }
  ],
  description: 'Pastry cupcake jelly jujubes. Jelly beans biscuit cheesecake. Danish tart gummi bears chupa chups sesame snaps. Fruitcake ice cream liquorice wafer. Dragée bear claw macaroon. Lemon drops caramels soufflé soufflé carrot cake tart.'
};


const basic = () => <Preview {...props} />;


storiesOf('component.Preview', module)
  .add('Default', basic)