import type { Metadata } from "next";
import ReservationContent from "@/components/ReservationContent";

export const metadata: Metadata = {
  title: "Réserver une table | Brasserie Le Ste Foy",
  description:
    "Réservez votre table en terrasse ou en salle à la Brasserie Le Ste Foy, Sainte-Foy-lès-Lyon.",
};

export default function ReservationPage() {
  return (
    <main>
      <ReservationContent />
    </main>
  );
}
