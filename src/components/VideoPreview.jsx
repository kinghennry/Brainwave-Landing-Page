import { gsap } from 'gsap'
import { useState, useRef, useEffect } from 'react'

export default function VideoPreview({ children }) {
  const [isHovering, setIsHovering] = useState(false)

  const sectionRef = useRef(null) // Reference for the container section
  const contentRef = useRef(null) // Reference for the inner content
  return (
    <div>
      <h1>VideoPreview components</h1>
    </div>
  )
}
