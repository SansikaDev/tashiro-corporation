import { useState, useEffect } from 'react'

const VideoBackground = ({ videoSrc, fallbackImage }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [useVideo, setUseVideo] = useState(true)

  useEffect(() => {
    // Check if video can play and if on mobile (reduce video usage on mobile for performance)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768

    if (isMobile) {
      setUseVideo(false)
      return
    }

    if (videoSrc) {
      const video = document.createElement('video')
      video.src = videoSrc
      video.load()
      
      const canPlay = video.canPlayType('video/mp4')
      if (!canPlay) {
        setUseVideo(false)
      }
    } else {
      setUseVideo(false)
    }
  }, [videoSrc])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setUseVideo(false)
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {useVideo ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoLoaded && fallbackImage && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${fallbackImage})` }}
            />
          )}
        </>
      ) : (
        fallbackImage && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )
      )}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
    </div>
  )
}

export default VideoBackground

