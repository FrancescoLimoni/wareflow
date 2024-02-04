'use client'

import { signInUser } from "@/app/actions/userActions";
import Link from "next/link";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/components/ui/use-toast"

export default function LoginForm() {
    const { toast } = useToast()
    const [state, formAction] = useFormState(signInUser, null);
    const createToast = () => {
        let title = '';
        let description = '';
        type errorType = {
            "name": string,
            "message": string,
            "status": string,
        }


        if (state == null) return
        const isString = typeof state === 'string';

        if (isString && state.includes('AuthApiError')) {
            const obj = JSON.parse(state) as errorType;
            title = 'LOGIN ERROR OCCURRED';
            description = obj.name + ' - ' + obj.message;

            return toast({
                title: title,
                description: description,
                className: 'bg-red-500 text-white animate-in',
                variant: 'destructive',

            })
        } else {
            const stateString = JSON.stringify(state)
            const obj = JSON.parse(stateString);
            title = 'Success';
            description = 'You have successfully logged in';
            return toast({
                title: title,
                description: description,
                className: 'bg-green-500 text-white',

            })
        }



    }


    return (
        <form
            action={(formData) => {
                formAction(formData);
                createToast()
            }}
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
            formAction={(formData) => {
                formAction(formData);
                createToast()
            }}
            disabled={isLoading}
            className='w-full'>
            {isLoading ? 'Loading' : 'Log in'}
        </Button>
    }

}