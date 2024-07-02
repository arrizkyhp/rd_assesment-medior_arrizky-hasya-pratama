import type { ReactNode } from 'react';
import type React from 'react';

export interface TrackContextTypes {
  toastId: string | null;
  setToastId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface TrackProviderProps {
  children: ReactNode;
}
