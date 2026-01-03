export const metadata = {
    title: 'Home Page',
    description: 'This is the home page of our Next.js application.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <header style={{ height: '50px', backgroundColor: 'green', margin: '20px'}}>Here is my Header</header>
                {children}
                <footer style={{ height: '60px', backgroundColor: 'red', margin: '20px' }}>Here is my Footer</footer>
            </body>
        </html>
    );
}