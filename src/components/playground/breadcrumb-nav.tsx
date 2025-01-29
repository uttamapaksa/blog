import { Fragment } from "react";
import Link from "next/link";
import { playgroundNodes, playgroundPaths } from "@/lib/constants/playground";

interface BreadcrumbNavProps {
  segments: string[];
}

export default function BreadcrumbNav({ segments }: BreadcrumbNavProps) {
  
  return (
    <div className="flex flex-wrap gap-x-1 py-3 text-sm font-medium">
      <span className="pr-2 py-0.5 text-gray-400">Playground</span>
      <span>/</span>
      {segments.map((segment) => (
        <Fragment key={segment}>
          <Link href={`/playground/${playgroundPaths[segment]}`} className="rounded-full px-1.5 py-0.5 hover:underline">
            {playgroundNodes[segment].title}
          </Link>
          <span>/</span>
        </Fragment>
      ))}
    </div>
  );
}
