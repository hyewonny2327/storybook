import GatheringList from './GatheringList';

export default {
  title: 'GatheringList',
  component: GatheringList,
  argTypes: {
    state: {
      options: ['default', 'myGatherings', 'attendingGatherings', 'completedGatherings'],
      control: {
        type: 'select',
      },
    },
    gatheringInfo: {
      title: '한라산 등반 모임',
      content: '한라산에서 함께하실 분',
      tag: '힐링',
      imageUrl: '',
      mountain: '한라산',
      capacity: '3',
      attendance: '2',
      date: '2024-06-20',
    },
    onClick: { action: 'clicked' },
  },
  decorators: [(story) => <div style={{ width: '390px' }}>{story()}</div>],
};

const Template = (args) => <GatheringList {...args} />;

const gatheringInfoData = {
  title: '한라산 등반 모임',
  content: '한라산에서 함께하실 분',
  tag: '힐링',
  imageUrl: '',
  mountain: '한라산',
  capacity: '3',
  attendance: '2',
  date: '2024-06-20',
};

export const Overview = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>state: default</div>
      <GatheringList state="default" gatheringInfo={gatheringInfoData} />
      <div>state: myGatherings</div>
      <GatheringList state="myGatherings" gatheringInfo={gatheringInfoData} />
      <div>state: attendingGatherings</div>
      <GatheringList state="attendingGatherings" gatheringInfo={gatheringInfoData} />
      <div>state: completedGatherings</div>
      <GatheringList state="completedGatherings" gatheringInfo={gatheringInfoData} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  gatheringInfo: gatheringInfoData,
};

export const MyGatherings = Template.bind({});
MyGatherings.args = {
  state: 'myGatherings',
  gatheringInfo: gatheringInfoData,
};

export const AttendingGatherings = Template.bind({});
AttendingGatherings.args = {
  state: 'attendingGatherings',
  gatheringInfo: gatheringInfoData,
};

export const CompletedGatherings = Template.bind({});
CompletedGatherings.args = {
  state: 'completedGatherings',
  gatheringInfo: gatheringInfoData,
};
