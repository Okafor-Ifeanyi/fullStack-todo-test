// NavButton.tsx
import type { JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  icon: JSX.Element;
  label: string;
}

const NavButton = ({ to, icon, label }: NavButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-indigo-600 hover:text-white text-md font-medium ${
        isActive ? 'bg-indigo-600 text-white' : 'text-white'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavButton;

