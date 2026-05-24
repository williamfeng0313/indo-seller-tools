import Link from "next/link";
import ToolHero from "@/components/ToolHero";

export default function CalculatorLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back to Home
      </Link>

      <ToolHero
        title={title}
        description={description}
      />

      {children}

    </main>
  );
}