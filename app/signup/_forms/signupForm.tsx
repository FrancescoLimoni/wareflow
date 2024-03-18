'use client'

type errorType = {
    "name": string,
    "message": string,
    "status": string,
}

import { signUpUser } from "@/app/actions/userActions";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Toaster } from "../../../../components/ui/toaster";
import { useToast } from "@/components/ui/use-toast"
import { ColInput } from '@/components/ColumInput';
import { AuthError } from "@supabase/supabase-js";

export default function SignupForm() {
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
            <div className='row space-x-6 w-full'>
                <ColInput type={'string'} label={'Firstname'} name={'firstname'} placeholder={'Firstname'} isRequired={true} />
                <ColInput type={'string'} label={'Lastname'} name={'lastname'} placeholder={'Lastname'} isRequired={true} />
            </div>
            <div className='row space-x-6 w-full'>
                <ColInput type={'phone'} label={'Phone number'} name={'phone'} placeholder={'xxx - xxx xxxx'} />
                <ColInput type={'email'} label={'Email'} name={'email'} placeholder={'your@email.com'} isRequired={true} />
            </div>
            <ColInput type={'password'} label={'Password'} name={'password'} placeholder={'Password'} isRequired={true} />
            <ColInput type={'password'} label={'Confirm password'} name={'confirm-password'} placeholder={'********'} isRequired={true} />
            <CreateAccountButton />
            <Toaster />

            <div className='h-[1.6px] bg-slate-200 w-full' />
            <label className='text-center font-light'>{"Do you have an account already"}
                <span className='text-sm font-medium ml-2 ' >
                    <Link href={'/'} >{'Log in'}</Link>
                </span>
            </label>
        </form >
    )

    // FUNCTIONS
    function CreateAccountButton() {
        const data = useFormStatus()
        const isLoading = data.pending;

        return <Button
            disabled={isLoading}
            className='w-full'>
            {isLoading ? 'Loading...' : 'Create account'}
        </Button>
    }

    async function onSubmit(data: FormData) {
        const resp = await signUpUser(data)

        if (resp as AuthError) return ErrorToast(resp as AuthError);

        return SuccessToast();
    }

}