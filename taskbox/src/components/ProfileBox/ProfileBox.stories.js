import ProfileBox from './ProfileBox';
export default {
  title: 'ProfileBox',
  component: ProfileBox,
  argTypes: {
    imgUrl: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
};

export const Overview = () => {
  return (
    <>
      <div className="wrapper">
        <div>vertical profile</div>
        <ProfileBox imgUrl="/defaultProfile.png" name="영남회장" variant="vertical" />
      </div>
      <div className="wrapper">
        <div>horizontal profile</div>
        \ <ProfileBox imgUrl="/defaultProfile.png" name="영남회장" variant="horizontal" />
      </div>
    </>
  );
};

export const VerticalProfile = () => {
  return (
    <div className="wrapper">
      <ProfileBox imgUrl="/defaultProfile.png" name="영남회장" variant="vertical" />
    </div>
  );
};
export const HorizontalProfile = () => {
  return (
    <div className="wrapper">
      <ProfileBox imgUrl="/defaultProfile.png" name="영남회장" variant="horizontal" />
    </div>
  );
};
