"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans px-0 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 text-foreground">
          Professional Experience
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          My journey in project management and professional development
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-2 md:left-3 rounded-full bg-background flex items-center justify-center border-2 border-border">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-muted border border-border p-1.5 md:p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 lg:text-4xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 md:pl-4 pr-2 md:pr-4 w-full">
              <h3 className="md:hidden block text-xl md:text-2xl mb-3 md:mb-4 text-left font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
