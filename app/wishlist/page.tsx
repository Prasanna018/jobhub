"use client"
import JobCard from "@/components/job-card"
import { jobsData } from "@/data/jobs"
import { useWishlist } from "@/context/WishlistContext"

export default function WishlistPage() {
  const { wishlist } = useWishlist()

  const handleApply = (id: number) => {
    alert(`Applied for job with ID: ${id}`)
  }

  const wishlistedJobs = jobsData.filter((job) => wishlist.includes(job.id))

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlistedJobs.length === 0 ? (
        <p>You haven't added any jobs to your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedJobs.map((job) => (
            <JobCard key={job.id} {...job} onApply={handleApply} />
          ))}
        </div>
      )}
    </main>
  )
}

