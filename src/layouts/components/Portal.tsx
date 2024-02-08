'use client';

import { createPortal } from 'react-dom';

type PortalProps = {
  children?: React.ReactNode;
  id?: string;
};

export const Portal = (props: PortalProps) => {
  const container = globalThis?.document?.body;
  return container ? createPortal(<div {...props} />, container) : null;
};
