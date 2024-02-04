'use server'

import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
import { AuthError } from "@supabase/supabase-js";

const supabase = createClient();

export const signOutUser = async ()=>{
  console.log('Sign Out User')
  const {error} = await supabase.auth.signOut()

  if (error != null) return error
  
  return redirect('/')
}

export const signInUser = async (previousState:any,formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });


  if (error) {
    // Only plain objects can be passed to Client Components from Server Components
    // It must be returned as a plain object
    console.log('Error: ' + JSON.stringify(error))
    return JSON.stringify(error);
  }

  console.log('Data: ' + JSON.stringify(data.user))
  return redirect('/dashboard');
  
};

export const signUpUser = async (previousState:any,formData: FormData) => {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const phone_number = formData.get("phone_number") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirm_password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);

  const { error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      // emailRedirectTo: `${origin}/auth/callback`
    }
  })

  if (error) return JSON.stringify(error);

console.log('User created')
return null
};