import { useState } from "react";
import { usePocket } from "../contexts/PocketContext";

export default function LoggedOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
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
        Sign-up
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          pocket?.login(email, password).then(() => console.log("logged in"));
        }}
      >
        Sign-in
      </button>
    </form>
  );
}
