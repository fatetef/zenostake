"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users, Clock, TrendingUp, Lock, Zap, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PoolsPage() {
  const [selectedPool, setSelectedPool] = useState<number | null>(null)

  const pools = [
    {
      id: 1,
      category: "Economics",
      difficulty: "Medium",
      question: "What will the US inflation rate be in December 2025?",
      description:
        "Predict the Consumer Price Index (CPI) inflation rate as reported by the Bureau of Labor Statistics",
      currentPrediction: "3.2%",
      prizePool: "$2,500",
      participants: "1,247",
      timeLeft: "6 months",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "📈",
      status: "coming-soon",
      minStake: "$10",
      maxStake: "$1,000",
    },
    {
      id: 2,
      category: "Markets",
      difficulty: "Hard",
      question: "What will be the closing price of Bitcoin on New Year's Eve?",
      description: "Predict Bitcoin's USD price at 11:59 PM UTC on December 31, 2025",
      currentPrediction: "$98,450",
      prizePool: "$5,000",
      participants: "2,103",
      timeLeft: "5 months",
      gradient: "from-orange-500/20 to-yellow-500/20",
      icon: "₿",
      status: "coming-soon",
      minStake: "$25",
      maxStake: "$2,500",
    },
    {
      id: 3,
      category: "Climate",
      difficulty: "Expert",
      question: "What will be the global average temperature anomaly this year?",
      description: "Predict the global temperature anomaly relative to the 20th century average",
      currentPrediction: "+1.34°C",
      prizePool: "$1,800",
      participants: "892",
      timeLeft: "4 months",
      gradient: "from-red-500/20 to-pink-500/20",
      icon: "🌡️",
      status: "coming-soon",
      minStake: "$15",
      maxStake: "$750",
    },
    {
      id: 4,
      category: "Demographics",
      difficulty: "Easy",
      question: "How many new users will join major social platforms in Q3?",
      description: "Combined new user registrations across top 5 social media platforms",
      currentPrediction: "47.2M",
      prizePool: "$3,200",
      participants: "1,856",
      timeLeft: "2 months",
      gradient: "from-purple-500/20 to-indigo-500/20",
      icon: "👥",
      status: "coming-soon",
      minStake: "$5",
      maxStake: "$500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Geometric Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Flowing Gradient Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 blur-3xl animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 8}%`,
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0
                    ? "rgba(236, 72, 153, 0.4)"
                    : i % 3 === 1
                      ? "rgba(168, 85, 247, 0.4)"
                      : "rgba(249, 115, 22, 0.4)"
                } 0%, transparent 70%)`,
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${i * 20}%`,
                top: "0%",
                width: "2px",
                height: "100%",
                background: "linear-gradient(180deg, transparent 0%, rgba(236, 72, 153, 0.5) 50%, transparent 100%)",
                animation: `slideDown ${6 + i}s linear infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/trepa-icon-white.svg" alt="ZenoStake" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl sm:text-2xl font-bold text-white">ZENOSTAKE</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-xs sm:text-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/waiting-list">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 px-4 py-2 rounded-full font-medium text-xs sm:text-sm"
                >
                  Join Beta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-sm font-bold rounded-full">
              🏊 PREDICTION POOLS
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              DIVE INTO
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                THE POOLS
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose your prediction pool, stake your tokens, and earn based on your{" "}
              <strong className="text-white">precision</strong>.
              <br />
              The closer you predict, the bigger your share of the prize pool.
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 sm:p-8 border border-yellow-500/30 mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl sm:text-2xl font-black text-white">COMING SOON IN BETA</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Prediction pools are currently in development. Join our beta to get early access when they launch!
            </p>
            <Badge className="bg-yellow-500/20 text-yellow-400 px-4 py-2 text-sm font-bold">
              <Zap className="w-4 h-4 mr-2" />
              BETA FEATURE
            </Badge>
          </div>

          {/* Pool Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {pools.map((pool, index) => (
              <Card
                key={pool.id}
                className={`bg-gradient-to-br ${pool.gradient} border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 relative overflow-hidden`}
                onClick={() => setSelectedPool(selectedPool === pool.id ? null : pool.id)}
              >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-white mb-3 mx-auto" />
                    <div className="text-lg font-black text-white mb-2">COMING SOON</div>
                    <div className="text-sm text-gray-300">Available in Beta</div>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{pool.icon}</span>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${
                          pool.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : pool.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : pool.difficulty === "Hard"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {pool.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                        {pool.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-4 leading-tight group-hover:text-pink-300 transition-colors">
                    {pool.question}
                  </h3>

                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">{pool.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Current Prediction</div>
                      <div className="text-lg font-bold text-white">{pool.currentPrediction}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Prize Pool</div>
                      <div className="text-lg font-bold text-green-400">{pool.prizePool}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{pool.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{pool.timeLeft}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Min Stake:</span>
                      <span className="text-white font-medium">{pool.minStake}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Max Stake:</span>
                      <span className="text-white font-medium">{pool.maxStake}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How Pools Work */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-sm mb-16">
            <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">HOW PREDICTION POOLS WORK</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl mb-6 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-black text-white mb-4">CHOOSE YOUR POOL</h4>
                <p className="text-gray-300 leading-relaxed">
                  Browse available prediction pools and select one that matches your expertise and interests.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-black text-white mb-4">SLIDE & STAKE</h4>
                <p className="text-gray-300 leading-relaxed">
                  Use our precision slider to make your prediction and stake your tokens. The more confident, the more
                  you stake.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-black text-white mb-4">EARN REWARDS</h4>
                <p className="text-gray-300 leading-relaxed">
                  When results are revealed, earn rewards based on your accuracy. Closer predictions get bigger payouts.
                </p>
              </div>
            </div>
          </div>

          {/* Pool Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "🎯",
                title: "PRECISION REWARDS",
                description: "Earn more for being closer to the actual result",
              },
              {
                icon: "⚡",
                title: "INSTANT STAKING",
                description: "Slide to stake with our frictionless interface",
              },
              {
                icon: "🏆",
                title: "SKILL-BASED",
                description: "Rewards based on accuracy, not luck",
              },
              {
                icon: "🔒",
                title: "SECURE POOLS",
                description: "Smart contracts ensure fair and transparent payouts",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-black text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">READY TO DIVE INTO THE POOLS?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our beta program to get early access to prediction pools and start earning from your forecasting
              skills.
            </p>
            <Link href="/waiting-list">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 sm:px-12 py-4 text-lg font-black rounded-full border-0 shadow-2xl shadow-pink-500/40"
              >
                <Users className="mr-3 w-6 h-6" />
                JOIN BETA NOW
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
