import React, { FC, ReactNode } from 'react';
import { styled } from 'styletron-react';

const colors = {
  good: {
    bar: '#4caf50',
    text: '#2e7b32',
  },
  bad: {
    bar: '#d32f2f',
    text: '#d32f2f',
  },
  figcaption: {
    text: '#616161',
  },
};

type OptionType = 'good' | 'bad';

interface OptionProps {
  type: OptionType;
  example: ReactNode;
  description: string;
}

const OptionWrapper = styled('figure', {
  width: '100%',
  margin: '0 24px 48px 24px',
  boxSizing: 'border-box',
  maxWidth: '300px',
});

const Example = styled('div', {
  border: '1px solid rgba(0, 0, 0, 0.12)',
  textAlign: 'center',
});

const Description = styled('p', {
  margin: '0 0 16px',
});

const FigCaption = styled('figcaption', {
  fontSize: '14px',
  marginTop: '16px',
  color: colors.figcaption.text,
  boxSizing: 'border-box',
  backgroundRepeat: 'no-repeat',
  lineHeight: '1.5',
});

const DoOrDont = styled('p', ({ $type }: { $type: OptionType }) => ({
  color: $type === 'good' ? colors.good.text : colors.bad.text,
  borderColor: $type === 'good' ? colors.good.bar : colors.bad.bar,
  borderTop: '15px solid',
  fontWeight: 500,
  margin: 0,
  maxWidth: '100%',
  padding: '10px 0 2px',
}));

const Option: FC<OptionProps> = ({ type, example, description }) => (
  <OptionWrapper>
    <Example>{example}</Example>
    <FigCaption>
      <DoOrDont $type={type}>{type === 'good' ? 'Do.' : `Don't.`}</DoOrDont>
      <Description>{description}</Description>
    </FigCaption>
  </OptionWrapper>
);

interface ComparisonProps {
  good: Omit<OptionProps, 'type'>;
  bad: Omit<OptionProps, 'type'>;
}

const ComparisonWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0 -24px',
  maxWidth: '800px',
});

export const Comparison: FC<ComparisonProps> = ({ good, bad }) => (
  <ComparisonWrapper>
    <Option {...good} type="good" />
    <Option {...bad} type="bad" />
  </ComparisonWrapper>
);