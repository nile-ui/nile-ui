import React from 'react';
import { TitlePropsWithChildren } from './types';
declare const Title: React.ForwardRefExoticComponent<Omit<TitlePropsWithChildren, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export default Title;
