import './Thumbnail.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Thumbnail({ data, isIndexChip, isHotTopic }) {
  return (
    <div className="thumbnail">
      {data &&
        data.map((item, index) => (
          <div className="item-box" key={item.id}>
            {isIndexChip && (
              <div className="badge-container">
                <img src="/thumbnail-label.png" alt={`${index + 1}`} className="index-badge" />
                <p className="index-text">{`${index + 1}`}</p>
              </div>
            )}
            {isHotTopic && (
              <div className="topic-container">
                <div className="hot-topic">HOT🔥</div>
              </div>
            )}
            <div className="img-container">
              <div className="overlay"></div>
              <img className="img" src={item.image} />
            </div>
            <p className="title">{item.name}</p>
          </div>
        ))}
    </div>
  );
}

Thumbnail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  isIndexChip: PropTypes.bool.isRequired,
  isHotTopic: PropTypes.bool.isRequired,
};
