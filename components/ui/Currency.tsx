"use client";

import React, { useEffect, useState } from "react";
import { formatter } from "@/lib/utils";

interface Props {
  value: string;
}

export const Currency = ({ value }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
