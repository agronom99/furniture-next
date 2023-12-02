"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AuthButton = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [session, setSession] = useState(null);

//   useEffect(() => {
//     async function getSession() {
//       const { data } = await supabase.auth.getSession();

//       setSession(data.session);
//     }
//     getSession();
//   }, []);

  const onLogIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://locolhost:3000/auth/callback",
      },
    });
  };

  const onLogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return  (
    <div>
    <button onClick={onLogIn}>Log in</button>
  
    <button onClick={onLogOut}>Log out</button>
    </div>
  );
};

export default AuthButton;
