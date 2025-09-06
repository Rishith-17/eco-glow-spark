import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Leaf, Target, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const monthlyData = [
  { month: "Jan", savings: 245, items: 12, co2: 67 },
  { month: "Feb", savings: 389, items: 18, co2: 94 },
  { month: "Mar", savings: 412, items: 22, co2: 118 },
  { month: "Apr", savings: 578, items: 29, co2: 156 },
  { month: "May", savings: 634, items: 31, co2: 189 },
  { month: "Jun", savings: 721, items: 35, co2: 224 },
];

const categoryData = [
  { name: "Clothing", value: 45, color: "#00ffff" },
  { name: "Electronics", value: 25, color: "#ff00ff" },
  { name: "Furniture", value: 20, color: "#00ff00" },
  { name: "Books", value: 10, color: "#ff6b6b" },
];

const weeklyGoals = [
  { day: "Mon", completed: 3, total: 4 },
  { day: "Tue", completed: 4, total: 4 },
  { day: "Wed", completed: 2, total: 4 },
  { day: "Thu", completed: 4, total: 4 },
  { day: "Fri", completed: 3, total: 4 },
  { day: "Sat", completed: 1, total: 4 },
  { day: "Sun", completed: 0, total: 4 },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-neon bg-clip-text text-transparent">
          Your Impact Dashboard
        </h1>
        <p className="text-muted-foreground">Track your sustainable shopping journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover group">
          <div className="flex items-center justify-center mb-2">
            <DollarSign className="w-6 h-6 text-neon-green group-hover:animate-pulse-glow" />
          </div>
          <div className="text-2xl font-bold text-neon-green">$2,847</div>
          <div className="text-xs text-muted-foreground">Total Saved</div>
          <Badge variant="secondary" className="mt-2 text-xs bg-neon-green/20 text-neon-green">
            +12% this month
          </Badge>
        </Card>

        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover group">
          <div className="flex items-center justify-center mb-2">
            <Leaf className="w-6 h-6 text-neon-blue group-hover:animate-pulse-glow" />
          </div>
          <div className="text-2xl font-bold text-neon-blue">847kg</div>
          <div className="text-xs text-muted-foreground">CO₂ Saved</div>
          <Badge variant="secondary" className="mt-2 text-xs bg-neon-blue/20 text-neon-blue">
            +8% this month
          </Badge>
        </Card>

        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover group">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-6 h-6 text-neon-pink group-hover:animate-pulse-glow" />
          </div>
          <div className="text-2xl font-bold text-neon-pink">156</div>
          <div className="text-xs text-muted-foreground">Items Rescued</div>
          <Badge variant="secondary" className="mt-2 text-xs bg-neon-pink/20 text-neon-pink">
            +15% this month
          </Badge>
        </Card>

        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover group">
          <div className="flex items-center justify-center mb-2">
            <Award className="w-6 h-6 text-neon-purple group-hover:animate-pulse-glow" />
          </div>
          <div className="text-2xl font-bold text-neon-purple">97%</div>
          <div className="text-xs text-muted-foreground">Eco Score</div>
          <Badge variant="secondary" className="mt-2 text-xs bg-neon-purple/20 text-neon-purple">
            Excellent!
          </Badge>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Savings Trend */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <TrendingUp className="w-5 h-5 text-neon-green" />
              Savings Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--card-border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--card-border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="hsl(var(--neon-green))" 
                  fill="hsl(var(--neon-green) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Leaf className="w-5 h-5 text-neon-blue" />
              Purchase Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--card-border))",
                    borderRadius: "8px"
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Goals and Environmental Impact */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Weekly Goals Progress */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Calendar className="w-5 h-5 text-neon-pink" />
              Weekly Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyGoals}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--card-border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--card-border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="completed" fill="hsl(var(--neon-pink))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="bg-gradient-card border-card-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Leaf className="w-5 h-5 text-primary" />
              Environmental Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">CO₂ Reduction</span>
                <span className="font-bold text-neon-green">847kg</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-eco h-2 rounded-full w-[85%] shadow-neon-green"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Water Saved</span>
                <span className="font-bold text-neon-blue">2,340L</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-neon-blue h-2 rounded-full w-[92%] shadow-neon-blue"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Waste Diverted</span>
                <span className="font-bold text-neon-pink">156 items</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-neon-pink h-2 rounded-full w-[78%] shadow-neon-pink"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}