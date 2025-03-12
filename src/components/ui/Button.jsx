import React from "react";

const Button = ({
  type = "primary",
  label,
  onClick,
  className = "",
  disabled = false,
  fullWidth = false,
  size = "medium",
  icon = null,
  iconPosition = "right",
  isLoading = false,
  htmlType = "button",
  ariaLabel,
}) => {
  // Shared button styles
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center";

  // Size variations
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5",
    large: "px-6 py-3 text-lg",
  };

  // Width variation
  const widthStyles = fullWidth ? "w-full" : "";

  // Disabled state
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:opacity-90 active:scale-95";

  // Loading state
  const loadingStyles = isLoading ? "relative !text-transparent" : "";

  // Get button style based on type
  const getButtonByType = () => {
    switch (type) {
      case "primary":
        return `bg-primary text-white ring-2 ring-primary ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case "secondary":
        return `bg-secondary text-white ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case "outline":
        return `bg-transparent text-primary ring-2 ring-primary hover:bg-primary/10 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      case "text":
        return `bg-transparent text-primary hover:bg-primary/10 ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
      default:
        return `bg-primary text-white ring-2 ring-primary ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${loadingStyles} ${className}`;
    }
  };

  // Loading spinner
  const LoadingSpinner = () => (
    <div
      className={`absolute inset-0 flex items-center justify-center ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="animate-spin h-5 w-5 text-white"
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
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
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
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      {label}
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
      {isLoading && <LoadingSpinner />}
    </button>
  );
};

export default Button;
