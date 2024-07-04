import { showAISection } from "./flags";
import {
  MagnifyingGlassIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

export async function TopLeft() {
  const showAI = await showAISection();
  return (
    <>
      {showAI ? (
        <button
          type="button"
          className="py-3 px-4 gap-2 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <ChatBubbleBottomCenterTextIcon className="size-6 text-white" />
          Launch AI
        </button>
      ) : (
        <div className="relative">
          <input
            type="email"
            className="peer py-3 gap-2 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Enter name"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <MagnifyingGlassIcon className="size-6 text-blue-500" />
          </div>
        </div>
      )}
    </>
  );
}
