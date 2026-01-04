import Link from 'next/link';
import './index.css';
export const metadata = {
    title: 'Home Page',
    description: 'This is the home page of our Next.js application.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <header className='bg-indigo-600 py-5 text-2xl my-4 flex justify-between px-4'>
                    Here is my Header
                    <div>
                        <Link href='/' className='ml-4 text-white'>Home</Link>
                        <Link href='/about' className='ml-4 text-white'>About</Link>
                        <Link href='/contact' className='ml-4 text-white'>Contact</Link>
                        <Link href='/blog' className='ml-4 text-white'>Blog</Link>
                    </div>
                    <div>
                        <Link href='/login' className='ml-4 text-white'>Login</Link>
                        <Link href='/register' className='ml-4 text-white'>Register</Link>
                        <Link href='/sign-up' className='ml-4 text-white'>Sign-up</Link>
                    </div>
                </header>
                {children}
                <footer className='bg-yellow-600 py-5 text-2xl my-4'>Here is my Footer</footer>
            </body>
        </html>
    );
}