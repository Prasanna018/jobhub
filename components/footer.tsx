import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-background border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2025 JobHub. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

