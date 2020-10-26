import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SplitSerp, { SplitSerpProps } from '../pages/SplitSerp/SplitSerp';
import { dummyVisas, dummyCountry } from '../global';

export default {
  title: 'Pages/SplitSerp',
  component: SplitSerp,
  argTypes: {
  },
} as Meta;

const Template: Story<SplitSerpProps> = (args) => <SplitSerp {...args} />;

export const SplitSerpWithVisas = Template.bind({});
SplitSerpWithVisas.args = {
  visas: JSON.parse(dummyVisas)
  , countries: [JSON.parse(dummyCountry), JSON.parse(dummyCountry), JSON.parse(dummyCountry)]
};
