import SearchInput from './SearchInput';
import { useState } from 'react';
//onChange, onClick, value, placeholder
export default {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    onChange: { action: 'change' },
    onClick: { action: 'clicked' },
    value: { control: 'text' },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (event) => {
    setValue(event.target.value);
    args.onChange(event); // Storybook action
  };

  return <SearchInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '검색어를 입력하세요',
  value: '',
};
