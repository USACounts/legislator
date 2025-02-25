import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './index';

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta;

const Template: Story = () => <Button />;

export const Default = Template.bind({});
