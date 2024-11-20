"use client";
import { useState } from "react"; //Import useState
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Wrench, Menu, X } from "lucide-react"; //Added X icon fro close

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className=" flex justify-between h-16 items-center mx-12 ">
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6" />
          <span className="font-bold">MaintenancePro</span>
        </Link>

        {/*Burger ICon */}
        <button
          className="md:hidden flex items-center justify-center "
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/*Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary ",
                pathname === route.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button>Get a Quote</Button>
        </nav>
      </div>

      {/**Mobile Nav */}
      {menuOpen && (
        <nav>
          <ul>
            {routes.map((route) => (
              <li className="text-center p-5 hover:underline">
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary ",
                    pathname === route.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {" "}
                  {route.label}
                </Link>
              </li>
            ))}
            <li className="text-center p-2 ">
              <Button onClick={toggleMenu}>Get a Quote</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
