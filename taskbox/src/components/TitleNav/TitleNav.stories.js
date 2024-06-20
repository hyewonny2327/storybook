import TitleNav from './TitleNav';

export default {
  title: 'TitleNav',
  component: TitleNav,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => (
  <div className="wrapper">
    <TitleNav {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: '제목입니다',
};
