import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { WishlistProvider } from "@/context/WishlistContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JobHub - Find Your Dream Job",
  description: "Discover and apply for your dream job with JobHub",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <WishlistProvider>
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </WishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'