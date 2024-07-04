import { Suspense } from "react";

export function ComponentsWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
