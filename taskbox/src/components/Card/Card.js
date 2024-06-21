import './Card.css';

// eslint-disable-next-line react/prop-types
export default function Card({ variant, children }) {
  return <div className={`card ${variant}`}>{children}</div>;
}
