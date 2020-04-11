import React from 'react';
import { styled } from 'styletron-react';
import { ReactComponent as InfoIcon } from './info.svg';
import { Code } from './formatters';

const ProTipWrapper = styled('div', {

  color: '#666',
  backgroundColor: '#f4f4f5',
  boxSizing: 'border-box',
  borderRadius: '3px',
  display: 'flex',
  lineHeight: 1.5
});

const ProTipContent = styled('div', {
  padding: '8px 16px',
});

const ProTipDescription = styled('div', {

});

const ProTipTitle = styled('div', {
  fontWeight: 600,
  fontSize: '1.125em',
  color: '#555',
});

const ProTipIcon = styled('div', {
  backgroundColor: '#e3e3e3',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
  padding: '8px',
});

export const ProTip = () => (
  <ProTipWrapper>
  <ProTipIcon><InfoIcon fill="#666" /></ProTipIcon>
  <ProTipContent>
    <ProTipTitle>Using FontAwesome?</ProTipTitle>
    <ProTipDescription>Great! All you have to do is change the class on your spinner from <Code>fa-spin</Code> to <Code>fa-pulse</Code>!</ProTipDescription>
  </ProTipContent>
</ProTipWrapper>
);