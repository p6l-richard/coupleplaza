import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    email: 'your@email.com'
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
