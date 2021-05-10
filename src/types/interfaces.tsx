import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  stack: [{ id: number; title: string }];
  url: string;
  image: IGatsbyImageData;
}

export interface Stack {
  id: number;
  title: string;
}
