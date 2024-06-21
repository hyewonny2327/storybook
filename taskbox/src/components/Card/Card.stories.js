import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['green1', 'green2', 'green3', 'yellow'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'green1',
  children: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>여기에 내용을 입력하세요.</div>
      <div>variant option으로 색상을 변경하세요</div>
    </div>
  ),
};
