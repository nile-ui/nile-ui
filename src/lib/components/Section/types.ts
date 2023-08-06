import React from "react";
import { TitleProps } from "../Typography/Title/types";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  title?: string | React.ReactElement
  titleProps?: TitleProps
  titleRef?: React.Ref<HTMLHeadingElement>
  wrapTitleWithContainer?: boolean
}
