import PropTypes from 'prop-types';
import '../../src/assets/css/button.css';

const Fab = (props) => {
  const { children, className, variant, color, size, icon, onClick, ...rest } = props || {};

  // Determine the variant, color, and size classes
  const variantClass = variant ? `fab-${variant}` : 'fab-circular'; // Default to circular if not specified
  const colorClass = color ? `fab-${color}` : '';
  const sizeClass = size ? `fab-${size}` : 'fab-medium'; // Default to medium size

  // Remove the iconLabel class if size is provided
  const iconLabelClass = size ? '' : 'fab-iconLabel';

  return (
    <button
      className={`customFab ${variantClass} ${colorClass} ${sizeClass} ${iconLabelClass} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="fab-icon">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

Fab.propTypes = {
  variant: PropTypes.oneOf(['circular', 'expanded']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node.isRequired,
};

export default Fab;
