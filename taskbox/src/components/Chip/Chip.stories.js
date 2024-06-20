import Chip from './Chip';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'chip',
};
