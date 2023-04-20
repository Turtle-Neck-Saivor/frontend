import React from 'react';
import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';

export default {
  title: 'common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStoryFn<typeof Header> = () => <Header />;

export const Default = () => <Header />;
