import { useState } from "react";
import { ShoppingBag, Plus, Edit, Eye, Heart, MapPin, Star, Camera, DollarSign, Package, Truck, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const myListings = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 750,
    originalPrice: 1099,
    views: 234,
    likes: 18,
    status: "active",
    condition: "Excellent",
    posted: "3 days ago",
    messages: 12,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 45,
    originalPrice: 120,
    views: 156,
    likes: 24,
    status: "sold",
    condition: "Good",
    posted: "1 week ago",
    messages: 8,
    category: "Clothing"
  },
  {
    id: 3,
    name: "Gaming Chair",
    price: 180,
    originalPrice: 300,
    views: 89,
    likes: 7,
    status: "pending",
    condition: "Like New",
    posted: "2 days ago",
    messages: 3,
    category: "Furniture"
  }
];

const recentPurchases = [
  {
    id: 1,
    name: "MacBook Air M1",
    price: 799,
    seller: "TechDeals Pro",
    status: "delivered",
    orderDate: "2024-01-15",
    rating: null,
    trackingNumber: "ECO123456789"
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 89,
    seller: "Fashion Finds",
    status: "in-transit",
    orderDate: "2024-01-18",
    rating: null,
    trackingNumber: "ECO987654321"
  },
  {
    id: 3,
    name: "Coffee Table",
    price: 150,
    seller: "Vintage Home",
    status: "pending",
    orderDate: "2024-01-20",
    rating: 5,
    trackingNumber: null
  }
];

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("buying");
  const [showNewListing, setShowNewListing] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-neon-green/20 text-neon-green";
      case "sold": return "bg-neon-blue/20 text-neon-blue";
      case "pending": return "bg-neon-pink/20 text-neon-pink";
      case "delivered": return "bg-neon-green/20 text-neon-green";
      case "in-transit": return "bg-neon-blue/20 text-neon-blue";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-neon bg-clip-text text-transparent">
          EcoFinds Marketplace
        </h1>
        <p className="text-muted-foreground">Your sustainable trading hub</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gradient-card border-card-border">
          <TabsTrigger 
            value="buying" 
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-neon-green"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Buying
          </TabsTrigger>
          <TabsTrigger 
            value="selling" 
            className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary data-[state=active]:shadow-neon-blue"
          >
            <Package className="w-4 h-4 mr-2" />
            Selling
          </TabsTrigger>
        </TabsList>

        {/* Buying Tab */}
        <TabsContent value="buying" className="space-y-6">
          {/* Buying Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-green">156</div>
              <div className="text-xs text-muted-foreground">Items Bought</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-blue">$2,847</div>
              <div className="text-xs text-muted-foreground">Total Spent</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-pink">$1,923</div>
              <div className="text-xs text-muted-foreground">Money Saved</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-purple">4.9★</div>
              <div className="text-xs text-muted-foreground">Avg Rating</div>
            </Card>
          </div>

          {/* Recent Purchases */}
          <Card className="bg-gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-orbitron">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Recent Purchases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPurchases.map((purchase, index) => (
                <div
                  key={purchase.id}
                  className="p-4 rounded-xl bg-muted/20 border border-card-border hover:bg-muted/30 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{purchase.name}</h3>
                      <p className="text-sm text-muted-foreground">Sold by {purchase.seller}</p>
                      <p className="text-xs text-muted-foreground">Ordered on {purchase.orderDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">${purchase.price}</div>
                      <Badge variant="secondary" className={getStatusColor(purchase.status)}>
                        {purchase.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {purchase.trackingNumber && (
                        <Button size="sm" variant="secondary" className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30">
                          <Truck className="w-3 h-3 mr-1" />
                          Track Order
                        </Button>
                      )}
                      <Button size="sm" variant="secondary" className="bg-neon-pink/20 text-neon-pink hover:bg-neon-pink/30">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Message Seller
                      </Button>
                    </div>
                    {purchase.status === "delivered" && !purchase.rating && (
                      <Button size="sm" className="bg-gradient-eco text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Rate & Review
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Selling Tab */}
        <TabsContent value="selling" className="space-y-6">
          {/* Selling Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-green">23</div>
              <div className="text-xs text-muted-foreground">Items Sold</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-blue">$1,456</div>
              <div className="text-xs text-muted-foreground">Total Earned</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-pink">3</div>
              <div className="text-xs text-muted-foreground">Active Listings</div>
            </Card>
            <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
              <div className="text-2xl font-bold text-neon-purple">4.8★</div>
              <div className="text-xs text-muted-foreground">Seller Rating</div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4">
            <Button 
              onClick={() => setShowNewListing(!showNewListing)}
              className="bg-gradient-neon text-white hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              List New Item
            </Button>
            <Button variant="secondary" className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 border-neon-blue/30">
              <Eye className="w-4 h-4 mr-2" />
              View My Shop
            </Button>
          </div>

          {/* New Listing Form */}
          {showNewListing && (
            <Card className="bg-gradient-card border-card-border shadow-card slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  <Plus className="w-5 h-5 text-secondary" />
                  Create New Listing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Item Name</label>
                    <Input placeholder="What are you selling?" className="bg-input border-card-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger className="bg-input border-card-border">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="furniture">Furniture</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price ($)</label>
                    <Input type="number" placeholder="0.00" className="bg-input border-card-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Condition</label>
                    <Select>
                      <SelectTrigger className="bg-input border-card-border">
                        <SelectValue placeholder="Item condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea 
                    placeholder="Describe your item in detail..." 
                    className="bg-input border-card-border min-h-[100px]"
                  />
                </div>
                <div className="border-2 border-dashed border-card-border rounded-lg p-8 text-center">
                  <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">Upload photos of your item</p>
                  <Button variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                    Choose Files
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-eco text-white">
                    Publish Listing
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-card-border"
                    onClick={() => setShowNewListing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* My Listings */}
          <Card className="bg-gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-orbitron">
                <Package className="w-5 h-5 text-secondary" />
                My Listings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {myListings.map((listing, index) => (
                <div
                  key={listing.id}
                  className="p-4 rounded-xl bg-muted/20 border border-card-border hover:bg-muted/30 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{listing.name}</h3>
                      <p className="text-sm text-muted-foreground">{listing.category} • {listing.condition}</p>
                      <p className="text-xs text-muted-foreground">Posted {listing.posted}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">${listing.price}</div>
                      <Badge variant="secondary" className={getStatusColor(listing.status)}>
                        {listing.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {listing.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {listing.likes} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {listing.messages} messages
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-neon-green/20 text-neon-green hover:bg-neon-green/30">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}