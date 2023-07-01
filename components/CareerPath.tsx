"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

const CareerPath = () => {
  const careerPath = useMemo(
    () => ["Programmer", "Data Scientist", "Web Developer", "Mobile Developer"],
    []
  )

  const [selectedCareerPath, setSelectedCareerPath] = useState(
    careerPath[Math.floor(Math.random() * careerPath.length)]
  )

  const swithCareerPath = useCallback(() => {
    const newCareerPath = careerPath.filter(
      (path) => path !== selectedCareerPath
    )
    setSelectedCareerPath(
      newCareerPath[Math.floor(Math.random() * newCareerPath.length)]
    )
  }, [careerPath, selectedCareerPath])

  useEffect(() => {
    const interval = setInterval(() => {
      swithCareerPath()
    }, 3000)
    return () => clearInterval(interval)
  }, [swithCareerPath])

  return (
    <span
      className="cursor-pointer rounded-md border border-indigo-500  px-2 py-1 text-indigo-500 transition-all duration-300 will-change-auto	hover:border-indigo-600 hover:text-indigo-600"
      onClick={() => swithCareerPath()}
    >
      {selectedCareerPath}
    </span>
  )
}

export default CareerPath
