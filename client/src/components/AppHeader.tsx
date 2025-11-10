import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AppHeaderProps {
  isAuthenticated?: boolean;
  userRole?: "intern" | "admin";
  userName?: string;
  onLogout?: () => void;
}

export default function AppHeader({
  isAuthenticated = false,
  userRole,
  userName,
  onLogout,
}: AppHeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/domains", label: "Domains" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 ">
      <div className="mx-auto max-w-7xl ">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex flex-col items-start  rounded-md py-1"
          >
            <h1
              className="font-alkatra text-[#0844a5] text-2xl font-bold leading-tight"
              data-testid="text-logo"
            >
              Cognify Vision.
            </h1>
            <h2 className="text-sm italic text-muted-foreground mt-0.5">
              get hands-on, now.
            </h2>
          </Link>
          <div className="flex flex-row items-center">
            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Button
                    variant={location === link.path ? "ghost" : "ghost"}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      data-testid="button-user-menu"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {userName?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5">
                      <p
                        className="text-sm font-medium"
                        data-testid="text-user-name"
                      >
                        {userName}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-testid="text-user-role"
                      >
                        {userRole}
                      </p>
                    </div>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard">
                      <DropdownMenuItem data-testid="link-dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/profile">
                      <DropdownMenuItem data-testid="link-profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                    </Link>
                    {userRole === "admin" && (
                      <Link href="/admin">
                        <DropdownMenuItem data-testid="link-admin">
                          <Settings className="mr-2 h-4 w-4" />
                          Admin Panel
                        </DropdownMenuItem>
                      </Link>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={onLogout}
                      data-testid="button-logout"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/auth/login" className="hidden sm:inline-flex">
                    <Button variant="ghost" data-testid="link-login">
                      Log In
                    </Button>
                  </Link>
                </>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="border-t py-4 md:hidden"
            data-testid="nav-mobile-menu"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={location === link.path ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              {!isAuthenticated && (
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Log In
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
