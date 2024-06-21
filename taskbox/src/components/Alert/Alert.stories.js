import Alert from './Alert';
export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    message: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['error', 'info', 'success'],
      control: {
        type: 'select',
      },
    },
    isOpen: { action: 'open' },
    setIsOpen: { action: 'open' },
  },
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: '에러메세지입니다.',
};
export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  message: '인포메세지입니다.',
};
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: '성공메세지입니다.',
};
