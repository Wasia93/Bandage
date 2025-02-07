import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Products() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          Featured Products
        </h3>
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm md:text-lg lg:text-xl mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/col-md-3(4).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card.png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card (1).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card(2).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/col-md-3 (6).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card (3).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card (4).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              src="/Product card (5).png"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;