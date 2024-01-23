import { usePocket } from "../contexts/PocketContext";

export default function LoggedIn() {
  const pocket = usePocket();
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          pocket?.logout();
        }}
      />
    </div>
  );
}
