// Layout bọc ngoài các trang khu vực khách hàng và học viên
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}

