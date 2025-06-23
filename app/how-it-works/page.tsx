"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
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

      {/* HOW IT WORKS Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-bold rounded-full">
              🎯 PRECISION MECHANICS
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              HOW THE
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                MAGIC WORKS
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlike binary prediction markets, ZenoStake rewards{" "}
              <strong className="text-white">precision over luck</strong>. The closer your prediction, the bigger your
              payout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left Side - Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 sm:p-12 border border-pink-500/20 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-8">LIVE PREDICTION SIMULATOR</h3>

                {/* Mock Prediction Interface */}
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-300 mb-4">What will Bitcoin's price be on Dec 31, 2025?</p>
                    <div className="text-4xl font-black text-white mb-2">$127,450</div>
                    <p className="text-sm text-gray-400">Your Prediction</p>
                  </div>

                  {/* Slider */}
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                        style={{ width: "73%" }}
                      ></div>
                    </div>
                    <div className="absolute top-0 left-[73%] transform -translate-x-1/2 -translate-y-1">
                      <div className="w-6 h-6 bg-white rounded-full shadow-lg border-2 border-pink-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>$50K</span>
                      <span>$200K</span>
                    </div>
                  </div>

                  {/* Stake Amount */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Stake Amount</span>
                      <span className="text-2xl font-bold text-green-400">$250</span>
                    </div>
                  </div>

                  {/* Potential Payout */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                    <div className="text-center">
                      <div className="text-sm text-gray-300 mb-1">Potential Max Payout</div>
                      <div className="text-3xl font-black text-green-400">$1,847</div>
                      <div className="text-xs text-green-300">If you're within ±$500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "ANALYZE & RESEARCH",
                  description:
                    "Study the question, gather data, and form your hypothesis. Use any sources, tools, or methods you want.",
                  icon: "🔍",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "SLIDE TO PREDICT",
                  description:
                    "Use our precision slider to set your exact prediction. No binary choices - express your confidence with precision.",
                  icon: "🎯",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "03",
                  title: "STAKE YOUR CONVICTION",
                  description:
                    "Put your money where your analysis is. Higher stakes mean higher potential rewards for accurate predictions.",
                  icon: "💎",
                  color: "from-orange-500 to-red-500",
                },
                {
                  step: "04",
                  title: "EARN FROM ACCURACY",
                  description:
                    "When results are revealed, payouts are distributed based on precision. The closer you are, the more you earn.",
                  icon: "🏆",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm font-black text-gray-400">{item.step}</span>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
              ZENOSTAKE VS TRADITIONAL PREDICTION MARKETS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Markets */}
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-xl font-black text-red-400 mb-6 text-center">❌ TRADITIONAL MARKETS</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Binary yes/no outcomes only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Winner takes all mentality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">No reward for being "almost right"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Luck often beats skill</span>
                  </div>
                </div>
              </div>

              {/* Trepa */}
              <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <h4 className="text-xl font-black text-green-400 mb-6 text-center">✅ ZENOSTAKE PRECISION</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Infinite precision spectrum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Rewards based on accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Close predictions still earn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Skill always beats luck</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 sm:mt-24">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">READY TO PUT YOUR SKILLS TO THE TEST?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of predictors who are already earning from their precision and analytical skills.
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
