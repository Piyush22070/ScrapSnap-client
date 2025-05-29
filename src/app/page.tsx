'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeaturesSection from './components/features/FeaturesSection'
import Loading from './components/loading'

export default function HomePage() {
  const [loading, setLoading] = useState(false)
  const [scraped, setScraped] = useState(false)

  const handleScrape = async () => {
    setLoading(true)
    setScraped(false)
    await new Promise((r) => setTimeout(r, 5000))
    setLoading(false)
    setScraped(true)
  }

  return (
    <main className="min-h-screen flex bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg py-16 px-6 sm:px-12 lg:px-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 leading-tight">
            Stay ahead with breaking news delivered fast
          </h1>

          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto mb-8">
            Get the latest updates from BBC News, curated and scraped for you instantly.
          </p>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Loading />
              </motion.div>
            ) : (
              <motion.div
                key="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={handleScrape}
                  disabled={loading}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-400"
                >
                  Scrape Latest News
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Animated Features Section */}
        <AnimatePresence>
          {scraped && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FeaturesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
