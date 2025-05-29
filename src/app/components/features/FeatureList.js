'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from './FeatureCard'

const ITEMS_PER_PAGE = 6

const FeatureList = () => {
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.post('https://scrapsnap-server.onrender.com/news')
        const fetched = res.data?.data || []

        // Sort: articles with images first
        const sorted = [...fetched].sort((a, b) => {
          if (a.image && !b.image) return -1
          if (!a.image && b.image) return 1
          return 0
        })

        setArticles(sorted)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [])

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentArticles.map((article, i) => (
          <NewsCard key={i} {...article} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FeatureList
