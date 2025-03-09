export default function Header() {
  return (
    <header className="h-8  bg-blueGrey-800 text-blueGrey-100 shadow-md p-1 flex items-center border-blueGrey-500 border-b-1">
      <nav className=" flex-1 flex items-center gap-1">
        <a href="/dev" className="font-bold px-1">
          DEV
        </a>
        <div className="flex-1 text-center">WMS</div>
      </nav>
    </header>
  );
}
