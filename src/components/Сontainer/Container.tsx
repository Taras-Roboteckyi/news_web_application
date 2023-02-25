import * as React from 'react';

import { Div } from './Container.styled';

type ContainerProps = {
  children: JSX.Element;
};

export const Container = ({ children }: ContainerProps) => {
  return <Div>{children}</Div>;
};
