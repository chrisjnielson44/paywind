"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function StudentLoans1() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 700)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[100%] ring-1 ring-zinc-400" />
}

export function StudentLoans2() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 700)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[100%] ring-1 ring-zinc-400" />
}
