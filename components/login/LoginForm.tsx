'use client'

import { signInUser } from "@/app/actions/userActions";
import Link from "next/link";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/components/ui/use-toast"
import { AuthError } from "@supabase/supabase-js";

export default function LoginForm() {
    const { toast } = useToast()
    const ErrorToast = (error: AuthError) => {
        return toast({
            title: `${error.message.toUpperCase()} - code: ${error.status}`,
            description: `${error.cause}`,
            className: 'bg-red-500 text-white animate-in',
            variant: 'destructive',

        });
    }
    const SuccessToast = () => {
        return toast({
            title: 'Welcome back!',
            description: 'You are now logged in',
            className: 'bg-green-500 text-white animate-in',
            variant: 'default',
        });
    }

    return (
        <form
            action={onSubmit}
            className='col h-full w-full px-10 space-y-6 items-center justify-center'>
            <div className='col space-y-1 w-full'>
                <label htmlFor='email'>{'Email'}</label>
                <input
                    type='email'
                    name='email'
                    placeholder='example@email.com'
                    className='border-b border-b-black p-2'
                    required={true}
                />
            </div>
            <div className='col space-y-1 w-full items-end'>
                <label htmlFor='password' className='w-full' >{'Password'}</label>
                <input
                    type='password'
                    name='password'
                    placeholder='**********'
                    className='w-full border-b border-b-black p-2'
                    required={true}
                />
                <Link href={''} className='text-sm font-medium p-2 opacity-50'>{'Forgot password?'}</Link>
            </div>
            <LoginButton />
            <Button variant={'outline'} className='w-full'>{'Login with google'}</Button>
            <Toaster />

            <div className='h-[1.6px] bg-slate-200 w-full' />
            <label className='text-center font-light pb-10'>{"Don't have an account yet?"}
                <span className='text-sm font-medium ml-2 ' >
                    <Link href={'/signup'} >{'Create Account'}</Link>
                </span>
            </label>
        </form >
    )


    // FUNCTIONS
    function LoginButton() {
        const data = useFormStatus()
        const isLoading = data.pending;

        return <Button
            disabled={isLoading}
            className='w-full'>
            {isLoading ? 'Loading' : 'Log in'}
        </Button>
    }

    async function onSubmit(data: FormData) {
        const email = data.get("email") as string;
        const password = data.get("password") as string;
        const resp = await signInUser(email, password);

        if (resp as AuthError) return ErrorToast(resp);


        console.log(resp);
        SuccessToast();
    }
}


