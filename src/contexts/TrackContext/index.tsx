'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

import type { TrackContextTypes, TrackProviderProps } from './index.types';

const TrackContext = createContext<TrackContextTypes | undefined>(undefined);

const TrackProvider = ({ children }: TrackProviderProps) => {
  const [toastId, setToastId] = useState<string | null>(null);

  const trackProviderValue = useMemo(
    () => ({
      toastId,
      setToastId,
    }),
    [toastId, setToastId],
  );

  return (
    <TrackContext.Provider value={trackProviderValue}>
      {children}
    </TrackContext.Provider>
  );
};

const useTrackContext = () => {
  const context = useContext(TrackContext);

  if (!context) {
    throw new Error('"useLayoutContext" must be used within "LayoutProvider"');
  }

  return context;
};

export { TrackContext, TrackProvider, useTrackContext };
