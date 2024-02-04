'use client'

type errorType = {
    "name": string,
    "message": string,
    "status": string,
}

import { signInUser, signUpUser } from "@/app/actions/userActions";
import Link from "next/link";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/components/ui/use-toast"
import { ColInput } from '@/components/ColumInput';

export default function SignupForm() {
    const { toast } = useToast()
    const [state, formAction] = useFormState(signUpUser, null);
    const createToast = () => {
        if (state != null) {
            const obj = JSON.parse(state) as errorType;
            console.log('state: ' + state)

            if (obj.status != '200') return toast({
                title: obj.name,
                description: obj.message,
                className: 'bg-red-500 text-white animate-in',
                variant: 'destructive',
            })
        }

        // if (state.includes('AuthApiError')) {
        //     return toast({
        //         title: 'CREATE ACCOUNT ERROR OCCURRED',
        //         description: obj.name + ' - ' + obj.message,
        //         className: 'bg-red-500 text-white animate-in',
        //         variant: 'destructive',
        //     })
        // }

        return toast({
            title: 'ACCOUNT CREATED',
            description: "Congrats, you've created your account",
            className: 'bg-green-500 text-white',
        })
    }

    return (
        <form
            action={(formData) => {
                formAction(formData);
                createToast()
            }}
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
            formAction={(formData) => {
                formAction(formData);
                createToast()
            }}
            disabled={isLoading}
            className='w-full'>
            {isLoading ? 'Loading' : 'Create account'}
        </Button>
    }

}