import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  fullWidth = true,
  onClick,
  className,
  disabled,
  icon
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105';
  const variants = {
    primary: 'bg-[#1ed760] text-black hover:bg-[#1fdf64]',
    outline: 'border border-gray-500 text-white hover:border-white',
    social: 'bg-transparent border border-[#727272] text-gray-200 hover:border-white',
    link: 'text-[#a7a7a7] hover:text-white underline'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline', 'social', 'link']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node
};

export default Button;
