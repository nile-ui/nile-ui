import React from 'react';
import { SubtitleProps } from './types';
declare const Subtitle: React.ForwardRefExoticComponent<Omit<SubtitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export default Subtitle;
