/**
 * Generates a PDF from an HTML certificate element using html2canvas + jsPDF.
 * Used only when user has passed (≥70%).
 */

export async function downloadCertificateAsPDF(elementId, fileName) {
  try {
    const { default: html2canvas } = await import("html2canvas");
    const { default: jsPDF } = await import("jspdf");

    const element = document.getElementById(elementId);
    if (!element) {
      console.error("Certificate element not found:", elementId);
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#FEFCF7",
      width: 1000,
      height: 700,
      windowWidth: 1000,
      windowHeight: 700,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName || "WLGA_Certificate.pdf");
  } catch (err) {
    console.error("Certificate PDF generation failed:", err);
  }
}
