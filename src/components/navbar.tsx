"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Drones", href: "/drones" },
    { label: "Technical Department", href: "/technical-department" },
    { label: "About System", href: "/about-system" },
  ];

  return (
    <nav className="flex gap-6 justify-center items-center py-4">
      {navItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
            <Link key={item.href} href={item.href}>
                <div
                    className={`rounded-xl px-8 py-3 font-semibold text-black shadow-md cursor-pointer transition ${isActive ? "bg-gradient-to-br from-blue-400/80 to-blue-600/80 text-white shadow-lg scale-105 ring-2 ring-blue-300/60" : "bg-white/80 hover:bg-white/90"}`}
                >
                    {item.label}
                </div>
            </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;