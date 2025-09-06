import { useState } from "react";
import { Search, Filter, SlidersHorizontal, MapPin, Star, Heart, Zap, Leaf, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  { name: "All", count: 1247 },
  { name: "Electronics", count: 234 },
  { name: "Clothing", count: 456 },
  { name: "Furniture", count: 189 },
  { name: "Books", count: 123 },
  { name: "Sports", count: 98 },
  { name: "Home & Garden", count: 147 },
];

const searchResults = [
  {
    id: 1,
    name: "Vintage MacBook Pro 2019",
    price: 899,
    originalPrice: 1499,
    location: "2.3 km away",
    seller: "TechGuru92",
    rating: 4.8,
    reviews: 127,
    ecoScore: 94,
    image: null,
    condition: "Excellent",
    tags: ["Electronics", "Apple", "Laptop"],
    savedAmount: 600,
    liked: false
  },
  {
    id: 2,
    name: "Designer Leather Handbag",
    price: 245,
    originalPrice: 450,
    location: "1.8 km away",
    seller: "FashionQueen",
    rating: 4.9,
    reviews: 89,
    ecoScore: 89,
    image: null,
    condition: "Like New",
    tags: ["Fashion", "Luxury", "Handbag"],
    savedAmount: 205,
    liked: true
  },
  {
    id: 3,
    name: "Antique Oak Dining Table",
    price: 320,
    originalPrice: 680,
    location: "5.2 km away",
    seller: "VintageFinds",
    rating: 4.7,
    reviews: 156,
    ecoScore: 96,
    image: null,
    condition: "Good",
    tags: ["Furniture", "Vintage", "Wood"],
    savedAmount: 360,
    liked: false
  },
  {
    id: 4,
    name: "Canon DSLR Camera Kit",
    price: 567,
    originalPrice: 899,
    location: "3.7 km away",
    seller: "PhotoPro",
    rating: 4.8,
    reviews: 203,
    ecoScore: 91,
    image: null,
    condition: "Very Good",
    tags: ["Electronics", "Camera", "Photography"],
    savedAmount: 332,
    liked: false
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([2]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-eco bg-clip-text text-transparent">
          Discover Eco Treasures
        </h1>
        <p className="text-muted-foreground">Find amazing second-hand items near you</p>
      </div>

      {/* Search Bar */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for items, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input border-card-border"
              />
            </div>
            <Button 
              variant="secondary"
              onClick={() => setShowFilters(!showFilters)}
              className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 border-neon-blue/30"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-muted/20 rounded-lg border border-card-border slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger className="bg-input border-card-border">
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5km">Within 5km</SelectItem>
                      <SelectItem value="10km">Within 10km</SelectItem>
                      <SelectItem value="25km">Within 25km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select>
                    <SelectTrigger className="bg-input border-card-border">
                      <SelectValue placeholder="Any price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50</SelectItem>
                      <SelectItem value="50-200">$50 - $200</SelectItem>
                      <SelectItem value="200-500">$200 - $500</SelectItem>
                      <SelectItem value="500+">$500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Condition</label>
                  <Select>
                    <SelectTrigger className="bg-input border-card-border">
                      <SelectValue placeholder="Any condition" />
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
            </div>
          )}
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "secondary"}
            onClick={() => setSelectedCategory(category.name)}
            className={`whitespace-nowrap transition-all duration-300 ${
              selectedCategory === category.name
                ? "bg-primary/20 text-primary border-primary shadow-neon-green"
                : "bg-muted/20 text-muted-foreground hover:text-foreground hover:bg-muted/30"
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {category.name}
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-orbitron font-bold">
            {searchResults.length} items found
          </h2>
          <Select>
            <SelectTrigger className="w-48 bg-input border-card-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="distance">Nearest First</SelectItem>
              <SelectItem value="eco-score">Highest Eco Score</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {searchResults.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gradient-card border-card-border shadow-card hover:scale-[1.02] transition-all duration-300 glow-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                {/* Item Image Placeholder */}
                <div className="w-full h-48 bg-muted/30 rounded-lg mb-4 flex items-center justify-center border border-card-border">
                  <span className="text-muted-foreground">📸 Item Photo</span>
                </div>

                {/* Item Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="p-2 rounded-full hover:bg-muted/30 transition-all duration-300"
                    >
                      <Heart className={`w-5 h-5 ${
                        likedItems.includes(item.id) 
                          ? "fill-neon-pink text-neon-pink" 
                          : "text-muted-foreground hover:text-neon-pink"
                      }`} />
                    </button>
                  </div>

                  {/* Price and Savings */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${item.price}</span>
                    <span className="text-sm line-through text-muted-foreground">${item.originalPrice}</span>
                    <Badge variant="secondary" className="bg-neon-green/20 text-neon-green">
                      <DollarSign className="w-3 h-3 mr-1" />
                      Save ${item.savedAmount}
                    </Badge>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-neon-blue/20 text-neon-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Seller Info and Eco Score */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{item.seller}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{item.rating} ({item.reviews})</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <Leaf className="w-3 h-3 mr-1" />
                      {item.ecoScore}% Eco
                    </Badge>
                  </div>

                  {/* Condition */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Condition: {item.condition}</span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-neon text-white hover:scale-105 transition-all duration-300"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Contact Seller
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button 
          variant="secondary" 
          className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30"
        >
          Load More Results
        </Button>
      </div>
    </div>
  );
}