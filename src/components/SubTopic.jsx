import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function SubTopic({ selectedSubtopic }) {
  if (!selectedSubtopic) {
    return (
      <div className="text-gray-600 italic">
        Select a subtopic to view its content.
      </div>
    )
  }

  return (
    <article className="prose max-w-none">
      <h1 className="text-2xl font-semibold text-gray-900">{selectedSubtopic.title}</h1>
      <ReactMarkdown>{selectedSubtopic.content || ''}</ReactMarkdown>
    </article>
  )
}