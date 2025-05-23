import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-100 text-gray-900 font-poppins" >
        <Navbar />
        <main className="max-w-6xl mx-auto mt-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
