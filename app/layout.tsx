import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Waves from "./components/Waves/Waves"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} antialiased relative min-h-screen`}>
        <div className="absolute inset-0 -z-10">
          <Waves
            lineColor="rgba(255, 255, 255)"
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl text-sm leading-relaxed px-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
