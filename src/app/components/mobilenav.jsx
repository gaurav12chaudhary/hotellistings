// "use client"

// import React, { useState } from 'react'
// import Link from 'next/link'

// export default function Mobile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <button
//               className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//                 <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
//               </svg>
//             </button>
//             <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
//               <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
//                 <li>
//                   <Link href="/" className="block px-4 py-1 md:p-2 lg:px-4 text-gray-600 hover:text-gray-900">HOME</Link>
//                 </li>
//                 <li>
//                   <Link href="/how-it-works" className="block px-4 py-1 md:p-2 lg:px-4 text-gray-600 hover:text-gray-900">HOW IT WORKS</Link>
//                 </li>
//                 <li>
//                   <Link href="/explore" className="block px-4 py-1 md:p-2 lg:px-4 text-gray-600 hover:text-gray-900">EXPLORE</Link>
//                 </li>
//                 <li>
//                   <Link href="/review" className="block px-4 py-1 md:p-2 lg:px-4 text-gray-600 hover:text-gray-900">REVIEW</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="flex items-center">
//             <Link href="/" className="text-xl font-bold">
//               List<span className="text-red-500">Race</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

import Overlay from './overlay'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Overlay triggerText="Open Custom Overlay">
        <h2 className="text-2xl font-bold mb-4">Custom Overlay Content</h2>
        <p className="mb-4">This is your custom overlay content. You can put anything you want here!</p>
        <img src="/placeholder.svg?height=100&width=200" alt="Placeholder image" className="w-full rounded-lg" />
      </Overlay>
    </div>
  )
}