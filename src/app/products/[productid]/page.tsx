import React from 'react'

export default async function ProductDetails({ params }: { params: Promise<{ productid: string }> }) {
    const productid = (await params).productid;
  return (
    <h2>
        Product Details Page for product ID: {productid}
    </h2>
  )
}
