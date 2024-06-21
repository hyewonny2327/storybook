import Thumbnail from './Thumbnail';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
  argTypes: {
    data: {
      id: '1',
      name: '한라산 등반 모임',
      image: '/image1.jpg',
    },
    isIndexChip: {
      control: {
        type: 'boolean',
      },
    },
    isHotTopic: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => <Thumbnail {...args} />;
const templateData = [
  {
    name: '한라산 등반',
    id: 1,
    image: '/image1.jpg',
  },
  {
    name: '반려견과등산',
    id: 2,
    image: '/image2.jpg',
  },
  {
    name: '함께해요! 아침 등산',
    id: 3,
    image: '/image3.jpg',
  },
];
export const Default = Template.bind({});
Default.args = {
  data: templateData,
  isIndexChip: 'true',
  isHotTopic: 'true',
};
