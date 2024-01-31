import { createPortal } from 'react-dom';
import { useClientMounted } from '../hooks';

interface ClientPortalProps {
  children: React.ReactNode;
  elementId?: string;
}

export const ClientPortal = ({ children, elementId = 'root-modal' }: ClientPortalProps) => {
  const { isMounted } = useClientMounted();

  if (!isMounted) {
    return null;
  }

  return createPortal(children, document.getElementById(elementId) as HTMLElement);
};
