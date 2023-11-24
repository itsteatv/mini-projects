function App() {
  return (
    <div className="flex flex-row h-screen overflow-hidden touch-pan-y touch-pan-x">
      <div className="h-screen w-[15rem] flex flex-col border-r-slate-50">
        sidebar
      </div>
      <div className="h-screen flex flex-col flex-grow">
        <div className="flex items-center border-r-slate-50">Toolbar</div>
        Text editor
      </div>
    </div>
  );
}

export default App;
