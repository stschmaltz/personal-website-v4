import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type NavItem =
  | { label: string; href: string; type: "hash" }
  | { label: string; to: string; type: "route" };

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", type: "hash" },
  { label: "Experience", href: "#experience", type: "hash" },
  { label: "Projects", href: "#projects", type: "hash" },
  { label: "Resume", to: "/resume", type: "route" },
  { label: "Personal", to: "/personal", type: "route" },
  { label: "Contact", href: "#contact", type: "hash" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashClick = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-alpine-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-moonlight hover:text-frost transition-colors"
        >
          Shane Schmaltz
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
            item.type === "hash" ? (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleHashClick(item.href)}
                  className="text-sm font-medium text-silver transition-colors hover:text-frost"
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-sm font-medium transition-colors hover:text-frost ${
                    location.pathname === item.to ? "text-frost" : "text-silver"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-moonlight transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-moonlight transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-moonlight transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-forest-surface bg-alpine-black/95 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) =>
              item.type === "hash" ? (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleHashClick(item.href)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-silver transition-colors hover:bg-forest-surface hover:text-frost"
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-forest-surface hover:text-frost ${
                      location.pathname === item.to ? "text-frost" : "text-silver"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
