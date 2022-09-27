import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <Link href="/">
            <a className="text-decoration-none">Home</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">
            <a className="text-decoration-none">
              Services <FaAngleDown />{" "}
            </a>
          </Link>
          <ul className="axil-submenu">
            <li>
              <Link href="/website-design-and-development">
                <a className="text-decoration-none">Web Design & Development</a>
              </Link>
            </li>
            <li>
              <Link href= "/digital-marketing">
                <a className="text-decoration-none">Digital Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/search-engine-optimization">
                <a className="text-decoration-none">Search Engine Optimization</a>
              </Link>
            </li>
            <li>
              <Link href= "/graphic-design">
                <a className="text-decoration-none">Graphic/Print Design</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-decoration-none">Accounting Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="/logo-and-branding">
                <a className='text-decoration-none'>Logo & Branding</a>
              </Link>
            </li>
            <li>
              <Link href="/pay-per-click">
                <a className='text-decoration-none'>Pay per Click</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className='text-decoration-none'>Hosting</a>
              </Link>
            </li>
            <li>
              <Link href="/content-writing">
                <a className='text-decoration-none'>Content Writing</a>
              </Link>
            </li>
            <li>
              <Link href="/web-audit-report">
                <a className='text-decoration-none'>Web Audit Report</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className='text-decoration-none'>Online Business Consulting</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">
            <a className="text-decoration-none">About Us </a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a className="text-decoration-none">Blog </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-decoration-none">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
