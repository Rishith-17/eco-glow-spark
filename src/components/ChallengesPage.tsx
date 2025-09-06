import { useState } from "react";
import { Trophy, Clock, Users, Zap, Star, Gift, Crown, Medal, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const dailyChallenges = [
  {
    id: 1,
    title: "Early Bird Finds",
    description: "Browse 5 items before 10 AM",
    progress: 3,
    target: 5,
    reward: "50 EcoPoints",
    difficulty: "Easy",
    timeLeft: "4h 32m",
    completed: false
  },
  {
    id: 2,
    title: "Sustainable Spender",
    description: "Save at least $25 on purchases today",
    progress: 18,
    target: 25,
    reward: "100 EcoPoints",
    difficulty: "Medium",
    timeLeft: "4h 32m",
    completed: false
  },
  {
    id: 3,
    title: "Review Helper",
    description: "Leave 2 helpful reviews",
    progress: 2,
    target: 2,
    reward: "75 EcoPoints + Badge",
    difficulty: "Easy",
    timeLeft: "4h 32m",
    completed: true
  }
];

const weeklyChallenges = [
  {
    id: 4,
    title: "Eco Warrior Week",
    description: "Buy 10 second-hand items this week",
    progress: 7,
    target: 10,
    reward: "500 EcoPoints + Crown",
    difficulty: "Hard",
    timeLeft: "3 days",
    completed: false
  },
  {
    id: 5,
    title: "Social Sharer",
    description: "Share 5 amazing finds with friends",
    progress: 5,
    target: 5,
    reward: "200 EcoPoints",
    difficulty: "Medium", 
    timeLeft: "3 days",
    completed: true
  }
];

const leaderboard = [
  { rank: 1, name: "EcoQueen", points: 12470, badge: "👑", streak: 45 },
  { rank: 2, name: "GreenGuru", points: 11250, badge: "🥈", streak: 32 },
  { rank: 3, name: "SustainStar", points: 10890, badge: "🥉", streak: 28 },
  { rank: 4, name: "You (Alex)", points: 9650, badge: "⭐", streak: 15 },
  { rank: 5, name: "RecycleRock", points: 8920, badge: "💎", streak: 22 },
];

export default function ChallengesPage() {
  const [confetti, setConfetti] = useState(false);

  const completeChallenge = (challengeId: number) => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto relative">
      {/* Confetti Animation */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-pink animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: i % 3 === 0 ? 'hsl(var(--neon-pink))' : i % 3 === 1 ? 'hsl(var(--neon-blue))' : 'hsl(var(--neon-green))'
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-neon bg-clip-text text-transparent">
          Eco Challenges
        </h1>
        <p className="text-muted-foreground">Level up your sustainable shopping game</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            <Zap className="w-3 h-3 mr-1" />
            9,650 EcoPoints
          </Badge>
          <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
            <Target className="w-3 h-3 mr-1" />
            15-day streak
          </Badge>
        </div>
      </div>

      {/* Daily Challenges */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Clock className="w-5 h-5 text-neon-blue" />
            Daily Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {dailyChallenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                challenge.completed 
                  ? 'bg-primary/20 border-primary glow-green' 
                  : 'bg-muted/20 border-card-border hover:bg-muted/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        challenge.difficulty === 'Easy' ? 'bg-neon-green/20 text-neon-green' :
                        challenge.difficulty === 'Medium' ? 'bg-neon-blue/20 text-neon-blue' :
                        'bg-neon-pink/20 text-neon-pink'
                      }`}
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground">⏰ {challenge.timeLeft}</span>
                    <span className="text-primary font-medium">🎁 {challenge.reward}</span>
                  </div>
                </div>
                {challenge.completed ? (
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    <Trophy className="w-3 h-3 mr-1" />
                    Complete
                  </Badge>
                ) : (
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 border-neon-blue/30"
                    onClick={() => completeChallenge(challenge.id)}
                  >
                    Claim
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{challenge.progress}/{challenge.target}</span>
                </div>
                <Progress 
                  value={(challenge.progress / challenge.target) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Weekly Challenges */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Star className="w-5 h-5 text-neon-purple" />
            Weekly Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyChallenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                challenge.completed 
                  ? 'bg-primary/20 border-primary glow-green' 
                  : 'bg-muted/20 border-card-border hover:bg-muted/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        challenge.difficulty === 'Easy' ? 'bg-neon-green/20 text-neon-green' :
                        challenge.difficulty === 'Medium' ? 'bg-neon-blue/20 text-neon-blue' :
                        'bg-neon-pink/20 text-neon-pink'
                      }`}
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground">⏰ {challenge.timeLeft}</span>
                    <span className="text-primary font-medium">🎁 {challenge.reward}</span>
                  </div>
                </div>
                {challenge.completed ? (
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    <Crown className="w-3 h-3 mr-1" />
                    Complete
                  </Badge>
                ) : (
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 border-neon-purple/30"
                  >
                    In Progress
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{challenge.progress}/{challenge.target}</span>
                </div>
                <Progress 
                  value={(challenge.progress / challenge.target) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card className="bg-gradient-card border-card-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-orbitron">
            <Trophy className="w-5 h-5 text-neon-pink" />
            Global Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leaderboard.map((user, index) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                user.name.includes('You') 
                  ? 'bg-primary/20 border border-primary neon-border' 
                  : 'bg-muted/20 hover:bg-muted/30'
              } ${
                user.rank <= 3 ? 'glow-hover' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className={`text-2xl ${user.rank <= 3 ? 'animate-pulse-glow' : ''}`}>
                  {user.badge}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{user.name}</span>
                    {user.name.includes('You') && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                        You
                      </Badge>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {user.streak} day streak
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">EcoPoints</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}