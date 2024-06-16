import Button from './Button';
export default {
  title: 'Button', // Storybook UI에 표시될 컴포넌트의 제목
  component: Button, // 사용할 컴포넌트
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse entered' },
    onMouseLeave: { action: 'mouse left' },
    size: {
      control: {
        type: 'select',
        options: ['fixed', 'large', 'fluent'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['rectangle', 'rounded', 'icon-only'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Rectangular = Template.bind({});
Rectangular.args = {
  children: 'rectangular btn',
  size: 'large',
};
export const Rounded = (args) => {
  return (
    <div className="wrapper">
      <Button {...args} variant="rounded" size="medium">
        rounded
      </Button>
      <Button {...args} variant="rounded" size="fluent">
        fluent
      </Button>
      <Button {...args} variant="rounded" size="fluent">
        텍스트 길이만큼 유동적으로 바뀜
      </Button>
    </div>
  );
};
// Rounded.args = {
//   children: 'rounded btn',
//   size: 'small',
//   variant: 'rounded',
// };

/**
 * export const Danger = (args) => {
  return (
    <>
      <Button kind="danger" {...args}>
        Button
      </Button>
      &nbsp;
      <Button kind="danger--tertiary" {...args}>
        Tertiary Danger Button
      </Button>
      &nbsp;
      <Button kind="danger--ghost" {...args}>
        Ghost Danger Button
      </Button>
    </>
  );
};
 */
