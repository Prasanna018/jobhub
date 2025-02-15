import { ModeToggle } from "./mode-toggle"
import Navbar from "./navbar"

export default function Header() {
  return (
    <header className="w-full p-4 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">JobHub</h1>
        <Navbar />
        <ModeToggle />
      </div>
    </header>
  )
}

