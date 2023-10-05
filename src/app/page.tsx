"use client"

import Image from 'next/image'
import RecipeNavigator from './components/RecipeNavigator/RecipeNavigator';

export default function Home() {
  const navigator = new RecipeNavigator()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-xl top-12 mb-1 flex w-full justify-center">
        Meet Sue!
      </p>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/sue.png"
          alt="Sue Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <p className="text-xl object-center-top flex w-full justify-center">
        Your voice-activated personal robo-sous-chef  
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  )
}
