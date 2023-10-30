"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ModeToggle'

  
export default function Home() {
  return (
    <>
    <div className='flex flex-col'>
    <ModeToggle/>

    <Button className='p-2 rounded-none text-base font-light bg-slate-800 dark:bg-slate-50'>Click me</Button>
    </div>
    </>
  )
}
