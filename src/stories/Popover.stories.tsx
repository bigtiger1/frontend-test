import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import StyledPopover from '../components/Popover';

export default {
  title: 'Popover',
  component: StyledPopover,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof StyledPopover>;

const Story: ComponentStory<typeof StyledPopover> = (args) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <StyledPopover {...args}>
        <div>{args.text}</div>
      </StyledPopover>
    </Box>
  )
}

export const Popover = Story.bind({});
Popover.args = {
  title: 'Title',
  content: 'This is a Popover on the trigger.',
  placement: 'left',
  trigger: 'click',
  text: 'Click'
};
