import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 border-b border-gray-800'>
      <div className='flex items-center gap-2.5 md:gap-6'>
        <a href='/' className='flex items-center gap-1 text-zinc-800'>
          <Image src='/T-Sender.svg' alt='TSender' width={36} height={36} />
        </a>
        <h1 className='font-bold text-white text-2xl hidden md:block'>
          T-Sender
        </h1>
        <a
          href='https://github.com/cyfrin/TSender'
          target='_blank'
          rel='noopener noreferrer'
          className='p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border-2 border-zinc-600 hover:border-zinc-500 cursor-alias hidden md:block'
        >
          <FaGithub className='h-5 w-5 text-white' />
        </a>
      </div>
      <h3 className='italic text-left hidden text-zinc-500 lg:block'>
        The most gas efficient airdrop contract on earth, built in huff 🐎
      </h3>

      <div className='flex items-center gap-4'>
        <ConnectButton />
      </div>
    </header>
  )
}
