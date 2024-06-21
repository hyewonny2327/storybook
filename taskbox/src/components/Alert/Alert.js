/* eslint-disable no-unused-vars */
import './Alert.css';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RiInformationLine } from 'react-icons/ri';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
export default function Alert({ message, variant, isOpen, setIsOpen }) {
  return (
    <div className={`alert ${variant}`}>
      <div className="icon">
        {variant === 'error' && <RiErrorWarningLine size={'100%'} />}
        {variant === 'info' && <RiInformationLine size={'100%'} />}
        {variant === 'success' && <RiCheckboxCircleLine size={'100%'} />}
      </div>
      <div className="text">{message}</div>
      <div className="close" onClick={() => setIsOpen(false)}>
        <IoCloseOutline size={'100%'} />
      </div>
    </div>
  );
}
