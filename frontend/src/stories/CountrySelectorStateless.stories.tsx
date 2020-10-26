import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CountrySelector, { CountrySelectorProps } from '../components/CountrySelector/CountrySelector';
import { Country, dummyCountry } from '../global';

export default {
  title: 'Example/CountrySelector/Stateless',
  component: CountrySelector,
  argTypes: {

  }

} as Meta;

const STORY_COUNTRIES: Country[] = [JSON.parse(dummyCountry), JSON.parse(dummyCountry), JSON.parse(dummyCountry), JSON.parse(dummyCountry)]

const Template: Story<CountrySelectorProps> = (args) => <CountrySelector {...args} />;
export const CountrySelectorBasic = Template.bind({});
CountrySelectorBasic.args = {
  countries: STORY_COUNTRIES
  , onRemoveSelection: (e) => void (0)
  , onCountrySelection: (e) => void (0)
};

export const CountrySelectorWithPreSelectedNationality = Template.bind({});
CountrySelectorWithPreSelectedNationality.args = {
  ...CountrySelectorBasic.args
  , nationality: JSON.parse(dummyCountry)
};