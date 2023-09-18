import PropTypes from 'prop-types';
import css from './Container.module.css';

export default function Container({ title, sectionClass, children }) {
  return (
    <div className={`${sectionClass && css[sectionClass]} container`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  sectionClass: PropTypes.string,
  children: PropTypes.node,
};
