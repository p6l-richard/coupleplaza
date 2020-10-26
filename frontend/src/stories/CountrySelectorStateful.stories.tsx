import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { State, Store } from "@sambego/storybook-state";

import CountrySelector, { CountrySelectorProps } from '../components/CountrySelector/CountrySelector';
import { Country, dummyCountry } from '../global';

export default {
  title: 'Example/CountrySelector/Stateful',
  component: CountrySelector,
  argTypes: {
  },
  decorators: [story => <div><State store={store}>{story()}</State></div>]
} as Meta;

const STORY_COUNTRIES: Country[] = [JSON.parse(dummyCountry), JSON.parse(dummyCountry), JSON.parse(dummyCountry), JSON.parse(dummyCountry)]
const store = new Store({
  nationality: {} as Country
});

const Template: Story<CountrySelectorProps> = (args) => <CountrySelector {...args} />

export const CountrySelectorStateful = Template.bind({});
CountrySelectorStateful.args = {
  countries: STORY_COUNTRIES
  , onCountrySelection: (event, selectedCountry) => { store.set({ nationality: selectedCountry }) }
  , onRemoveSelection: (event) => { store.set({ nationality: {} as Country }) }
};

