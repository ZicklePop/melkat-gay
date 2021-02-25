import { useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

const useWindowSize = () => {
  const [size, setSize] = useState({ height: 0, width: 0 })
  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('resize', handleResize)
      handleResize()
    }
    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  return size
}

export default useWindowSize
