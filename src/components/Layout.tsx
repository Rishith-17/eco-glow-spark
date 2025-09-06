import { useState } from "react";
import { Home, TrendingUp, Trophy, Users, Settings, Bot, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "progress", label: "Progress", icon: TrendingUp },
  { id: "challenges", label: "Challenges", icon: Trophy },
  { id: "community", label: "Community", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  const [showAIChat, setShowAIChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue/10 blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-neon-pink/10 blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 rounded-full bg-neon-green/10 blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main content */}
      <main className="pb-20 px-4 pt-6 relative z-10">
        {children}
      </main>

      {/* Floating AI Assistant Button */}
      <button
        onClick={() => setShowAIChat(!showAIChat)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-neon flex items-center justify-center shadow-neon-blue transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        <Bot className="w-6 h-6 text-white" />
      </button>

      {/* Voice Command Button */}
      <button
        className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center shadow-neon-green transition-all duration-300 hover:scale-110"
      >
        <Mic className="w-5 h-5 text-white" />
      </button>

      {/* AI Chat Popup */}
      {showAIChat && (
        <div className="fixed top-24 right-6 z-40 w-80 h-96 bg-gradient-card rounded-2xl shadow-card border border-card-border transition-all duration-300 slide-up">
          <div className="p-4 border-b border-card-border">
            <h3 className="font-orbitron font-bold text-lg text-primary">EcoBot Assistant</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-primary/20 rounded-lg p-3 rounded-br-none">
                <p className="text-sm">Hello! I'm EcoBot, your sustainable shopping assistant. How can I help you find eco-friendly items today?</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-card-border">
            <input 
              placeholder="Ask about eco-friendly products..."
              className="w-full bg-input rounded-lg px-3 py-2 text-sm border border-card-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-card backdrop-blur-lg border-t border-card-border">
        <div className="flex items-center justify-around py-3 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={cn(
                  "flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300",
                  isActive 
                    ? "bg-primary/20 text-primary shadow-neon-green scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive && "animate-pulse-glow"
                )} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}