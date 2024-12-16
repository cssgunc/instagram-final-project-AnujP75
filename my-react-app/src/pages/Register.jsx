import { createClient } from "@supabase/supabase-js";
import './Register.css'

const apiKey = import.meta.env.VITE_SUPABASE_API_KEY
const dbURL = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(dbURL,apiKey);

console.log(apiKey);
console.log(dbURL);

let userHandle;
let firstName;
let lastName;
let yearBorn;
let passWord;

async function createUser() {
  userHandle = document.getElementById("user-handle").value;
  firstName = document.getElementById("first-name").value;
  lastName = document.getElementById("last-name").value;
  yearBorn = document.getElementById("year-born").value;
  passWord = document.getElementById("password").value;
  
  const userData = {
    "user_handle": userHandle, 
    "first_name": firstName, 
    "last_name": lastName, 
    "year_born": yearBorn,
    "password": passWord
  };

  console.log(userData);

  const { error} = await supabase.from("profiles").insert(userData);
  console.log(error);
}

export { userHandle, firstName, lastName, passWord }

export const Register = () => {

  return (
    <>
      <div id="align">
      <div id="title">
        <h1>Sign Up</h1>
      </div>
      <div id="body">
      <div>
        User Handle:
        <input id="user-handle"></input>
      </div>
      
      <div>
        First Name:
        <input id="first-name"></input>
      </div>
      
      <div>
        Last Name:
        <input id="last-name"></input>
      </div>
      
      <div>
        Year Born:
        <input id="year-born"></input>
      </div>
      
      <div>
        Password:
        <input id="password"></input>
      </div>
      
      </div>

      <div id="title">
        <button onClick={() => createUser()}>Create User</button>
      </div>
      </div>
      
    </>
  );
}