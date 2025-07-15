"use client";

import { RecoilRoot } from "recoil";

export const provider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
