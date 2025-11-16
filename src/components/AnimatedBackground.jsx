import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

// Detect mobile device
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

// Floating particles component
function FloatingParticles({ count = 100, color = '#90EE90' }) {
  const ref = useRef()
  
  // Generate random positions in a sphere
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    const radius = Math.random() * 1.5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    positions[i] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i + 2] = radius * Math.cos(phi)
  }

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower rotation on mobile for better performance
      const speed = isMobile() ? 0.5 : 1
      ref.current.rotation.x -= (delta / 10) * speed
      ref.current.rotation.y -= (delta / 15) * speed
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={isMobile() ? 0.008 : 0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Rotating cube component (for tofu representation)
function RotatingCube({ position = [0, 0, 0], color = '#228B22' }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Tea leaf particles
function TeaLeaves({ count = 50 }) {
  const ref = useRef()
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#228B22"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

// Main AnimatedBackground component
const AnimatedBackground = ({ 
  type = 'particles', 
  color = '#90EE90',
  intensity = 'low' 
}) => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(isMobile())
    const handleResize = () => setMobile(isMobile())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Reduce particle count on mobile for better performance
  const baseCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50
  const particleCount = mobile ? Math.floor(baseCount * 0.5) : baseCount

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%' }}
        dpr={mobile ? 1 : 2} // Lower pixel ratio on mobile
        performance={{ min: 0.5 }} // Reduce quality on low-end devices
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {type === 'particles' && (
            <FloatingParticles count={particleCount} color={color} />
          )}
          {type === 'cube' && (
            <RotatingCube position={[0, 0, 0]} color={color} />
          )}
          {type === 'tea' && <TeaLeaves count={particleCount} />}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default AnimatedBackground

