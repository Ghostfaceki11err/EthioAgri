import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

// Import local images
import organicTomatoes from '/public/images/products/organic-tomatoes.jpg';
import teff from '/public/images/products/teff.jpg';
import sweetPeppers from '/public/images/products/sweet-peppers.jpg';
import organicCarrots from '/public/images/products/organic-carrots.jpg';
import greenBeans from '/public/images/products/green-beans.jpg';
import coffee from '/public/images/products/coffee.jpg';

export default function ProductsPage() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Organic Tomatoes', farmer: 'Ahmed Hassan', location: 'Addis Ababa', price: '120 ETB/kg', image: '/images/products/organic-tomatoes.jpg' },
            { name: 'Teff', farmer: 'Fatima Ali', location: 'Jimma', price: '80 ETB/kg', image: '/images/products/teff.jpg' },
            { name: 'Sweet Peppers', farmer: 'Dawit Tadesse', location: 'Bahir Dar', price: '200 ETB/kg', image: '/images/products/sweet-peppers.jpg' },
            { name: 'Organic Carrots', farmer: 'Meron Bekele', location: 'Hawassa', price: '90 ETB/kg', image: '/images/products/organic-carrots.jpg' },
            { name: 'Green Beans', farmer: 'Yosef Negash', location: 'Mekelle', price: '150 ETB/kg', image: '/images/products/green-beans.jpg' },
            { name: 'Coffee', farmer: 'Hanan Mohammed', location: 'Sidama', price: '60 ETB/kg', image: '/images/products/coffee.jpg' },
          ].map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>
                  by {product.farmer} • {product.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-green-600">{product.price}</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Contact Farmer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
} 