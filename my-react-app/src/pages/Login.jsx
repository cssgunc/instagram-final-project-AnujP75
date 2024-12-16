import { createClient } from "@supabase/supabase-js";
import './Login.css'
import { passWord } from "./Register"

export const Login = () => {
  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY
  const dbURL = import.meta.env.VITE_SUPABASE_URL

  const supabase = createClient(dbURL,apiKey);

  async function loginUser() {
    const userHandle = document.getElementById("user-handle").value;
    const password = document.getElementById("password").value;

    const { error } = await supabase.from("profiles").select("password").match({user_handle: userHandle})
    console.log(error);
    console.log(password);

    {passWord === password ? console.log("Logged In") : console.log("Wrong Password")}

  }

    return (
        <>
      <div id="align">
      <h1 id="title">Sign In</h1>
      <div>
      <div id="body">
      
      <div>
      User Handle:
      <input id="user-handle"></input>
      </div>

      <div>
      Password:
      <input id="password"></input>
      </div>

      </div>

      <div id="title">
      <button onClick={() => loginUser()}>Login</button>
      </div>
      </div>
      </div>
        </>
    )
}