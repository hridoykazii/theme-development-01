import PropTypes from 'prop-types';
import '../../src/assets/css/chip/chip.css';
import { Box } from '@mui/material';

const Chip = (props) => {
  const {
    children,
    disabled,
    className,
    variant,
    color,
    size,
    label,
    startIcon,
    endIcon,
    onClick,
    ...rest
  } = props || {};

  // Determine the variant, color, and size classes
  const variantClass = variant ? `chip-${variant}` : '';
  const colorClass = color ? `chip-${color}` : '';
  const sizeClass = size ? `chip-${size}` : 'chip-medium'; // Default to medium size

  // Handle disabled state for outlined and default chips
  const disabledClass = disabled ? 'customChip-disabled' : '';
  const outlinedDisabledClass = disabled && variant === 'outlined' ? 'customChip-outlined-disabled' : '';

  return (
    <Box
      className={`customChip ${variantClass} ${colorClass} ${sizeClass} ${disabledClass} ${outlinedDisabledClass} ${className}`}
      onClick={disabled ? undefined : onClick} // Disable click when disabled
      {...rest}
    >
      {startIcon && <span className="chip-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="chip-icon">{endIcon}</span>}
    </Box>
  );
};

Chip.propTypes = {
  variant: PropTypes.oneOf(['contained', 'text', 'outlined', 'tonal', 'iconLabel']),
  color: PropTypes.oneOf(['primary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string,
  disabled: PropTypes.bool, // Include disabled prop type
};

export default Chip;
