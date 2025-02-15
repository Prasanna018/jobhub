"use client"
import JobCard from "@/components/job-card"
import { jobsData } from "@/data/jobs"
import { useWishlist } from "@/context/WishlistContext"

export default function JobsPage() {
  const { isWishlisted } = useWishlist()

  const handleApply = (id: number) => {
    alert(`Applied for job with ID: ${id}`)
  }

  const availableJobs = jobsData.filter((job) => !isWishlisted(job.id))

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableJobs.map((job) => (
          <JobCard key={job.id} {...job} onApply={handleApply} />
        ))}
      </div>
    </main>
  )
}

