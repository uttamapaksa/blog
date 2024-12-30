import React from "react";
import Link from "next/link";
import { playgroundNodes } from "@/lib/utils/playground";

export function AddressBar({ segments }: { segments: string[] }) {
  
  return (
    <div className="flex items-center gap-x-2 sm:py-3">
      <div className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-wrap gap-x-1 text-sm font-medium">
        <span className=" px-2 py-0.5 text-gray-400">Playground</span>
        <span>/</span>
        {segments.map((segment) => {
          const path = segments.slice(0, segments.indexOf(segment)+1).join('/')
          return (
            <React.Fragment key={segment}>
              <Link href={`/playground/${path}`} className="rounded-full px-1.5 py-0.5">
                {playgroundNodes[segment].title}
              </Link>
              <span>/</span>
          </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
