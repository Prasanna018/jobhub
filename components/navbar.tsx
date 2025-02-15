import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="space-x-4">
      <Button variant="ghost" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/jobs">View Jobs</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/contact">Contact</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/about">About</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/wishlist">Your Wishlist</Link>
      </Button>
    </nav>
  )
}

export default Navbar

