import { usePocket } from "../contexts/PocketContext";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./Loggedout";

export const RequireAuth = () => {
  const pocket = usePocket();

  return pocket?.user ? <LoggedIn /> : <LoggedOut />;
};
