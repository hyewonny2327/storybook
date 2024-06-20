import './GatheringList.css';
import PropTypes from 'prop-types';

export default function GatheringList({ state, gatheringInfo }) {
  return (
    <div className={`gathering-list ${state}`}>
      <img className="image" src={gatheringInfo.imageUrl}></img>
      <div className="text-container">
        <div className="title">{gatheringInfo.title}</div>
        <div className="content">{gatheringInfo.content}</div>
        <div className="info-container">
          <div className="tag">{gatheringInfo.tag}</div>
          {/* 5글자 까지만 들어가도록 */}
          <div>{gatheringInfo.mountain}</div>
          <div>
            {gatheringInfo.attendance}/{gatheringInfo.capacity}(명)
          </div>
          <div>{gatheringInfo.date}</div>
        </div>
      </div>
    </div>
  );
}

GatheringList.propTypes = {
  state: PropTypes.string.isRequired,
  gatheringInfo: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    mountain: PropTypes.string.isRequired,
    attendance: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
