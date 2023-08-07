import React from 'react';
import { ParagraphProps } from './types';
declare const Paragraph: React.ForwardRefExoticComponent<Omit<ParagraphProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export default Paragraph;
