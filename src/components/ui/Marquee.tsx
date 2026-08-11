import React from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className = '',
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] gap-(--gap) ${
        !vertical ? 'flex-row' : 'flex-col'
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around gap-(--gap) ${
              !vertical && !reverse
                ? 'animate-marquee flex-row'
                : vertical && !reverse
                ? 'animate-marquee-vertical flex-col'
                : !vertical && reverse
                ? 'animate-marquee-reverse flex-row'
                : 'animate-marquee-vertical-reverse flex-col'
            } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
