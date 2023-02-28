import { useEffect, useRef } from 'react';

function Blob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div id='blob' ref={blobRef} style={{ pointerEvents: 'none' }}></div>;
}

export default Blob;


/* 
import { useEffect, useRef } from 'react';
import { intersects } from '@mapbox/point-geometry';
import mountainsnow from '../components/mountainsnow.jpeg';

function Blober() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const background = document.getElementById('background');
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );

      // Check if blob is intersecting with background
      const isIntersecting = blob.getBoundingClientRect().intersects(background.getBoundingClientRect());
      if (isIntersecting) {
        document.body.style.backgroundImage = `url(${mountainsnow})`;
        const { left, top } = blob.getBoundingClientRect();
        document.body.style.backgroundPosition = `${left}px ${top}px`;
      } else {
        document.body.style.backgroundImage = `none`;
        document.body.style.backgroundColor = `white`;
      }
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div id='blob' ref={blobRef} style={{ pointerEvents: 'none' }}></div>;
}

export default Blober; */