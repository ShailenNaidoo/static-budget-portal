import React, { Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Buttons from './Buttons';
import Resources from './Resources';
import NotificationBar from './NotificationBar';


const createImageTag = image => styled.div`
  background-image: url('${image}');
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubHeading = styled(Typography)`
  && {
    font-size: 10px;
  }
`;

const Heading = styled(Typography)`
  && {
    font-size: 20px;

    @media screen and (min-width: 800px) {
      font-size: 40px;
    }
  }
`;


const ExampleView = (props) => {
  const {
    buttons,
    heading,
    subheading,
    notice,
    resources,
    image,
    callToAction,
  } = props;

  const Image = createImageTag(image);

  return (
    <Fragment>
      <Image>
        <SubHeading>{subheading}</SubHeading>
        <Heading>{heading}</Heading>
        <Buttons primary={buttons.primary} secondary={buttons.secondary} />
      </Image>
      <NotificationBar {...{ notice, callToAction }} />
      {resources && <Resources {...{ resources }} />}
    </Fragment>
  );
};


export default ExampleView;


ExampleView.propTypes = {
  /** The heading text to use over the image */
  heading: t.string.isRequired,
  /** The smaller subheading text to user above the heading */
  subheading: t.string.isRequired,
  /** A single line of text to show as a notice just below image */
  notice: t.string,
  /** The image to use as the background for the hero section */
  image: t.string.isRequired,
  /** A primary and secondary button to display over the image */
  buttons: t.shape({
    primary: t.shape({
      text: t.string,
      link: t.string,
    }),
    secondary: t.shape({
      text: t.string,
      link: t.string,
    }),
  }).isRequired,
  /** A list of resources associated with this year's budget cycle */
  resources: t.arrayOf(t.shape({
    title: t.string,
    size: t.string,
    format: t.string,
    link: t.string,
  })),
  /** A main call-to-action card that goes below the image and above the 'notice' line of text  */
  callToAction: t.shape({
    heading: t.string,
    subheading: t.string,
    button: t.shape({
      text: t.string,
      link: t.string,
    }),
  }),
};


ExampleView.defaultProps = {
  notice: null,
  resources: null,
  callToAction: null,
};

