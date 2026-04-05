export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Next.js StarterKit. Built with Next.js,
        TailwindCSS &amp; shadcn/ui.
      </div>
    </footer>
  );
}
