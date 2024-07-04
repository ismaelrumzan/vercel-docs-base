import { TopLeft } from "../components/top-left-section";
import Image from "next/image";
import { UserIcon, DocumentChartBarIcon, CubeTransparentIcon, BuildingLibraryIcon
} from "@heroicons/react/24/solid";

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        id="application-sidebar"
        className="hs-overlay w-[260px] fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
      >
        <div className="px-8 pt-4">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../templates/admin/index.html"
            aria-label="Preline"
          >
            <Image src="/vercel.svg" width={150} height={150} alt={"Logo"}/>
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <TopLeft />
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                href="#"
              >
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
              </a>
            </li>
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="#"
              >
                <UserIcon className="size-6 text-black"/>
                Accounts
              </a>
            </li>
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="#"
              >
                <DocumentChartBarIcon className="size-6 text-black"/>
                Analytics
              </a>
            </li>
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="#"
              >
                <CubeTransparentIcon className="size-6 text-black"/>
                Attack Challenge Mode
              </a>
            </li>
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="#"
              >
                <BuildingLibraryIcon className="size-6 text-black"/>
                Builds
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 prose">
        {children}
      </div>
    </>
  );
}
