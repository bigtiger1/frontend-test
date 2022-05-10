import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MuiCard from '../components/MuiCard';

export default {
  title: 'Card',
  component: MuiCard,
};

const Template: ComponentStory<typeof MuiCard> = (args) => {
  return (
    <MuiCard {...args} />
  )
}

export const Card = Template.bind({});

Card.args = {
  label: 'Flood zone 3',
};
