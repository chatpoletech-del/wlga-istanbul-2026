import { useState } from "react";
import CertLanding from "../components/Certification/CertLanding";
import QuizEngine from "../components/Certification/QuizEngine";
import ScoreReport from "../components/Certification/ScoreReport";
import CertificateViewer from "../components/Certification/CertificateViewer";
import { COURSES } from "../data/certificationData";

export default function Certification() {
  const [view, setView] = useState("landing");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userName, setUserName] = useState("");
  const [scoreResult, setScoreResult] = useState(null);

  const handleStartQuiz = (courseId, name) => {
    setSelectedCourse(COURSES.find((c) => c.id === courseId));
    setUserName(name);
    setView("quiz");
  };

  const handleQuizComplete = (result) => {
    setScoreResult(result);
    setView("report");
  };

  const handleDownloadCert = () => {
    if (scoreResult?.passed) setView("certificate");
  };

  const handleRetake = () => {
    setScoreResult(null);
    setView("quiz");
  };

  const handleBack = () => {
    setScoreResult(null);
    setSelectedCourse(null);
    setView("landing");
  };

  return (
    <div className="min-h-screen bg-[#0A0E14]">
      {view === "landing" && <CertLanding onStartQuiz={handleStartQuiz} />}
      {view === "quiz" && selectedCourse && (
        <QuizEngine
          courseId={selectedCourse.id}
          userName={userName}
          onComplete={handleQuizComplete}
          onBack={handleBack}
        />
      )}
      {view === "report" && scoreResult && (
        <ScoreReport
          scoreResult={scoreResult}
          userName={userName}
          courseName={selectedCourse?.title}
          courseId={selectedCourse?.id}
          onDownloadCert={handleDownloadCert}
          onRetake={handleRetake}
          onBack={handleBack}
        />
      )}
      {view === "certificate" && scoreResult?.passed && (
        <CertificateViewer
          userName={userName}
          courseName={selectedCourse?.title}
          courseId={selectedCourse?.id}
          score={scoreResult.percentage}
          grade={scoreResult.grade}
          onBack={() => setView("report")}
        />
      )}
    </div>
  );
}
