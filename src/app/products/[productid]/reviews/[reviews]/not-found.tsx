'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname();
  const reviewId = pathname.split('/')[4];
  const productId = pathname.split('/')[2];
  return (
    <div>
      <h2>Review {reviewId} for Product {productId} Not Found</h2>
    </div>
  )
}
