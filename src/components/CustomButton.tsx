import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  logMessage: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ logMessage, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(logMessage);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
