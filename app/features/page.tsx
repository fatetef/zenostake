"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturesPage() {
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
              <span className="text-xl sm:text-2xl font-bold text-white">ZenoStake</span>
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

      {/* FEATURES Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 text-sm font-bold rounded-full">
              ⚡ PLATFORM FEATURES
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              BUILT FOR
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                CHAMPIONS
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every feature designed to give skilled predictors the{" "}
              <strong className="text-white">competitive edge</strong> they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🎯",
                title: "PRECISION SLIDER",
                description: "Express your exact prediction with infinite granularity. No more binary limitations.",
                gradient: "from-pink-500 to-rose-500",
                features: ["Infinite precision", "Real-time feedback", "Visual confidence bands"],
              },
              {
                icon: "⚡",
                title: "LIGHTNING FAST",
                description: "Sub-second prediction submissions and instant market updates. Speed matters.",
                gradient: "from-yellow-500 to-orange-500",
                features: ["<100ms latency", "Real-time updates", "Instant settlements"],
              },
              {
                icon: "🧠",
                title: "AI-POWERED INSIGHTS",
                description: "Get market sentiment analysis and crowd wisdom data to inform your predictions.",
                gradient: "from-purple-500 to-indigo-500",
                features: ["Sentiment analysis", "Crowd patterns", "Historical data"],
              },
              {
                icon: "🏆",
                title: "SKILL-BASED REWARDS",
                description: "Payouts proportional to accuracy. The more precise you are, the more you earn.",
                gradient: "from-green-500 to-emerald-500",
                features: ["Accuracy-based payouts", "Skill multipliers", "Consistency bonuses"],
              },
              {
                icon: "🔒",
                title: "BULLETPROOF SECURITY",
                description: "Multi-signature wallets, audited smart contracts, and institutional-grade security.",
                gradient: "from-blue-500 to-cyan-500",
                features: ["Multi-sig wallets", "Audited contracts", "Insurance coverage"],
              },
              {
                icon: "📊",
                title: "ADVANCED ANALYTICS",
                description: "Track your performance, analyze patterns, and optimize your prediction strategy.",
                gradient: "from-red-500 to-pink-500",
                features: ["Performance tracking", "Strategy analysis", "ROI optimization"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer transform hover:scale-105"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-sm mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">REAL-TIME MARKET INTELLIGENCE</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  See how the crowd thinks, identify opportunities, and make informed decisions with our advanced market
                  analytics.
                </p>
                <div className="space-y-4">
                  {[
                    "Live prediction distribution curves",
                    "Confidence interval analysis",
                    "Historical accuracy tracking",
                    "Market sentiment indicators",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 border border-pink-500/20">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Market Distribution</h4>
                  <p className="text-sm text-gray-400">Bitcoin Price Prediction for Dec 31, 2025</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">$80K-$100K</span>
                    <span className="text-white">23%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                      style={{ width: "23%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">$100K-$120K</span>
                    <span className="text-white">41%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full"
                      style={{ width: "41%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">$120K-$150K</span>
                    <span className="text-white">28%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{ width: "28%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">$150K+</span>
                    <span className="text-white">8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "8%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
              EXPERIENCE THE FUTURE OF PREDICTION MARKETS
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the platform where skill meets opportunity and precision pays off.
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
