import { RequireAuth } from "./Components/RequireAuth";
import { PocketProvider } from "./contexts/PocketContext";
<link rel="stylesheet" href="index.css"></link>;
function App() {
  return (
    <div>
      <PocketProvider>
        <RequireAuth />
      </PocketProvider>
    </div>
  );
}

export default App;
