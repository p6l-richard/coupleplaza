import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from '../components/Card/Card';
import { dummyVisa, dummyCountry } from '../global';

export default {
  title: 'Example/Card/SingleCard',
  component: Card,
  argTypes: {
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const VisaCard = Template.bind({});
VisaCard.args = {
  visa: JSON.parse(dummyVisa)
};
export const VisaCardNationality = Template.bind({});
VisaCardNationality.args = {
  visa: JSON.parse(dummyVisa)
};
