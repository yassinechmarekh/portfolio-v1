import React from "react";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-800/50 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                aria-label={link.name}
                className="text-gray-500 dark:text-gray-500 transition-all duration-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110"
              >
                <link.icon />
              </Link>
            ))}
          </div>

          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Yassine Chmarekh — All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
