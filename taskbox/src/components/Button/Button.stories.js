import Button from './Button';
import { IoSearch } from 'react-icons/io5';

export default {
  title: 'Button', // Storybook UI에 표시될 컴포넌트의 제목
  component: Button, // 사용할 컴포넌트
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse entered' },
    onMouseLeave: { action: 'mouse left' },
    size: {
      options: ['fixed', 'large', 'fluent'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['rectangular', 'rounded', 'outlined', 'outlined-icon'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['primary', 'secondary', 'disabled', 'danger', 'none'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => <Button {...args} />;

export const Overview = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>variant option : rectangular | rounded | outlined</div>
      <Template variant="rectangular" size="large" color="primary">
        rectangular
      </Template>
      <Template variant="rounded" size="large" color="primary">
        rounded
      </Template>
      <Template variant="outlined" size="large" color="none">
        outlined
      </Template>
      <Template variant="outlined-icon" size="fluent" color="none">
        <div className="icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.83585 0C2.61971 0 0 2.61971 0 5.83585C0 9.05198 2.61971 11.6717 5.83585 11.6717C7.23442 11.6717 8.51881 11.1751 9.52543 10.3507L13.0098 13.8351C13.1562 13.9875 13.3736 14.0489 13.5781 13.9956C13.7826 13.9423 13.9423 13.7826 13.9956 13.5781C14.0489 13.3736 13.9875 13.1562 13.8351 13.0098L10.3507 9.52543C11.1751 8.51881 11.6717 7.23442 11.6717 5.83585C11.6717 2.61971 9.05198 0 5.83585 0ZM5.83585 1.16717C8.4212 1.16717 10.5045 3.2505 10.5045 5.83585C10.5045 8.4212 8.4212 10.5045 5.83585 10.5045C3.2505 10.5045 1.16717 8.4212 1.16717 5.83585C1.16717 3.2505 3.2505 1.16717 5.83585 1.16717Z"
              fill="#498428"
            />
          </svg>
        </div>
        <div className="text">outlined-icon</div>
      </Template>
      <div>size option : large | fixed | fluent</div>
      <Template variant="rectangular" size="large" color="primary">
        large
      </Template>
      <Template variant="rectangular" size="fixed" color="primary">
        fixed
      </Template>
      <Template variant="rectangular" size="fluent" color="primary">
        fluent
      </Template>
      <div>color option : primary | secondary | disabled | danger | none</div>
      <Template variant="rectangular" size="fixed" color="primary">
        primary
      </Template>
      <Template variant="rectangular" size="fixed" color="secondary">
        secondary
      </Template>
      <Template variant="rectangular" size="fixed" color="disabled">
        disabled
      </Template>
      <Template variant="rectangular" size="fixed" color="danger">
        danger
      </Template>
      <Template variant="rectangular" size="fixed" color="none">
        none
      </Template>
    </div>
  );
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  variant: 'rectangular',
  size: 'large',
  color: 'primary',
  children: 'rectangular btn',
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'rounded',
  size: 'large',
  color: 'primary',
  children: 'rounded btn',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  size: 'large',
  color: 'none',
  children: 'outlined',
};

export const OutlinedIcon = Template.bind({});
OutlinedIcon.args = {
  variant: 'outlined-icon',
  size: 'large',
  color: 'none',
  children: (
    <>
      <IoSearch color="#498428" />
      <div className="text">outlined-icon</div>
    </>
  ),
};
