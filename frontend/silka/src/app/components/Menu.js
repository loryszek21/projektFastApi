// components/Menu.js
import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-rose-200 w-full p-4">

      <ul className="flex space-x-10 justify-center text-black">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Wejście
          </Link>
        </li>
        <li>
          <Link href="/sub" className="hover:text-gray-400">
            Zakup karnetu
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-gray-400">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
