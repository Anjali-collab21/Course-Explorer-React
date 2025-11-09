import React, { useMemo, useState } from "react";
import CoursesData from "../data/courses.json";

export default function Sidebar({
  courses = CoursesData,
  selectedCourseId,
  selectedTopicId,
  selectedSubtopicId,
  onSelectCourse = () => {},
  onSelectTopic = () => {},
  onSelectSubtopic = () => {},
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query || query.trim() === "") return courses;
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      if (c.title?.toLowerCase().includes(q)) return true;
      if (c.subtitle?.toLowerCase().includes(q)) return true;
      return (c.topics || []).some(
        (t) =>
          t.title?.toLowerCase().includes(q) ||
          (t.subtopics || []).some((s) => s.title?.toLowerCase().includes(q))
      );
    });
  }, [courses, query]);

  return (
    <aside className="w-full bg-white rounded-lg p-4" aria-label="Course list">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Courses</h2>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses, topics or subtopics"
        className="w-full px-3 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        aria-label="Search courses and topics"
      />

      <div className="space-y-4 max-h-[68vh] overflow-auto pr-2">
        {filtered.length === 0 ? (
          <div className="text-sm text-gray-500">No course found</div>
        ) : (
          filtered.map((course) => {
            const isCourseOpen = String(course.id) === String(selectedCourseId);
            return (
              <div
                key={course.id}
                className="bg-white border rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => onSelectCourse(course.id)}
                  className={`w-full text-left px-4 py-3 flex items-start justify-between gap-4 ${
                    isCourseOpen ? "bg-indigo-50" : "hover:bg-gray-50"
                  }`}
                  aria-expanded={isCourseOpen}
                >
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {course.title}
                    </div>
                    {course.subtitle && (
                      <div className="text-xs text-gray-500 mt-1">
                        {course.subtitle}
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-gray-400 mt-1">
                    {(course.topics || []).length} topics
                  </div>
                </button>

                {isCourseOpen && (
                  <div className="px-3 py-2 bg-white border-t">
                    {(course.topics || []).length === 0 ? (
                      <div className="text-sm text-gray-500 px-2 py-1">
                        No topics yet.
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {(course.topics || []).map((topic) => {
                          const isTopicOpen =
                            String(topic.id) === String(selectedTopicId);
                          return (
                            <li key={topic.id} className="pl-1">
                              <div
                                className={`rounded-md ${
                                  isTopicOpen ? "bg-indigo-50" : ""
                                }`}
                              >
                                <button
                                  onClick={() => onSelectTopic(topic.id)}
                                  className="w-full text-left flex items-center gap-3 px-3 py-2"
                                  aria-expanded={isTopicOpen}
                                >
                                  {/* left accent bar */}
                                  <span
                                    className="inline-block w-1.5 h-6 rounded bg-indigo-300"
                                    aria-hidden
                                  />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-800">
                                      {topic.title}
                                    </div>
                                    {topic.description && (
                                      <div className="text-xs text-gray-500 mt-0.5">
                                        {topic.description}
                                      </div>
                                    )}
                                  </div>

                                  <div className="text-xs text-gray-400 mt-0.5">
                                    {(topic.subtopics || []).length} subtopics
                                  </div>
                                </button>
                              </div>

                              {/* Subtopics*/}
                              {isTopicOpen && (
                                <ul className="mt-2 pl-6 space-y-1">
                                  {(topic.subtopics || []).length === 0 ? (
                                    <li className="text-xs text-gray-500">
                                      No subtopics yet.
                                    </li>
                                  ) : (
                                    (topic.subtopics || []).map((sub) => {
                                      const isSub =
                                        String(sub.id) ===
                                        String(selectedSubtopicId);
                                      return (
                                        <li
                                          key={sub.id}
                                          className="flex items-center"
                                        >
                                          <button
                                            onClick={() =>
                                              onSelectSubtopic(sub.id)
                                            }
                                            className={`flex items-center w-full gap-2 py-1 px-2 text-left rounded-md ${
                                              isSub
                                                ? "bg-indigo-100"
                                                : "hover:bg-gray-100"
                                            }`}
                                            aria-current={
                                              isSub ? "true" : undefined
                                            }
                                          >
                                            {/* small dot for subtopic */}
                                            <span
                                              className={`w-2 h-2 rounded-full ${
                                                isSub
                                                  ? "bg-indigo-600"
                                                  : "bg-indigo-300"
                                              }`}
                                              aria-hidden
                                            />
                                            <span className="text-sm text-gray-700">
                                              {sub.title}
                                            </span>
                                          </button>
                                        </li>
                                      );
                                    })
                                  )}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
