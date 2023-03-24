/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { Frame2Props } from 'src/types';
import { animated, useSpring, easings } from 'react-spring';

const Frame21: any = animated(
  styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',
    justifyContent: `center`,
    alignItems: `center`,
    padding: `32px 24px`,
    boxSizing: `border-box`,
    height: 'auto',
    maxWidth: '300px',
  })
);

const LoremIpsumDolorSitAm: any = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Rectangle5: any = styled('div')({
  backgroundColor: `rgba(226, 72, 72, 1)`,
  borderRadius: `8px`,
  alignSelf: `stretch`,
  height: `140px`,
  margin: `42px 0px 0px 0px`,
});

const LoremIpsumDolorSitAm1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `uppercase`,
  alignSelf: `stretch`,
  margin: `42px 0px 0px 0px`,
});

const Button1: any = styled('div')({
  backgroundColor: `rgba(72, 115, 226, 1)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px 76px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `42px 0px 0px 0px`,
});

const ClickMe: any = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `uppercase`,
  margin: `0px`,
});

const ExternalLink: any = styled('a')({
  width: `289px`,
  textDecoration: `none`,
});

function Frame2(props: Frame2Props): JSX.Element {
  const [Frame21Spring, Frame21Api] = useSpring(() => ({
    config: {
      duration: 250,
      easing: easings['easeInOutExpo'],
    },
    delay: 0,
    from: { opacity: 1 },
  }));
  return (
    <Frame21
      onMouseLeave={() => {
        Frame21Api.start({ opacity: 1 });
      }}
      onMouseEnter={() => {
        Frame21Api.start({ ...{ opacity: 0.5 }, delay: 0 });
      }}
      className={props.className}
      style={{ ...Frame21Spring }}
    >
      <Helmet>
        <title>Frame 2</title>
      </Helmet>
      <LoremIpsumDolorSitAm>
        {`Lorem ipsum dolor sit amet consectetur.`}
      </LoremIpsumDolorSitAm>
      <Rectangle5></Rectangle5>
      <LoremIpsumDolorSitAm1>
        {`Lorem ipsum dolor sit amet consectetur. Habitant tristique non luctus bibendum vulputate sed magnis.`}
      </LoremIpsumDolorSitAm1>
      <ExternalLink
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button1>
          <ClickMe>{`Click me`}</ClickMe>
        </Button1>
      </ExternalLink>
    </Frame21>
  );
}

export default Frame2;