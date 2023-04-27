import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaWhatsapp } from "react-icons/fa";

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
      <div id="wpp-div-btn">
        <a id="wpp-btn" href="https://wa.me/5511993904369" target="_blank">
          <FaWhatsapp/>
        </a>
      </div>
    </main>
  )
}
