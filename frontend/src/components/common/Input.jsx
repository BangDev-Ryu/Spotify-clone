import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  helperText
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-bold text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3.5 bg-[#121212] 
            text-white placeholder-[#a7a7a7]
            rounded border 
            ${error ? 'border-red-500' : isFocused ? 'border-white' : 'border-[#727272]'}
            focus:outline-none
          `}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-2 text-sm text-[#a7a7a7]">{helperText}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string
};

export default Input;
