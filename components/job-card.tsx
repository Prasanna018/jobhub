"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useWishlist } from "@/context/WishlistContext"

interface JobCardProps {
  id: number
  title: string
  company: string
  location: string
  salary: string
  description: string
  onApply: (id: number) => void
}

const JobCard: React.FC<JobCardProps> = ({ id, title, company, location, salary, description, onApply }) => {
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist()
  const wishlisted = isWishlisted(id)

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(id)
    } else {
      addToWishlist(id)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company} - {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-2">Salary: {salary}</p>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => onApply(id)}>Apply</Button>
        <Button variant="outline" onClick={handleWishlist} className={wishlisted ? "text-red-500" : ""}>
          <Heart className={`mr-2 h-4 w-4 ${wishlisted ? "fill-current" : ""}`} />
          {wishlisted ? "Wishlisted" : "Add to Wishlist"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default JobCard

