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
        options: ['rectangle', 'rounded', 'outlined', 'outlined-icon'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'disabled', 'danger', 'none'],
      },
    },
  },
};

export const Overview = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="wrapper">
        <div>variant option : rectangular | rounded | outlined</div>
        <Button variant="rectangular" size="large" color="primary">
          rectangular
        </Button>
        <Button variant="rounded" size="large" color="primary">
          rounded
        </Button>
        <Button variant="outlined" size="large" color="none">
          outlined
        </Button>
        <Button variant="outlined-icon" size="fluent" color="none">
          <div className="icon">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.83585 0C2.61971 0 0 2.61971 0 5.83585C0 9.05198 2.61971 11.6717 5.83585 11.6717C7.23442 11.6717 8.51881 11.1751 9.52543 10.3507L13.0098 13.8351C13.1562 13.9875 13.3736 14.0489 13.5781 13.9956C13.7826 13.9423 13.9423 13.7826 13.9956 13.5781C14.0489 13.3736 13.9875 13.1562 13.8351 13.0098L10.3507 9.52543C11.1751 8.51881 11.6717 7.23442 11.6717 5.83585C11.6717 2.61971 9.05198 0 5.83585 0ZM5.83585 1.16717C8.4212 1.16717 10.5045 3.2505 10.5045 5.83585C10.5045 8.4212 8.4212 10.5045 5.83585 10.5045C3.2505 10.5045 1.16717 8.4212 1.16717 5.83585C1.16717 3.2505 3.2505 1.16717 5.83585 1.16717Z"
                fill="#498428"
              />
            </svg>
          </div>
          <div className="text">outlined-icon</div>
        </Button>
      </div>
      <div className="wrapper">
        <div>size option : large | fixed | fluent</div>
        <Button variant="rectangular" size="large" color="primary">
          large
        </Button>
        <Button variant="rectangular" size="fixed" color="primary">
          fixed
        </Button>
        <Button variant="rectangular" size="fluent" color="primary">
          fluent
        </Button>
      </div>
      <div className="wrapper">
        <div>color option : primary | secondary | disabled | danger | none</div>
        <Button variant="rectangular" size="fixed" color="primary">
          primary
        </Button>
        <Button variant="rectangular" size="fixed" color="secondary">
          secondary
        </Button>
        <Button variant="rectangular" size="fixed" color="disabled">
          disabled
        </Button>
        <Button variant="rectangular" size="fixed" color="danger">
          danger
        </Button>
        <Button variant="rectangular" size="fixed" color="none">
          danger
        </Button>
      </div>
    </div>
  );
};
export const Rectangular = () => {
  return (
    <div className="wrapper">
      <Button variant="rectangular" size="large" color="primary">
        rectangular btn
      </Button>
    </div>
  );
};
export const Rounded = () => {
  return (
    <div className="wrapper">
      <Button variant="rounded" size="large" color="primary">
        rounded btn
      </Button>
    </div>
  );
};
export const Outlined = () => {
  return (
    <div className="wrapper">
      <Button variant="outlined" size="large" color="none">
        outlined
      </Button>
    </div>
  );
};
export const OutlinedIcon = () => {
  return (
    <div className="wrapper">
      <Button variant="outlined-icon" size="large" color="none">
        outlined-icon btn
      </Button>
    </div>
  );
};

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
