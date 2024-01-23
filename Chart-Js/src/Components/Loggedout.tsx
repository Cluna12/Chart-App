import { useState } from "react";
import { usePocket } from "../contexts/PocketContext";

export default function LoggedOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*
    const {register, login} = usePocket();
    */
  const pocket = usePocket();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        pocket?.register(email, password).then(() => {
          console.log("user created");
        });
      }}
    >
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          pocket?.register(email, password).then(() => {
            pocket.login(email, password).then(() => console.log("logged in"));
          });
        }}
      >
        Signup
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          pocket?.login(email, password).then(() => console.log("logged in"));
        }}
      >
        Signin
      </button>
    </form>
  );
}
