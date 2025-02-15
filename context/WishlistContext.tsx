"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type WishlistContextType = {
  wishlist: number[]
  addToWishlist: (id: number) => void
  removeFromWishlist: (id: number) => void
  isWishlisted: (id: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<number[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (id: number) => {
    setWishlist((prev) => [...prev, id])
  }

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((jobId) => jobId !== id))
  }

  const isWishlisted = (id: number) => wishlist.includes(id)

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

