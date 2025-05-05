import UserFromStorage from "@/components/userFromStorage/UserFromStorage";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserFromStorage>{children}</UserFromStorage>;
}
