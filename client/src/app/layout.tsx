import Nav from '@/components/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <nav className=''>
          <Nav />
        </nav>
        <main className='bg-white w-full h-full'>{children}</main>
      </body>
    </html>
  );
}
