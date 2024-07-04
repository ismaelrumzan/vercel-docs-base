import { TopLeft } from "../components/top-left-section";
import Image from "next/image";
import {
  UserIcon,
  DocumentChartBarIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <div id="application-sidebar" className="w-[260px]">
        <nav className="p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
            <li>
              <Suspense>
                <TopLeft />
              </Suspense>
            </li>
            <li>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Getting Started
            </li>
            <li>
              <UserIcon className="size-6 text-black" />
              Accounts
            </li>
            <li>
              <DocumentChartBarIcon className="size-6 text-black" />
              Analytics
            </li>
            <li>
              <CubeTransparentIcon className="size-6 text-black" />
              Attack Challenge Mode
            </li>
            <li>
              <BuildingLibraryIcon className="size-6 text-black" />
              Builds
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full pt-10 px-4 prose">{children}</div>
    </div>
  );
}
