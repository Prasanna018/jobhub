import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingBubbles from "@/components/floating-bubbles"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative overflow-hidden px-4">
      <FloatingBubbles />
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Find Your Dream Job with JobHub</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up">
        Discover exciting opportunities and take the next step in your career journey.
      </p>
      <Button asChild size="lg" className="animate-bounce">
        <Link href="/jobs">Explore Jobs</Link>
      </Button>
    </main>
  )
}

