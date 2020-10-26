import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CardGroup, { CardGroupProps } from '../components/Card/CardGroup';
import { dummyVisas, dummyCountry } from '../global';

export default {
  title: 'Example/Card/CardGroup',
  component: CardGroup,
  argTypes: {
  },
} as Meta;

const Template: Story<CardGroupProps> = (args) => <CardGroup {...args} />;

export const CardGroupWithVisas = Template.bind({});
CardGroupWithVisas.args = {
  visas: JSON.parse(dummyVisas)
  , nationality: JSON.parse(dummyCountry)
};
