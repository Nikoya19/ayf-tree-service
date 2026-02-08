import { EmergencyBanner } from "@/components/emergency-banner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EmergencyBanner />
      {children}
    </>
  );
}
