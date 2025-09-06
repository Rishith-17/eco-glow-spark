import { useState } from "react";
import { User, Bell, Shield, Palette, Globe, CreditCard, Award, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const achievementBadges = [
  { name: "First Purchase", icon: "🛍️", earned: true, date: "Jan 15" },
  { name: "Eco Warrior", icon: "🌱", earned: true, date: "Feb 3" },
  { name: "Money Saver", icon: "💰", earned: true, date: "Feb 18" },
  { name: "Social Butterfly", icon: "🦋", earned: false, date: "" },
  { name: "Streak Master", icon: "🔥", earned: false, date: "" },
  { name: "Review Hero", icon: "⭐", earned: true, date: "Mar 2" },
];

const streakHistory = [
  { week: "This Week", days: 5, max: 7 },
  { week: "Last Week", days: 7, max: 7 },
  { week: "2 Weeks Ago", days: 6, max: 7 },
  { week: "3 Weeks Ago", days: 4, max: 7 },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailUpdates: false,
    weeklyDigest: true,
    priceAlerts: true,
    socialUpdates: false,
  });

  const [goals, setGoals] = useState({
    monthlySavings: 200,
    weeklyItems: 3,
    ecoScore: 85,
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-neon bg-clip-text text-transparent">
          Profile & Settings
        </h1>
        <p className="text-muted-foreground">Customize your EcoFinds experience</p>
      </div>

      {/* Profile Section */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <User className="w-5 h-5 text-primary" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20 border-4 border-primary/30">
              <AvatarFallback className="bg-gradient-neon text-white text-2xl font-bold">
                AE
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <Input defaultValue="Alex Chen" className="bg-input border-card-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input defaultValue="alex.chen@email.com" className="bg-input border-card-border" />
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  <Award className="w-3 h-3 mr-1" />
                  Eco Warrior Level 7
                </Badge>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                  <Zap className="w-3 h-3 mr-1" />
                  9,650 EcoPoints
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Award className="w-5 h-5 text-neon-pink" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievementBadges.map((badge, index) => (
              <div
                key={badge.name}
                className={`p-4 rounded-xl border text-center transition-all duration-300 hover:scale-105 ${
                  badge.earned 
                    ? 'bg-primary/20 border-primary neon-border glow-green' 
                    : 'bg-muted/20 border-card-border opacity-50'
                } hover:bg-muted/30`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="font-semibold text-sm">{badge.name}</div>
                {badge.earned && (
                  <div className="text-xs text-muted-foreground mt-1">{badge.date}</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak History */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Target className="w-5 h-5 text-neon-blue" />
            Streak History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {streakHistory.map((streak, index) => (
            <div key={streak.week} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{streak.week}</span>
                <span>{streak.days}/{streak.max} days</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-eco h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(streak.days / streak.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Goals & Preferences */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Goals */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Target className="w-5 h-5 text-neon-green" />
              Personal Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Monthly Savings Target</label>
              <Input 
                type="number" 
                defaultValue={goals.monthlySavings}
                className="bg-input border-card-border"
              />
              <p className="text-xs text-muted-foreground mt-1">Current: $456 this month</p>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Weekly Items Goal</label>
              <Input 
                type="number" 
                defaultValue={goals.weeklyItems}
                className="bg-input border-card-border"
              />
              <p className="text-xs text-muted-foreground mt-1">Current: 2 items this week</p>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Target Eco Score</label>
              <Input 
                type="number" 
                defaultValue={goals.ecoScore}
                max="100"
                className="bg-input border-card-border"
              />
              <p className="text-xs text-muted-foreground mt-1">Current score: 92%</p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Bell className="w-5 h-5 text-neon-purple" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </label>
                <Switch 
                  checked={value}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, [key]: checked }))
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Account Actions */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Shield className="w-5 h-5 text-neon-blue" />
            Account & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="secondary" className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 border-neon-blue/30">
              <Shield className="w-4 h-4 mr-2" />
              Change Password
            </Button>
            <Button variant="secondary" className="bg-neon-green/20 text-neon-green hover:bg-neon-green/30 border-neon-green/30">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Methods
            </Button>
            <Button variant="secondary" className="bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 border-neon-purple/30">
              <Globe className="w-4 h-4 mr-2" />
              Privacy Settings
            </Button>
            <Button variant="secondary" className="bg-neon-pink/20 text-neon-pink hover:bg-neon-pink/30 border-neon-pink/30">
              <Palette className="w-4 h-4 mr-2" />
              App Preferences
            </Button>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex gap-4">
            <Button 
              variant="secondary" 
              className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30"
            >
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              className="border-destructive/30 text-destructive hover:bg-destructive/20"
            >
              Reset to Default
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}