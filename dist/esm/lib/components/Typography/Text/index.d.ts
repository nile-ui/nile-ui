import React from 'react';
import { TextProps } from './types';
declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export default Text;
