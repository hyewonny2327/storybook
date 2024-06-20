import ProfileBox from './ProfileBox';

export default {
  title: 'ProfileBox',
  component: ProfileBox,
  argTypes: {
    imgUrl: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => <ProfileBox {...args} />;

export const VerticalProfile = Template.bind({});
VerticalProfile.args = {
  imgUrl: '/defaultProfile.png',
  name: '영남회장',
  variant: 'vertical',
};

export const HorizontalProfile = Template.bind({});
HorizontalProfile.args = {
  imgUrl: '/defaultProfile.png',
  name: '영남회장',
  variant: 'horizontal',
};
