import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Indo Seller Tools
        </Link>

        <div className="flex gap-8 text-sm font-medium">

          <Link href="/">
            Home
          </Link>

          <Link href="/#tools">
            Tools
          </Link>
          
          <Link href="/blog">
            Blog
          </Link>


        </div>

      </div>

    </nav>
  );
}