import { notFound } from 'next/navigation';
import React, { use } from 'react';

export default async function ProductReviews({params}: {params: Promise<{productid: string, reviews: string}>}) {
  const {productid, reviews} =  await params;
  if (parseInt(reviews) > 1000) {
    notFound();
  }
    return (
    <h1>
       Review {reviews} for Product {productid},
    </h1>
  )
}
