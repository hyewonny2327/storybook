import './ProfileBox.css';
import '../../App.css';

// eslint-disable-next-line react/prop-types
export default function ProfileBox({ imgUrl, name, variant }) {
  return (
    <div className={`profile ${variant}`}>
      <div className="image_container">
        <img src={imgUrl}></img>
      </div>
      <div className="name">{name}</div>
    </div>
  );
}
