import './SectionTitle.css';
import { MdChevronRight } from 'react-icons/md';
// eslint-disable-next-line react/prop-types
export default function SectionTitle({ title, subtitle, targetPageUrl }) {
  return (
    <div className="section-title">
      <p className="title">{title}</p>
      <div className="subtitle-container">
        <p className="subtitle">{subtitle}</p>
        {targetPageUrl && (
          <div className="icon-container">
            <div>더보기</div>
            <MdChevronRight color="#A1A1A1" />
          </div>
        )}
      </div>
    </div>
  );
}
