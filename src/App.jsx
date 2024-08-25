import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { useState } from "react";
function App() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#646681] text-5xl mt-10 font-bold">TODO LIST</h1>
        <AppHeader setFilter={setFilter} />
        <AppContent filter={filter} />
      </div>
    </>
  );
}

export default App;
