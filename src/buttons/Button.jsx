import PropTypes from 'prop-types';
import '../../src/assets/css/button.css';

const Button = (props) => {
  const { children, className, variant, color, size, startIcon, endIcon, onClick, ...rest } = props || {};

  // Determine the variant, color, and size classes
  const variantClass = variant ? `btn-${variant}` : '';
  const colorClass = color ? `btn-${color}` : '';
  const sizeClass = size ? `btn-${size}` : 'btn-medium'; // Default to medium size

  return (
    <button 
      className={`customBtn ${variantClass} ${colorClass} ${sizeClass} ${className}`} 
      onClick={onClick} 
      {...rest}
    >
      {startIcon && <span className="btn-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="btn-icon">{endIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'text', 'outlined', 'tonal', 'iconLabel']),
  color: PropTypes.oneOf(['primary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Add size prop
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default Button;
