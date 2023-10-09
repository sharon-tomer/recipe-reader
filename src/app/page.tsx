"use client"

import Image from 'next/image'
import mockData from '../components/Recipe/mock.json'
import RecipeList from '@/components/RecipeList/RecipeList';

export default function Home() {
  const recipies = mockData.recipes;
  return (
    <main>
      <p>
        Meet Sue!
      </p>
      <div>
        <Image
          src="/sue.png"
          alt="Sue Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <p>
        Your voice-activated personal robo-sous-chef  
      </p>

      <div>
        <RecipeList recipies={recipies}/>
      </div>
    </main>
  )
}
