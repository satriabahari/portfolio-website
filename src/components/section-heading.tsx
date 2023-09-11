import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-4xl md:text-5xl font-semibold text-center text-gray-700 dark:text-gray-300">
      {children}
    </h2>
  );
}
