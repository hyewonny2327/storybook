import './SearchInput.css';
import { IoSearch } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
export default function SearchInput({ onChange, onClick, value, placeholder }) {
  return (
    <div className="search-input">
      <input className="search-input-box" onChange={onChange} value={value} placeholder={placeholder}></input>
      <IoSearch color="#498428" onClick={onClick} />
    </div>
  );
}
