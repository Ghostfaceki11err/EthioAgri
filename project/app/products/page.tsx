"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  farmerId: number;
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="h-8 w-8 inline-block bg-green-600 rounded-full mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">EthioAgri</h1>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Customer</span>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Fresh Products</h2>
        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16">No products found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>
                    {product.description}
                  </CardDescription>
                  <div className="text-xs text-gray-500 mt-1">
                    Category: {product.category} • Quantity: {product.quantity}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-green-600">{product.price} ETB</p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Contact Farmer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 