import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#646681] text-5xl mt-10 font-bold">TODO LIST</h1>
        <AppHeader />
        <AppContent/>
      </div>
    </>
  );
}

export default App;
