import React from 'react';

const Button = ({
  type = 'primary',
  label,
  onClick,
  cursor = 'pointer',
  className = '',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  icon = null,
  iconPosition = 'right',
  isLoading = false,
  htmlType = 'button',
  ariaLabel,
}) => {
  // Shared button styles
  const baseStyles = `font-semibold rounded-lg transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-${cursor}`;

  // Size variations with improved padding and text sizes
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg',
  };

  // Width variation
  const widthStyles = fullWidth ? 'w-full' : '';

  // Disabled and loading states with improved visual feedback
  const disabledStyles = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'hover:opacity-90 active:scale-98 hover:shadow-md';
  const loadingStyles = isLoading ? 'relative !text-transparent' : '';

  // Get button style based on type with improved color contrast and interactions
  const getButtonByType = () => {
    switch (type) {
      case 'primary':
        return `bg-primary text-white shadow-sm hover:bg-primary-dark ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case 'secondary':
        return `bg-secondary text-white shadow-sm hover:bg-secondary-dark ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case 'outline':
        return `bg-transparent text-primary border-2 border-primary hover:bg-primary/5 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case 'text':
        return `bg-transparent text-primary hover:bg-primary/5 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case 'white':
        return `bg-white text-gray-900 shadow-sm hover:bg-gray-50 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case 'black':
        return `bg-white text-gray-900 border-2 border-gray-900 shadow-sm hover:bg-gray-50 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      default:
        return `bg-primary text-white shadow-sm hover:bg-primary-dark ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
    }
  };

  // Improved loading spinner with smoother animation
  const LoadingSpinner = () => (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );

  return (
    <button
      type={htmlType}
      className={`${baseStyles} ${getButtonByType()}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel || label}
      aria-busy={isLoading}
      role="button"
    >
      {iconPosition === 'left' && icon && <span className="mr-2 inline-flex">{icon}</span>}
      <span className="text-nowrap">{label}</span>
      {iconPosition === 'right' && icon && <span className="ml-2 inline-flex">{icon}</span>}
      {isLoading && <LoadingSpinner />}
    </button>
  );
};

export default Button;
