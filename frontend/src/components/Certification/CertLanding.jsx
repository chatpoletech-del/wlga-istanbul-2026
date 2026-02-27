import { useState } from "react";
import { COURSES, WLGA_BRANDING } from "../../data/certificationData";

export default function CertLanding({ onStartQuiz }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [userName, setUserName] = useState("");

  const openModal = (courseId) => {
    setSelectedCourseId(courseId);
    setModalOpen(true);
    setUserName("");
  };

  const handleBegin = () => {
    const name = userName?.trim();
    if (!name) return;
    onStartQuiz(selectedCourseId, name);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl tracking-wider text-[#E8A020] mb-2">
          WLGA CERTIFICATION CENTRE
        </h1>
        <p className="text-slate-400 mb-10">
          Test your LPG industry knowledge. Earn your WLGA digital certificate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="rounded-xl border border-[#1E2A3A] bg-[#111720] p-6 flex flex-col"
            >
              <span className="text-4xl mb-3">{course.badge}</span>
              <h2 className="text-lg font-bold text-white mb-2">{course.title}</h2>
              <span
                className="inline-block text-xs font-medium px-2 py-0.5 rounded mb-2 w-fit"
                style={{ backgroundColor: course.color + "22", color: course.color }}
              >
                {course.level}
              </span>
              <p className="text-xs text-slate-500 mb-2">{course.duration}</p>
              <p className="text-sm text-slate-400 flex-1 mb-4">{course.description}</p>
              <button
                type="button"
                onClick={() => openModal(course.id)}
                className="w-full py-2.5 font-semibold rounded-lg text-[#0A0E14] transition-opacity hover:opacity-90"
                style={{ backgroundColor: course.color }}
              >
                Start Assessment →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500">
          Pass mark: {WLGA_BRANDING.passMark}% | {WLGA_BRANDING.totalQuestions} questions | ~15 minutes
        </p>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-[#111720] border border-[#1E2A3A] rounded-xl max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Enter your full name to personalise your certificate
            </h3>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 bg-[#0A0E14] border border-[#1E2A3A] rounded-lg text-white placeholder-slate-500 focus:border-[#E8A020] focus:outline-none mb-4"
              onKeyDown={(e) => e.key === "Enter" && handleBegin()}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleBegin}
                disabled={!userName?.trim()}
                className="flex-1 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg disabled:opacity-50 hover:opacity-90"
              >
                Begin Assessment
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2.5 border border-slate-600 text-slate-400 rounded-lg hover:bg-[#1E2A3A]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
