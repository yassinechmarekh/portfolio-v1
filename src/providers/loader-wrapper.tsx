"use client";

import Loader from "@/components/loader";
import React, { useEffect, useState } from "react";

const defaultLoaderTime = 3000; // 3s

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), defaultLoaderTime);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader loaderTime={defaultLoaderTime} />;
  }

  return <>{children}</>;
};

export default LoaderWrapper;
