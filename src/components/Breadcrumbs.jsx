import React from 'react';

function Breadcrumbs({
  course,
  topic,
  subtopic,
  onClickCourse = () => {},
  onClickTopic = () => {}
}) {
  // If nothing selected show nothing
  if (!course) return null;

  return (
    <nav
      className="text-sm text-gray-600 mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {/* course - always present when course selected */}
        <li>
          <button
            type="button"
            onClick={onClickCourse}
            className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded px-1"
            title={`Go to course ${course.title}`}
          >
            {course.title}
          </button>
        </li>

        {/* separator */}
        {topic && (
          <li aria-hidden="true" className="text-gray-400">›</li>
        )}

        {/* topic - if selected */}
        {topic && (
          <li>
            <button
              type="button"
              onClick={onClickTopic}
              className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded px-1"
              title={`Go to topic ${topic.title}`}
            >
              {topic.title}
            </button>
          </li>
        )}

        {/* separator */}
        {subtopic && (
          <li aria-hidden="true" className="text-gray-400">›</li>
        )}

        {/* subtopic - if selected */}
        {subtopic && (
          <li>
            <span
              className="text-gray-800 font-medium px-1"
              aria-current="page"
              title={subtopic.title}
            >
              {subtopic.title}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;