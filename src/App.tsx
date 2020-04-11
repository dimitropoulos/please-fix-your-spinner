import React, { FC } from 'react';
import { styled } from 'styletron-react';
import { ProTip } from './ProTip';
import { Comparison } from './Comparison';

const Header = styled('div', {
  fontSize: '32px',
  margin: '0 0 24px 0',
});

const AppWrapper = styled('div', {
  fontFamily: 'Roboto,sans-serif',
  fontWeight: 400,
  flexDirection: 'column',
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '24px',
});

const Container = styled('div', {
  maxWidth: '800px',
  padding: '24px',
});

const Paragraph = styled('p', {
  color: '#616161',
  margin: '0 0 24px',
  lineHeight: '24px',
})

export const App: FC = () => (
  <AppWrapper>
    <Container>
      <Header>Please, Fix Your Spinner</Header>
      <Paragraph>Segmented spinners such as the "8 dot spinner" are intended to be animated in a pulsing fashion rather than rotated with a fluid, linear animation.  Show your users that you pay attention to detail by making this simple change.</Paragraph>
      <Comparison
        good={{
          description: 'Segmented spinners are designed to be rotated within their segments.',
          example: <div className="spinner-good" />,
        }}
        bad={{
          description: `Don't use a fluid animation for segmented spinners.`,
          example: <div className="spinner-bad" />,
        }}
      />
      <ProTip />
    </Container>
  </AppWrapper>
);
