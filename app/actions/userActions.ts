"use server";

import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
import { createClientServer } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
import { AuthError } from "@supabase/supabase-js";

const supabase = createClient();

export const signOutUser = async () => {
  console.log("Sign Out User");
  const { error } = await supabase.auth.signOut();

  if (error != null) return error;

  return redirect("/");
};

export const signInUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return error;

  console.log("Data: " + JSON.stringify(data.user));
  return redirect("/dashboard");
};

export const signUpUser = async (formData: FormData) => {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;
  const cookieStore = cookies();
  const supabase = createClientServer(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // emailRedirectTo: `${origin}/auth/callback`
    },
  });

  if (error) return error;

  console.log("User created");
  return null;
};
