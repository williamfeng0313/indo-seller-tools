import Link from "next/link";

export const metadata = {
  title: "Shopee vs TikTok Shop",
  description:
    "Compare Shopee and TikTok Shop for Indonesian ecommerce sellers.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">← Back Home</Link>

      <article className="prose prose-lg max-w-none mt-8">
        <h1>Shopee vs TikTok Shop</h1>

        <p>
          Shopee and TikTok Shop are Indonesia's largest ecommerce platforms.
        </p>

        <h2>Shopee Advantages</h2>

        <ul>
          <li>Large customer base</li>
          <li>Strong search traffic</li>
          <li>Stable logistics</li>
        </ul>

        <h2>TikTok Shop Advantages</h2>

        <ul>
          <li>Viral traffic</li>
          <li>Live selling</li>
          <li>Creator ecosystem</li>
        </ul>

        <h2>Which Is Better?</h2>

        <p>
          Most successful sellers use both platforms.
        </p>
      </article>
    </main>
  );
}