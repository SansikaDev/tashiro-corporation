import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'TASHIRO CORPORATION'

  useEffect(() => {
    // Typewriter effect for text
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 100) // Speed of typing

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            if (onLoadComplete) onLoadComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center w-full max-w-2xl px-4">
        {/* Company Name with Typewriter Effect in Green */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-wide whitespace-nowrap">
          <span className="text-primary">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h1>

        {/* Left to Right Progress Animation */}
        <div className="relative w-full max-w-md h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          {/* Animated shimmer effect */}
          <div
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
            style={{ left: `${progress - 20}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

