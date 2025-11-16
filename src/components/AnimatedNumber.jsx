import { useState, useEffect, useRef } from 'react'

const AnimatedNumber = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  decimals = 0,
  className = ''
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  // Parse the value to extract number and suffix
  const parseValue = (val) => {
    if (typeof val === 'string') {
      // Handle formats like "205M+", "99%", "27% ↑"
      const match = val.match(/(\d+(?:\.\d+)?)([^\d]*)/)
      if (match) {
        const num = parseFloat(match[1])
        const remainingSuffix = match[2] || suffix
        return { number: num, suffix: remainingSuffix }
      }
      return { number: parseFloat(val) || 0, suffix: suffix }
    }
    return { number: val, suffix: suffix }
  }

  const { number: targetValue, suffix: finalSuffix } = parseValue(value)
  
  // If suffix contains "M" (millions), we keep the number as-is for animation
  // The component will display it with the suffix

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (targetValue - startValue) * easeOutQuart
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, targetValue, duration])

  const formatNumber = (num) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString()
    }
    return num.toFixed(decimals).toLocaleString()
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {finalSuffix}
    </span>
  )
}

export default AnimatedNumber

