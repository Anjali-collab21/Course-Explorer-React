import { useState } from 'react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import coursesData from '../data/courses.json'
import SubTopic from '../components/SubTopic'
import Breadcrumbs from '../components/Breadcrumbs'
import ReactMarkdown from "react-markdown";

const home = () => {
  const [courses] = useState(coursesData || []);
   const [selectedCourseId, setSelectedCourseId] = useState(() => localStorage.getItem("selectedCourseId") || null)
   const [selectedTopicId, setSelectedTopicId] = useState(() => localStorage.getItem("selectedTopicId") || null)
   const [selectedSubtopicId, setSelectedSubtopicId] = useState(() => localStorage.getItem("selectedSubtopicId") || null)


  const selectedCourse = courses.find(c => String(c.id) === String(selectedCourseId));
  const selectedTopic = selectedCourse?.topics?.find(t => String(t.id) === String(selectedTopicId));
  const selectedSubtopic = selectedTopic?.subtopics?.find(s => String(s.id) === String(selectedSubtopicId));


  function updateSelectedCourse(id) {
    setSelectedCourseId(id);
    if (id === null) {
      localStorage.removeItem("selectedCourseId");
    } else {
      localStorage.setItem("selectedCourseId", String(id));
    }
    // also reset topic and subtopic when changing course
    setSelectedTopicId(null);
    setSelectedSubtopicId(null);
    localStorage.removeItem("selectedTopicId");
    localStorage.removeItem("selectedSubtopicId");
  }

  function updateSelectedTopic(id) {
    setSelectedTopicId(id);
    if (id === null) {
      localStorage.removeItem("selectedTopicId");
    } else {
      localStorage.setItem("selectedTopicId", String(id));
    }
    // reset subtopic when changing topic
    setSelectedSubtopicId(null);
    localStorage.removeItem("selectedSubtopicId");
  }

  function updateSelectedSubtopic(id) {
    setSelectedSubtopicId(id);
    if (id === null) {
      localStorage.removeItem("selectedSubtopicId");
    } else {
      localStorage.setItem("selectedSubtopicId", String(id));
    }
  }
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1 min-w-0">
        <Sidebar courses={courses} selectedCourseId={selectedCourseId}
        selectedTopicId={selectedTopicId}
        selectedSubtopicId={selectedSubtopicId}
         onSelectCourse={updateSelectedCourse}
        onSelectTopic={updateSelectedTopic}
         onSelectSubtopic={updateSelectedSubtopic} />
      </div>

      <main className="md:col-span-3 min-w-0">
          <Breadcrumbs
          course={selectedCourse}
          topic={selectedTopic}
          subtopic={selectedSubtopic}
          onClickCourse={() => {
            // keep course selected but close topic and subtopic
            updateSelectedTopic(null);
            updateSelectedSubtopic(null);
          }}
          onClickTopic={() => {
            // course and topic selected but close subtopic
            updateSelectedSubtopic(null);
          }}
        />
        <div className="bg-white rounded-lg shadow p-4 min-h-[40vh]">
          {selectedSubtopic ? (
            <SubTopic selectedSubtopic={selectedSubtopic} />
          ) : selectedTopic ? (
            // topic-level content
            <article className="bg-white  p-6">
              <ReactMarkdown>
                {selectedTopic.content && selectedTopic.description || selectedTopic.title || ""}
              </ReactMarkdown>
            </article>
          ) : selectedCourse ? (
            // course-level content
            <article className="bg-white  p-6">
              <ReactMarkdown>
                {selectedCourse.description || selectedCourse.title || ""}
              </ReactMarkdown>
            </article>
          ) : (
            // nothing selected
            <div className="text-gray-600">Select a course from the left to begin.</div>
          )}

        </div>
        
      </main>
  </div>
  )
}

export default home