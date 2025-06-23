"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Flame, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WaitingListPage() {
  useEffect(() => {
    // Load the LaunchList widget script
    const script = document.createElement("script")
    script.src = "https://getlaunchlist.com/js/widget.js"
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script)
    }
  }, [])

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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 sm:mb-12">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 text-sm font-bold rounded-full animate-pulse">
              <Flame className="w-4 h-4 mr-2" />
              EXCLUSIVE BETA ACCESS
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              JOIN THE
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                WAITING LIST
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience the future of prediction markets.
              <br />
              <strong className="text-white">Limited beta spots available.</strong>
            </p>
          </div>

          {/* LaunchList Widget Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10 mb-12">
            <div className="launchlist-widget" data-key-id="L3Xf64" data-height="180px"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl p-6 border border-pink-500/30">
              <div className="text-3xl mb-4">🎁</div>
              <h3 className="text-lg font-black text-white mb-2">FREE STARTING CREDITS</h3>
              <p className="text-gray-300 text-sm">$100 in prediction credits when you join beta</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-black text-white mb-2">ZERO PLATFORM FEES</h3>
              <p className="text-gray-300 text-sm">Keep 100% of your winnings during beta</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-black text-white mb-2">EXCLUSIVE TOURNAMENTS</h3>
              <p className="text-gray-300 text-sm">Beta-only competitions with massive prizes</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-xl sm:text-2xl font-black text-white">12,847</div>
              <div className="text-xs text-gray-400">Beta Users</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-xl sm:text-2xl font-black text-white">$2.4M</div>
              <div className="text-xs text-gray-400">Predictions Made</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-xl sm:text-2xl font-black text-white">94.2%</div>
              <div className="text-xs text-gray-400">Accuracy Rate</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-xl sm:text-2xl font-black text-white">4.9/5</div>
              <div className="text-xs text-gray-400">User Rating</div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Secure & Verified Platform</span>
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
      <footer className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 text-center py-2 text-xs text-gray-400">
        © 2025 ZenoStake. Precision prediction platform.
      </footer>
    </div>
  )
}
