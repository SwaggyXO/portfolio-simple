import React from "react";
import Link from "next/link";
import Layout from "./layout";

const Footer = () => {
  const url = `mailto:devashish.soni05@gmail.com`;
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:py-6 lg:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          <Link href="/" className="underline underline-offset-2">
            by Devashish
          </Link>
        </div>
        <Link
          href={url}
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Get in touch!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
