import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-200">
      <div className="py-12 px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 ">
              <Image
                src="/jay-logo.PNG"
                height={50}
                width={50}
                alt="Jay Solutions"
              />
              <span className="text-orange-500 text-3xl font-semibold">
                Jay's Solutions
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Jay's Facilities Solutions and Projects: Your Trusted Partner in
              Facility Management.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service/general"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  General Maintainance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/plumbing"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hvac"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  HVAC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Electrical
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                2154 Albany Ave
                <br />
                Gqeberha, Bethelsdorp 6059
              </li>
              <li>
                <a
                  href="tel:+2445656898"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  (024) 456 5698
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jaysolutions.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  info@maintenancepro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Duwayne. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
