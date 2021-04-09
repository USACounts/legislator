import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillTitle, { BillTitleProps as BillTitleProperties } from './index';

export default {
  title: 'Components/BillTitle',
  component: BillTitle,
} as Meta;

const Template: Story<BillTitleProperties> = (arguments_) => (
  <BillTitle {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  title:
    'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
};
