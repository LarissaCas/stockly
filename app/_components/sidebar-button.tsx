"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SideBarButtonProps {
  children: React.ReactNode;
  href: string;
}

const SidebarButton = ({ children, href }: SideBarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      className="justify-start gap-2"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
