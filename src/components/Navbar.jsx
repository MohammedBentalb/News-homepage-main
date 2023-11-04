import { useEffect, useState } from 'react';
import { closeMenu, logo, openMenu } from '../assets/images/index';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(false);
    });
    window.addEventListener('resize', () => {
      setIsOpen(false);
    });
  }, []);
  return (
    <nav className="flex h-fit w-full max-w-[1440px] items-center justify-between gap-5 py-10 max-sm:py-[5%]">
      <img src={logo} alt="news logo" width={55} height={58} />
      <ul
        className={`sm:links-desk max-sm:links-mobile ${
          isOpen
            ? 'translate-x-0 before:translate-x-[-100]  max-sm:transition-transform max-sm:duration-300 max-sm:ease-out'
            : 'translate-x-[100%] before:opacity-0'
        }`}
      >
        <li className="max-sm:pl-8">
          <a href="/" className="hover:text-soft-red">
            Home
          </a>
        </li>
        <li className="max-sm:pl-8">
          <a href="/" className="hover:text-soft-red">
            News
          </a>
        </li>
        <li className="max-sm:pl-8">
          <a href="/" className="hover:text-soft-red">
            Popular
          </a>
        </li>
        <li className="max-sm:pl-8">
          <a href="/" className="hover:text-soft-red">
            Trending
          </a>
        </li>
        <li className="max-sm:pl-8">
          <a href="/" className="hover:text-soft-red">
            Categories
          </a>
        </li>
      </ul>
      <img
        src={isOpen ? closeMenu : openMenu}
        alt=""
        width={35}
        height={30}
        className="relative z-[9999] sm:hidden"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
    </nav>
  );
}

export default Navbar;
