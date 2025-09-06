import { useState } from "react";
import { MessageCircle, Heart, Share2, Users, Flame, Gift, Star, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const communityPosts = [
  {
    id: 1,
    user: { name: "EcoQueen", avatar: "EQ", level: "Eco Master", streak: 45 },
    content: "Just found this amazing vintage leather jacket for $35! Originally $120. The quality is incredible and it's perfectly broken in. Love giving clothes a second life! 💚",
    image: null,
    likes: 24,
    comments: 8,
    shares: 5,
    timeAgo: "2h ago",
    tags: ["Fashion", "Vintage", "Leather"]
  },
  {
    id: 2,
    user: { name: "GreenGuru", avatar: "GG", level: "Eco Warrior", streak: 32 },
    content: "Tip: Always check the electronics section for hidden gems! Found a barely used iPad Pro for 60% off retail. Seller was super honest about minor scratches.",
    image: null,
    likes: 31,
    comments: 12,
    shares: 8,
    timeAgo: "4h ago",
    tags: ["Electronics", "Tips", "iPad"]
  },
  {
    id: 3,
    user: { name: "SustainStar", avatar: "SS", level: "Eco Expert", streak: 28 },
    content: "Anyone else addicted to thrift flipping? Turned a $5 wooden stool into this gorgeous plant stand with just some sanding and eco-friendly paint! 🌱",
    image: null,
    likes: 67,
    comments: 23,
    shares: 15,
    timeAgo: "6h ago",
    tags: ["DIY", "Furniture", "Upcycling"]
  }
];

const friends = [
  { name: "Maya", status: "online", lastSeen: "now", avatar: "M" },
  { name: "Jake", status: "online", lastSeen: "5m ago", avatar: "J" },
  { name: "Sophia", status: "away", lastSeen: "1h ago", avatar: "S" },
  { name: "Ryan", status: "offline", lastSeen: "2h ago", avatar: "R" },
];

const chatMessages = [
  { user: "Maya", message: "Check out this amazing find!", time: "10:23", isMe: false },
  { user: "You", message: "Wow, that's incredible! Where did you find it?", time: "10:25", isMe: true },
  { user: "Maya", message: "Local thrift store downtown. They have amazing stuff!", time: "10:26", isMe: false },
];

export default function CommunityPage() {
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(friends[0]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-orbitron font-bold bg-gradient-neon bg-clip-text text-transparent">
          EcoFinds Community
        </h1>
        <p className="text-muted-foreground">Connect with fellow sustainable shoppers</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            <Users className="w-3 h-3 mr-1" />
            2,847 Members
          </Badge>
          <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
            <Flame className="w-3 h-3 mr-1" />
            156 Online
          </Badge>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-green">$45K</div>
          <div className="text-xs text-muted-foreground">Community Saved</div>
        </Card>
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-blue">1,234</div>
          <div className="text-xs text-muted-foreground">Items Shared</div>
        </Card>
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-pink">89%</div>
          <div className="text-xs text-muted-foreground">Happy Buyers</div>
        </Card>
        <Card className="bg-gradient-card border-card-border text-center p-4 glow-hover">
          <div className="text-2xl font-bold text-neon-purple">4.8★</div>
          <div className="text-xs text-muted-foreground">Avg Rating</div>
        </Card>
      </div>

      {/* Community Feed and Chat */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Community Feed */}
        <div className="md:col-span-2 space-y-4">
          <Card className="bg-gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-orbitron">
                <MessageCircle className="w-5 h-5 text-neon-blue" />
                Community Feed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="p-4 rounded-xl bg-muted/20 border border-card-border hover:bg-muted/30 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* User Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="border-2 border-primary/30">
                      <AvatarFallback className="bg-gradient-neon text-white text-sm font-bold">
                        {post.user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{post.user.name}</span>
                        <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                          {post.user.level}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {post.user.streak} day streak • {post.timeAgo}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-sm mb-3 leading-relaxed">{post.content}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-neon-blue/20 text-neon-blue border-neon-blue/30"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-3 border-t border-card-border">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs hover:text-neon-pink hover:bg-neon-pink/20"
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs hover:text-neon-blue hover:bg-neon-blue/20"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs hover:text-neon-green hover:bg-neon-green/20"
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      {post.shares}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Friends & Chat */}
        <div className="space-y-4">
          {/* Online Friends */}
          <Card className="bg-gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-orbitron text-lg">
                <Users className="w-5 h-5 text-neon-green" />
                Friends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {friends.map((friend, index) => (
                <div
                  key={friend.name}
                  onClick={() => setSelectedChat(friend)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-muted/30 ${
                    selectedChat.name === friend.name ? 'bg-primary/20 border border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10 border-2 border-card-border">
                      <AvatarFallback className="bg-gradient-neon text-white text-sm font-bold">
                        {friend.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-card ${
                      friend.status === 'online' ? 'bg-neon-green' :
                      friend.status === 'away' ? 'bg-neon-blue' : 'bg-muted'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{friend.name}</div>
                    <div className="text-xs text-muted-foreground">{friend.lastSeen}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Chat */}
          <Card className="bg-gradient-card border-card-border shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-orbitron text-lg">
                <MessageCircle className="w-5 h-5 text-neon-pink" />
                Chat with {selectedChat.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Messages */}
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-2 rounded-lg text-xs ${
                      msg.isMe 
                        ? 'bg-primary/20 text-primary rounded-br-none' 
                        : 'bg-muted/30 rounded-bl-none'
                    }`}>
                      <p>{msg.message}</p>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 bg-input border-card-border text-sm"
                />
                <Button 
                  size="sm" 
                  onClick={sendMessage}
                  className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}