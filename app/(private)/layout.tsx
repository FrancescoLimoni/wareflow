

import { redirect } from "next/navigation";
import SideMenu from "@/components/SideMenu";
import { createClientServer } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function PrivateLayout({ children }: { children: React.ReactNode; }) {
  const cookieStore = cookies();
  const supabase = createClientServer(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  const user = data?.user;


  // CHECK IF USER IS LOGGED IN IF NOT REDIRECT TO LOGIN PAGE
  // console.log('user:', user);
  // if (error != null || user == null) return redirect('/login');

  return (
    <body >
      <div className="row bg-background text-foreground overflow-hidden">
        <SideMenu />
        <div className="w-screen h-screen flex flex-col items-start">
          {children}
        </div>
      </div>
    </body>
  );
}
