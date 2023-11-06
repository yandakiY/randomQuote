import React from 'react'

interface Props{
    name: string
}

const Header: React.FC<Props> = props => {
  return (
    <nav className='flex justify-between border-b-2 border-stone-300 pb-4'>
        <header className='text-xl sm:text-3xl font-bold underline'>{props.name}</header>

        <ul className='flex items-center gap-6 text-xl pointer'>
            <li className='text-base sm:text-2xl cursor-pointer hover:border-b-2 pb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 hover: duration-300 '>
                <a target='_blank' href="https://yandaki-dev.vercel.app">About me</a>
            </li>
            {/* <li className='cursor-pointer hover:border-b-2 pb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 hover: duration-300 '>
                <a href="">Contacts</a>
            </li> */}
        </ul>
    </nav>
  )
}

export default Header