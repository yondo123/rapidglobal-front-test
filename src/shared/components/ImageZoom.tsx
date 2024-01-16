'use client';

import { CSSProperties, useRef, useState } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { Hidden } from '@layouts/mixins/Hidden';

interface ZoomProps {
  scale?: number;
  backgroundColor?: string;
  animationDuration?: number;
}

export const ImageZoom = (props: ImageProps & ZoomProps) => {
  const { scale = 1, animationDuration = 300, ...imageProps } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const [hovered, setMouseOvered] = useState(false);

  const handleZoomOut = () => {
    if (containerRef.current && hovered) {
      containerRef.current.style.scale = '1';
      containerRef.current.style.backgroundImage = 'none';
      containerRef.current.style.width = '100%';
      containerRef.current.style.height = '100%';
      setMouseOvered(false);
    }
  };
  const handleImageZoom = () => {
    if (!containerRef.current || hovered) {
      return;
    }

    containerRef.current.style.scale = `${scale}`;
    containerRef.current.style.objectFit = 'contain';
    containerRef.current.style.backgroundImage = `url(${imageProps.src})`;
    containerRef.current.style.backgroundSize = 'cover';
    containerRef.current.style.width = '100dvw';
    containerRef.current.style.height = '100dvh';

    setMouseOvered(true);
  };

  const styles: CSSProperties = {
    display: 'inline-block',
    transition: `transform ${animationDuration}ms`,
    position: hovered ? 'fixed' : 'relative',
    top: hovered ? '0' : 'none',
    left: hovered ? '0' : 'none',
    bottom: hovered ? '0' : 'none',
    right: hovered ? '0' : 'none',
    zIndex: hovered ? 3000 : 0,
    backgroundColor: hovered ? 'rgba(0,0,0,.3)' : 'transparent'
  };

  return (
    <div
      style={styles}
      ref={containerRef}
      onMouseOver={handleImageZoom}
      onFocus={() => {}}
      onMouseLeave={handleZoomOut}
    >
      {hovered ? (
        <Hidden>
          <Image {...imageProps} />
        </Hidden>
      ) : (
        <Image {...imageProps} />
      )}
    </div>
  );
};
