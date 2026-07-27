import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  clean = false,
  ...props
}) => {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 ${
        clean ? "" : "max-w-[1440px]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
