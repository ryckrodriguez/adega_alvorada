import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="main-container">
      <div className="menu-container">
        <Image
          className="relative"
          src="/cardapio_de_porcoes_e_pasteis.svg"
          alt="Next.js Logo"
          width={375}
          height={750}
          priority
        />
      </div>
    </main>
  )
}
