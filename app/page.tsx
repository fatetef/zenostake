"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  Wallet,
  Copy,
  Check,
  X,
  Users,
  Shield,
  Flame,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Wallet types
type WalletType = "phantom" | "metamask" | "trust" | "solflare" | "coinbase"

interface WalletInfo {
  name: string
  icon: string
  color: string
  installed: boolean
}

export default function ZenoStakeLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Wallet connection state
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [copied, setCopied] = useState(false)

  // Wallet configurations
  const wallets: Record<WalletType, WalletInfo> = {
    phantom: {
      name: "Phantom",
      icon: "👻",
      color: "from-purple-500 to-indigo-600",
      installed: typeof window !== "undefined" && "solana" in window && (window as any).solana?.isPhantom,
    },
    metamask: {
      name: "MetaMask",
      icon: "🦊",
      color: "from-orange-500 to-yellow-600",
      installed: typeof window !== "undefined" && "ethereum" in window && (window as any).ethereum?.isMetaMask,
    },
    trust: {
      name: "Trust Wallet",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-600",
      installed: typeof window !== "undefined" && "ethereum" in window && (window as any).ethereum?.isTrust,
    },
    solflare: {
      name: "Solflare",
      icon: "☀️",
      color: "from-yellow-500 to-orange-600",
      installed: typeof window !== "undefined" && "solflare" in window,
    },
    coinbase: {
      name: "Coinbase",
      icon: "🔵",
      color: "from-blue-500 to-indigo-600",
      installed: typeof window !== "undefined" && "ethereum" in window && (window as any).ethereum?.isCoinbaseWallet,
    },
  }

  const predictionCards = [
    {
      category: "Economics",
      difficulty: "Medium",
      question: "What will the US inflation rate be in December 2025?",
      crowdPrediction: "3.2%",
      prizePool: "$2,500",
      participants: "1,247",
      timeLeft: "6 months",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "📈",
    },
    {
      category: "Markets",
      difficulty: "Hard",
      question: "What will be the closing price of Bitcoin on New Year's Eve?",
      crowdPrediction: "$98,450",
      prizePool: "$5,000",
      participants: "2,103",
      timeLeft: "5 months",
      gradient: "from-orange-500/20 to-yellow-500/20",
      icon: "₿",
    },
    {
      category: "Climate",
      difficulty: "Expert",
      question: "What will be the global average temperature anomaly this year?",
      crowdPrediction: "+1.34°C",
      prizePool: "$1,800",
      participants: "892",
      timeLeft: "4 months",
      gradient: "from-red-500/20 to-pink-500/20",
      icon: "🌡️",
    },
    {
      category: "Demographics",
      difficulty: "Easy",
      question: "How many new users will join major social platforms in Q3?",
      crowdPrediction: "47.2M",
      prizePool: "$3,200",
      participants: "1,856",
      timeLeft: "2 months",
      gradient: "from-purple-500/20 to-indigo-500/20",
      icon: "👥",
    },
  ]

  const testimonials = [
    {
      name: "Jordan",
      role: "DeFi Enthusiast",
      quote:
        "Playing ZenoStake feels like running simulations on reality. Every question is a new experiment in understanding the hivemind.",
      avatar: "/avatars/alex-chen.jpg",
      rating: 5,
    },
    {
      name: "David",
      role: "Crypto Analyst",
      quote:
        "Ain't no insider alpha, just pure raw crowd psyops. ZenoStake had me rethinking reality—turns out the best edge is knowing how NPCs tick.",
      avatar: "/avatars/sarah-kim.jpg",
      rating: 5,
    },
    {
      name: "Alex",
      role: "Prediction Expert",
      quote:
        "Finally, a platform where being almost right actually pays. The precision-based rewards changed everything for me.",
      avatar: "/avatars/marcus-rodriguez.jpg",
      rating: 5,
    },
    {
      name: "Sarah",
      role: "Quantitative Trader",
      quote:
        "ZenoStake's slide-to-stake mechanism is genius. It's so intuitive that I find myself making more thoughtful predictions.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
    },
    {
      name: "Marcus",
      role: "Data Scientist",
      quote:
        "The precision rewards system actually incentivizes accuracy over gambling. This is the future of prediction markets.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
    },
    {
      name: "Emma",
      role: "Financial Advisor",
      quote:
        "I've tried every prediction platform out there. ZenoStake is the only one that rewards skill consistently.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Wallet connection functions
  const connectWallet = async (walletType: WalletType) => {
    setIsConnecting(true)

    try {
      let address = ""

      switch (walletType) {
        case "phantom":
          if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
            try {
              const response = await (window as any).solana.connect()
              address = response.publicKey.toString()
            } catch (err) {
              console.error("Phantom connection error:", err)
            }
          }
          break

        case "metamask":
          if (typeof window !== "undefined" && (window as any).ethereum?.isMetaMask) {
            try {
              const accounts = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
              })
              address = Array.isArray(accounts) ? accounts[0] : ""
            } catch (err) {
              console.error("Metamask connection error:", err)
            }
          }
          break

        case "trust":
          if (typeof window !== "undefined" && (window as any).ethereum?.isTrust) {
            try {
              const accounts = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
              })
              address = Array.isArray(accounts) ? accounts[0] : ""
            } catch (err) {
              console.error("Trust Wallet connection error:", err)
            }
          }
          break

        case "solflare":
          if (typeof window !== "undefined" && (window as any).solflare) {
            try {
              await (window as any).solflare.connect()
              address = (window as any).solflare.publicKey.toString()
            } catch (err) {
              console.error("Solflare connection error:", err)
            }
          }
          break

        case "coinbase":
          if (typeof window !== "undefined" && (window as any).ethereum?.isCoinbaseWallet) {
            try {
              const accounts = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
              })
              address = Array.isArray(accounts) ? accounts[0] : ""
            } catch (err) {
              console.error("Coinbase connection error:", err)
            }
          }
          break
      }

      if (address) {
        setConnectedWallet(wallets[walletType].name)
        setWalletAddress(address)
        setIsWalletModalOpen(false)
      }
    } catch (error) {
      console.error("Wallet connection failed:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setConnectedWallet(null)
    setWalletAddress(null)
  }

  const copyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

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
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isVisible ? "bg-black/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/trepa-icon-white.svg" alt="ZenoStake" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl sm:text-2xl font-bold text-white">ZENOSTAKE</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                How It Works
              </Link>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Features
              </Link>
              <Link href="/pools" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Pools
              </Link>
              <Link href="/beta" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Beta
              </Link>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              {connectedWallet ? (
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-white hidden sm:inline">{connectedWallet}</span>
                  <button
                    onClick={copyAddress}
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span className="hidden sm:inline">{walletAddress ? formatAddress(walletAddress) : ""}</span>
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={disconnectWallet}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsWalletModalOpen(true)}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-xs sm:text-sm"
                >
                  Connect Wallet
                </Button>
              )}

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

      {/* Wallet Modal */}
      {isWalletModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900/95 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-md max-w-md w-full relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Connect Wallet
              </h3>
              <button
                onClick={() => setIsWalletModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-3">
              {Object.entries(wallets).map(([key, wallet]) => (
                <button
                  key={key}
                  onClick={() => connectWallet(key as WalletType)}
                  disabled={!wallet.installed || isConnecting}
                  className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-300 ${
                    wallet.installed
                      ? "border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10"
                      : "border-gray-600/20 bg-gray-800/20 opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center text-lg sm:text-xl">
                      {wallet.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-white text-sm sm:text-base">{wallet.name}</div>
                      <div className="text-xs text-gray-400">
                        {wallet.installed ? "Ready to connect" : "Not installed"}
                      </div>
                    </div>
                  </div>
                  {wallet.installed && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                </button>
              ))}
            </div>

            {isConnecting && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-white">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="font-medium text-sm">Connecting...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white">Real Questions,</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Real Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
              Join thousands making <strong className="text-white">accurate</strong> predictions on topics that matter.
              Every forecast is a chance to prove your analytical skills.
            </p>

            <div className="mb-8 sm:mb-12">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-bold rounded-full">
                ZenoStake — Slide. Stake. Earn. Effortlessly.
              </Badge>
            </div>

            <div className="flex justify-center mb-12 sm:mb-16">
              <Link href="/waiting-list">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full border-0 shadow-2xl shadow-pink-500/30"
                >
                  <Users className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                  JOIN BETA
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Prediction Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto animate-slide-up">
            {predictionCards.map((card, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${card.gradient} border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg sm:text-xl">{card.icon}</span>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${
                          card.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : card.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : card.difficulty === "Hard"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {card.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                        {card.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6 leading-tight group-hover:text-pink-300 transition-colors">
                    {card.question}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Crowd Prediction</div>
                      <div className="text-lg sm:text-xl font-bold text-white">{card.crowdPrediction}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Prize Pool</div>
                      <div className="text-lg sm:text-xl font-bold text-green-400">{card.prizePool}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{card.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{card.timeLeft}</span>
                    </div>
                  </div>

                  <Link href="/pools">
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0 rounded-lg font-medium text-sm transition-all duration-300">
                      Make Your Prediction
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              SEE <span className="text-pink-400">ZENOSTAKE</span> IN ACTION
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how precision predictions work and discover why accuracy pays more than being exactly right
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-500/20 backdrop-blur-sm shadow-2xl">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1095359860?h=66570ce68f&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="ZENOSTAKE"
                />
              </div>

              {/* Video Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 text-xs font-bold">
                  <Play className="w-3 h-3 mr-1" />
                  LIVE DEMO
                </Badge>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-pink-400 mb-2">01</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Slide to Predict</h3>
                  <p className="text-sm text-gray-300">
                    Use our intuitive slider to make precise predictions across a spectrum of values
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-purple-400 mb-2">02</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Stake Your Prediction</h3>
                  <p className="text-sm text-gray-300">
                    Put your money where your analysis is and compete with other predictors
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-2">03</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Earn Based on Accuracy</h3>
                  <p className="text-sm text-gray-300">
                    Get rewarded proportionally - the closer you are, the more you earn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Loved &
              </span>
              <br />
              <span className="text-white">Trusted</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              See what our community of precision predictors has to say
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 backdrop-blur-sm transition-all duration-500 ${
                    index === currentTestimonial % 3 ? "ring-2 ring-pink-400 scale-105" : "opacity-70"
                  }`}
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200 mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              FREQUENTLY ASKED
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                QUESTIONS
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is ZenoStake?",
                answer:
                  "ZenoStake is a next-gen DeFi platform that lets users stake tokens through a frictionless slide-to-stake mechanism. Inspired by Zeno's paradox of motion, it creates a seamless flow between token selection and staking — minimizing clicks, maximizing engagement.",
              },
              {
                question: "How does the precision prediction system work?",
                answer:
                  "Unlike traditional binary prediction markets, ZenoStake rewards accuracy over luck. You can make precise predictions across a spectrum of values, and your payout is proportional to how close your prediction is to the actual result.",
              },
              {
                question: "What makes ZenoStake different from other prediction platforms?",
                answer:
                  "ZenoStake introduces infinite precision predictions, skill-based rewards, and a slide-to-stake mechanism that makes participation effortless. You don't need to be exactly right to earn - being close counts too.",
              },
              {
                question: "Is ZenoStake secure?",
                answer:
                  "Yes, ZenoStake uses multi-signature wallets, audited smart contracts, and institutional-grade security measures. All funds are protected by industry-leading security protocols.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Simply connect your wallet, join our beta program, and start making predictions. You'll receive $100 in starting credits and pay zero platform fees during the beta period.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-black text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-20 border border-white/10">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-lg lg:text-xl font-bold rounded-full">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              EXCLUSIVE BETA ACCESS
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              READY TO FLEX YOUR
              <br />
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                FORESIGHT?
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed">
              Join thousands of predictors who are already earning from their accuracy.
              <strong className="text-white"> The closer you predict, the more you earn.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
              <Link href="/waiting-list">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-2xl font-black rounded-full border-0 shadow-2xl shadow-pink-500/40 w-full sm:w-auto"
                >
                  <Users className="mr-2 sm:mr-3 lg:mr-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  JOIN BETA NOW
                  <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </Button>
              </Link>
              <div className="text-center">
                <div className="text-xs sm:text-sm text-gray-400 mb-2">Join 12,847+ beta users</div>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span className="text-xs sm:text-sm text-green-400 font-medium">Secure & Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 md:mb-0">
              <Image
                src="/trepa-icon-white.svg"
                alt="ZenoStake"
                width={32}
                height={32}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-xl sm:text-2xl font-bold text-white">ZENOSTAKE</span>
            </div>

            <div className="flex items-center space-x-6 sm:space-x-8">
              <Link
                href="/waiting-list"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <span className="text-sm sm:text-base">Join Waiting List</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-gray-400">
            <p>© 2025 ZenoStake. Precision prediction platform.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `}</style>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}
