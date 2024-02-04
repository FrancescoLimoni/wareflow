import Image from 'next/image'
import image from '@/public/warehouse2.png'
import astrocode_logo from '@/public/astrocode_logo.png'
import { Audiowide } from 'next/font/google'
import SignupForm from '@/components/signup/SignupForm'
import { ArrowLeft } from 'lucide-react'
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

export default function SignUpPage() {
    return <main className='row h-screen w-screen overflow-hidden'>
        <Image src={image} alt={'background image'} className='w-[56%] h-full flex' style={{ "objectFit": "cover" }} />
        <div className='col w-[44%] p-6 bg-background space-y-8 animate-in'>
            <div className='col'>
                <h1 className={audiowide.className}>Create account</h1>
                <p>Sign up now and unlock the power of Wareflow!</p>
            </div>
            <SignupForm />
            <div className='row w-full justify-center'>

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
        </div>

    </main>
}