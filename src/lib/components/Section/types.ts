import React from "react";
import { TitleProps } from "../Typography/Title/types";

export type SectionComponentProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  title?: string | React.ReactElement
  titleProps?: TitleProps
  titleRef?: React.Ref<HTMLHeadingElement>
  wrapTitleWithContainer?: boolean
}

export type SectionProps = Omit<React.DetailedHTMLProps<
React.HTMLAttributes<HTMLElement>,
HTMLElement
>, 'title'> & SectionComponentProps;
