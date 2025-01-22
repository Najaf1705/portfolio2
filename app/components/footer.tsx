import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="px-4 mt-20 text-center text-white dark:text-black bg-black dark:bg-gray-400">
        <small className="mb-2 block text-xs">
          &copy; {currentYear} Najaf Shaikh. All rights reserved.
        </small>
        {/* <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p> */}
      </footer>
    </div>
  );
}
