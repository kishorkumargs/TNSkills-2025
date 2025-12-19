
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold">Dashboard</h1>
        <p>Book New Trip</p>
      </div>
      <div>
        <label htmlFor="start-date"><input className="date-input" type="date" name="start-date"/></label>
        <label htmlFor="end-date"><input className="date-input" type="date" name="end-date"/></label>
      </div>
    </div>
  );
}
