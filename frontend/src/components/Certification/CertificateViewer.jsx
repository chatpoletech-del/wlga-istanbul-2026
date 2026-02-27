import { useMemo } from "react";
import { generateCertificateId } from "../../data/certificationData";
import { downloadCertificateAsPDF } from "../../utils/certificateGenerator";

const CERT_ELEMENT_ID = "wlga-certificate-element";

export default function CertificateViewer({ userName, courseName, courseId, score, grade, onBack }) {
  const certId = useMemo(() => generateCertificateId(userName, courseId), [userName, courseId]);
  const issueDate = useMemo(
    () =>
      new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    []
  );

  const levelMap = {
    "CERT-001": "Foundation",
    "CERT-002": "Professional",
    "CERT-003": "Advanced",
  };
  const level = levelMap[courseId] || "Professional";

  const handleDownload = () => {
    const fileName = `WLGA_Certificate_${userName.replace(/\s/g, "_")}_${courseId}.pdf`;
    downloadCertificateAsPDF(CERT_ELEMENT_ID, fileName);
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div
          id={CERT_ELEMENT_ID}
          className="rounded-xl overflow-hidden border border-[#1E2A3A] bg-[#FEFCF7] text-[#0A0E14]"
          style={{ width: 1000, height: 700 }}
        >
          <div className="h-full flex flex-col p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm font-semibold text-[#0A0E14]">
                WORLD LIQUID GAS ASSOCIATION
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8A020] to-amber-700 flex items-center justify-center text-[10px] font-bold text-center leading-tight text-amber-950">
                WLGA<br />CERTIFIED
              </div>
            </div>
            <div className="border-t-2 border-b-2 border-[#E8A020] py-4 my-2 text-center">
              <h2 className="text-2xl font-bold tracking-wide">CERTIFICATE OF ACHIEVEMENT</h2>
            </div>
            <p className="text-center text-slate-600 mb-2">This certifies that</p>
            <div className="border-2 border-amber-300 rounded-lg py-3 px-6 mb-2 text-center">
              <p className="text-xl font-semibold text-[#0A0E14]">{userName}</p>
            </div>
            <p className="text-center text-slate-600 text-sm mb-4">
              has successfully completed the assessment for:
            </p>
            <p className="text-center font-semibold text-lg text-[#0A0E14]">{courseName}</p>
            <p className="text-center text-slate-600 text-sm mb-4">Level: {level}</p>
            <p className="text-center text-slate-600 text-sm mb-2">
              Score: {score}% — Grade: {grade}
            </p>
            <p className="text-center text-xs text-slate-500 mb-1">
              Certificate ID: {certId}
            </p>
            <p className="text-center text-xs text-slate-500 mb-6">Issue Date: {issueDate}</p>
            <div className="mt-auto flex justify-between items-end pt-4 border-t border-slate-200">
              <div>
                <div className="text-xs font-semibold text-slate-600">James Rockall</div>
                <div className="text-xs text-slate-500">CEO, WLGA</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Verified Certificate</div>
                <div className="text-xs text-amber-700">worldliquidgas.org</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={handleDownload}
            className="px-6 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg hover:opacity-90"
          >
            ⬇ Download Certificate (PDF)
          </button>
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2.5 border border-slate-500 text-slate-400 rounded-lg hover:bg-[#1E2A3A]"
          >
            ← Back to Results
          </button>
        </div>
      </div>
    </div>
  );
}
