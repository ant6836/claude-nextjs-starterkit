"use client";

import Link from "next/link";
import { Moon, Sun, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code2 className="h-5 w-5" />
          <span>StarterKit</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            홈
          </Link>
          <Link
            href="#components"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            컴포넌트
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="테마 전환"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}
