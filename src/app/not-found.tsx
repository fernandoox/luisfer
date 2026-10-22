// src/app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 – Page not found",
  robots: { index: false, follow: true },
};

const NotFound: React.FC = () => {
  return (
    <div className="w-full md:w-2/6 mx-auto p-6 min-h-[60vh] flex flex-col justify-center text-gray-500">
      <p className="text-6xl font-bold text-gray-800 dark:text-gray-300 mb-4">
        404
      </p>
      <p className="mb-2 font-medium">
        I&apos;ve shipped a lot of features, but this page isn&apos;t one of
        them.
      </p>
      <p className="mb-6 font-medium">
        It&apos;s not a bug, it&apos;s an undocumented route. Either way, nothing
        lives here.
      </p>
      <Link
        href="/"
        className="font-mono text-gray-800 dark:text-gray-300 font-bold hover:opacity-80"
      >
        $ git checkout home
      </Link>
    </div>
  );
};

export default NotFound;
