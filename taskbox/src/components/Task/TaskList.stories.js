import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // 6번째만 pinned data로 설정
  tasks: [...Default.args.tasks.slice(0, 5), { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }],
};

export const Loading = Template.bind({});
Loading.args = {
  //로딩 상태의 경우 task는 비워두고 loading state를 true로
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // loding 의 arg를 그대로 복사(tasks에 빈 배열), loading상태만 false로 바꿔줌
  ...Loading.args,
  loading: false,
};
