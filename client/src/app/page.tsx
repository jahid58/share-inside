import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Post from '@/components/home/post';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full bg-gray-200 text-black mb-4'>
      <Post />
    </main>
  );
}
