"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BetaPage() {
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

      {/* IN BETA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 text-sm font-bold rounded-full animate-pulse">
              🚀 EXCLUSIVE BETA ACCESS
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              WE'RE IN
              <br />
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                BETA MODE
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join the <strong className="text-white">elite group</strong> of beta testers shaping the future of
              prediction markets.
              <br />
              Get exclusive access to features before anyone else.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left Side - What We're Building */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-8">WHAT WE'RE BUILDING</h3>
              <div className="space-y-6">
                {[
                  {
                    phase: "PHASE 1",
                    title: "CORE PREDICTION ENGINE",
                    status: "✅ LIVE",
                    description: "Precision slider, staking mechanism, and accuracy-based payouts",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    phase: "PHASE 2",
                    title: "ADVANCED ANALYTICS",
                    status: "🔥 IN PROGRESS",
                    description: "Real-time market intelligence, sentiment analysis, and performance tracking",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    phase: "PHASE 3",
                    title: "SOCIAL FEATURES",
                    status: "⏳ COMING SOON",
                    description: "Leaderboards, prediction sharing, and community challenges",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    phase: "PHASE 4",
                    title: "MOBILE APP",
                    status: "📱 Q2 2025",
                    description: "Native iOS and Android apps with push notifications and offline mode",
                    color: "from-blue-500 to-cyan-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-xs font-black text-white`}
                        >
                          {item.phase}
                        </div>
                        <h4 className="text-lg sm:text-xl font-black text-white">{item.title}</h4>
                      </div>
                      <Badge className="bg-white/10 text-white text-xs">{item.status}</Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Beta Benefits */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 sm:p-12 border border-pink-500/20 backdrop-blur-sm">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-8 text-center">BETA PERKS</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "🎁",
                    title: "FREE STARTING CREDITS",
                    description: "$100 in prediction credits to get you started",
                    highlight: true,
                  },
                  {
                    icon: "⚡",
                    title: "ZERO PLATFORM FEES",
                    description: "No fees during beta period - keep 100% of your winnings",
                    highlight: true,
                  },
                  {
                    icon: "🏆",
                    title: "EXCLUSIVE TOURNAMENTS",
                    description: "Beta-only competitions with massive prize pools",
                    highlight: false,
                  },
                  {
                    icon: "🎯",
                    title: "EARLY ACCESS",
                    description: "First to try new features and prediction markets",
                    highlight: false,
                  },
                  {
                    icon: "💎",
                    title: "FOUNDER STATUS",
                    description: "Permanent founder badge and special privileges",
                    highlight: false,
                  },
                  {
                    icon: "🗣️",
                    title: "DIRECT FEEDBACK LINE",
                    description: "Shape the product with direct access to our team",
                    highlight: false,
                  },
                ].map((perk, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${perk.highlight ? "bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30" : "bg-white/5"}`}
                  >
                    <div className="text-2xl flex-shrink-0">{perk.icon}</div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1">{perk.title}</h4>
                      <p className="text-gray-300 text-sm">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Limited Beta Spots Available</div>
                  <div className="text-3xl font-black text-white mb-4">847 / 1,000</div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-orange-500 h-3 rounded-full"
                      style={{ width: "84.7%" }}
                    ></div>
                  </div>
                  <Link href="/waiting-list">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-black rounded-full border-0 shadow-2xl shadow-pink-500/40"
                    >
                      <Users className="mr-3 w-6 h-6" />
                      SECURE YOUR BETA SPOT
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Beta Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {[
              { number: "12,847", label: "Beta Users", icon: "👥" },
              { number: "$2.4M", label: "Predictions Made", icon: "💰" },
              { number: "94.2%", label: "Accuracy Rate", icon: "🎯" },
              { number: "153", label: "Beta Days", icon: "📅" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">DON'T MISS YOUR CHANCE TO BE A FOUNDER</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Beta spots are filling up fast. Secure your place in the future of prediction markets.
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
