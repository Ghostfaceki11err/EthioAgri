import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export default function FarmersPage() {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Farmers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Ahmed Hassan', location: 'Addis Ababa', speciality: 'Organic Vegetables', products: 12, rating: 4.8, image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Fatima Ali', location: 'Jimma', speciality: 'Leafy Greens', products: 8, rating: 4.9, image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Dawit Tadesse', location: 'Bahir Dar', speciality: 'Peppers & Herbs', products: 15, rating: 4.7, image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Meron Bekele', location: 'Hawassa', speciality: 'Root Vegetables', products: 10, rating: 4.8, image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Yosef Negash', location: 'Mekelle', speciality: 'Legumes & Beans', products: 18, rating: 4.9, image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Hanan Mohammed', location: 'Dire Dawa', speciality: 'Medicinal Plants', products: 6, rating: 4.6, image: 'https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((farmer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{farmer.name}</CardTitle>
                <CardDescription>
                  {farmer.location} • {farmer.speciality}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    <p>{farmer.products} products</p>
                    <p>⭐ {farmer.rating} rating</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
} 