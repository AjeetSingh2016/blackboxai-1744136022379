import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { DocumentTextIcon, PencilSquareIcon, CalculatorIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const router = useRouter();

  const navItems = [
    { href: '/proposal-generator', label: 'Proposal Generator', icon: DocumentTextIcon },
    { href: '/contract-signing', label: 'Contract Signing', icon: PencilSquareIcon },
    { href: '/invoice-generator', label: 'Invoice Generator', icon: CalculatorIcon },
    { href: '/nda-generator', label: 'NDA Generator', icon: ShieldCheckIcon },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SaaS Tools
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
