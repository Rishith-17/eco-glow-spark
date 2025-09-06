import { useState } from "react";
import { Leaf, Target, TrendingUp, ShoppingBag, Zap, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [completedGoals, setCompletedGoals] = useState(2);
  const totalGoals = 5;

  const quickActions = [
    { icon: ShoppingBag, label: "Browse Items", color: "text-neon-blue" },
    { icon: Leaf, label: "Eco Score", color: "text-neon-green" },
    { icon: TrendingUp, label: "Track Impact", color: "text-neon-pink" },
    { icon: Star, label: "Favorites", color: "text-neon-purple" },
  ];

  const recentFinds = [
    { name: "Vintage Leather Jacket", price: "$45", saved: "$85", eco: "92%" },
    { name: "Bamboo Phone Case", price: "$18", saved: "$22", eco: "98%" },
    { name: "Upcycled Desk Lamp", price: "$32", saved: "$48", eco: "89%" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Greeting */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-4xl font-orbitron font-bold bg-gradient-eco bg-clip-text text-transparent">
          Welcome back, Alex!
        </h1>
        <p className="text-muted-foreground">Your sustainable shopping journey continues</p>
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          <Leaf className="w-3 h-3 mr-1" />
          Eco Warrior Level 7
        </Badge>
      </div>

      {/* Daily Goals Card */}
      <Card className="bg-gradient-card border-card-border shadow-card glow-hover transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-orbitron">
              <Target className="w-5 h-5 text-primary" />
              Daily Goals
            </span>
            <span className="text-sm text-muted-foreground">{completedGoals}/{totalGoals}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-eco h-2 rounded-full transition-all duration-500 shadow-neon-green"
              style={{ width: `${(completedGoals / totalGoals) * 100}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Browse 5 items ✓
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Save $50 today ✓
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              Share 1 item
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              Rate a seller
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="secondary"
              className="h-20 flex-col gap-2 bg-gradient-card border-card-border hover:scale-105 transition-all duration-300 neon-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className={`w-6 h-6 ${action.color}`} />
              <span className="text-xs">{action.label}</span>
            </Button>
          );
        })}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-green">$2,847</div>
          <div className="text-xs text-muted-foreground">Total Saved</div>
        </Card>
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-blue">156</div>
          <div className="text-xs text-muted-foreground">Items Bought</div>
        </Card>
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover md:col-span-1 col-span-2">
          <div className="text-2xl font-bold text-neon-pink">847kg</div>
          <div className="text-xs text-muted-foreground">CO₂ Saved</div>
        </Card>
      </div>

      {/* Recent Finds */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Zap className="w-5 h-5 text-secondary" />
            Recent Eco Finds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentFinds.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-card-border hover:bg-muted/30 transition-all duration-300">
              <div>
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-xs text-muted-foreground">Saved {item.saved} • Eco Score {item.eco}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary">{item.price}</div>
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                  <Award className="w-3 h-3 mr-1" />
                  {item.eco}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}