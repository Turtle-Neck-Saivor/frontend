import { SetStateAction } from 'react';

export interface DialogProps {
  title: string;
  description: string;
  handleAgree: () => void;
  setIsDialog: React.Dispatch<React.SetStateAction<boolean>>;
  isDialog: boolean;
}
