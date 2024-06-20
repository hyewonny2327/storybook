import SectionTitle from './SectionTitle';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    targetPageUrl: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};
const Template = (args) => <SectionTitle {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: '제목입니다',
  subtitle: '설명을 입력하세요',
  targetPageUrl: './ddd',
};
