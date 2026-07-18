export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div data-layout="public">{children}</div>
}
