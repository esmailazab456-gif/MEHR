import Link from 'next/link';

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-content">
      <strong>MEHR</strong>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
