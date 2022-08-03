import React from 'react'
import { useSearchPrepodQuery } from '../store/bsuir/bsuir.api'

export default function Home() {
  const {isLoading, isError, data}= useSearchPrepodQuery("s-nesterenkov")
  return (
    <div>Home</div>
  )
}
