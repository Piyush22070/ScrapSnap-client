'use client'

import React from 'react'

const NewsCard = ({
  title,
  summary,
  url,
  image,
  source,
  date,
  category
}) => {
  console.log('Received date:', date)

  const openArticle = () => {
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{summary}</p>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <span>{'Today'}</span>
          <span>{source}</span>
        </div>

        {category && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>

      <button
        onClick={openArticle}
        className="mt-4 text-sm text-blue-600 hover:underline self-start"
      >
        Read Full Article →
      </button>
    </div>
  )
}

export default NewsCard
