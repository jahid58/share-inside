import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="text-4xl text-gray-600 font-bold text-center w-screen h-screen mt-32">
      <p>This is share inside website - we will start working very soon</p>
    </main>
  );
}
