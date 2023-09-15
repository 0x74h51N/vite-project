import React, { ReactNode } from "react";

interface Props {
  children: String;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
