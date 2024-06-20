import './TitleNav.css';
import { IoChevronBack } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
export default function TitleNav({ title }) {
  return (
    <div>
      <div className="titleContainer">
        <div className="backBtn">
          <IoChevronBack color="#498428" size={'1.5rem'} />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
