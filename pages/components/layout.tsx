interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative max-w-md min-h-screen  m-auto bg-slate-500">
      <main className="p-5">{children}</main>
    </div>
  );
}
