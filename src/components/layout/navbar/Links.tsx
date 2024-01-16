import Link from 'next/link';
import React from 'react';

interface NavLink {
  title: string;
  path: string;
}

const Links = () => {
  const links: NavLink[] = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ];

  return (
    <div>
      {links.map((navLink) => (
        <Link key={navLink.path} href={navLink.path}>
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
