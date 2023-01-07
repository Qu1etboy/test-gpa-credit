import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-3 py-5 bg-purple-300 print:hidden">
      <ul className="flex container mx-auto justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-purple-900 hover:underline"
        >
          Test GPA and Credit
        </Link>
        <Link href="/log" className="text-lg text-purple-900 hover:underline">
          Test Log
        </Link>
      </ul>
    </nav>
  );
}
