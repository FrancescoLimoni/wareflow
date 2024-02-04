import Image from 'next/image'
import image from '@/public/warehouse.png'
import astrocode_logo from '@/public/astrocode_logo.png'
import wareflow_logo from '@/public/wareflow_logo.png'
import { Audiowide } from 'next/font/google'
import LoginForm from '@/components/login/LoginForm'
import Link from 'next/link'

const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Wareflow",
  description: 'Warehouse management system',
};

export default function LoginPage() {
  return <main className='row h-screen w-screen overflow-hidden'>
    <Image src={image} alt={'background image'} className='w-[56%] h-full flex' style={{ "objectFit": "cover" }} />
    <div className='col w-[44%] p-6 bg-background space-y-8 animate-in'>

      {/* LOGIN HEADER */}
      <div className='row w-full h-fit space-x-6 items-center'>
        {/* <Image src={wareflow_logo} alt={'wareflow logo'} layout='fit' className='w-12 h-12' /> */}
        <div className='col'>
          <h1 className={audiowide.className}>Log in</h1>
          <p>If you already have an active account please enter your credential and click on login. Otherwise create a new one and join the community</p>
        </div>
      </div>
      <LoginForm />
      {/* POWER BY */}
      <div className='row space-x-4 items-center w-full justify-center'>
        <label className='font-medium opacity-60'>{'Powered by'}</label>
        <div className='row space-x-2'>
          <Image src={astrocode_logo} alt={'AstroCode logo'} layout='cover' className='w-8' />
          <p>{'AstroCode'}
            <span className='text-xs font-medium'>{' S.R.L'}</span>
          </p>
        </div>
      </div>
    </div>
  </main>
}