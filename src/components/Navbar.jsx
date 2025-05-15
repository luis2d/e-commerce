import Link from 'next/link';

export default function Navbar({plants}) {
  return (
    <nav className="bg-emerald-600 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-90 transition">
          🌿 <span className="tracking-wide">PlantShop</span>
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/plants" className="hover:text-emerald-200 transition">Plantas</Link>
          <Link href="/cart" className="hover:text-emerald-200 transition">🛒 Carrito</Link>
        </div>
      </div>
    </nav>
  );
}