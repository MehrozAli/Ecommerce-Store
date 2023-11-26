import React from "react";

export const Container = ({ children }: React.PropsWithChildren) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};
