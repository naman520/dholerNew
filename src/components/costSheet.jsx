import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import img1 from "@/assets/images/pdficon.png"

function formatIndianNumber(value) {
  return parseFloat(value).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CostSheet() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotNo: '',
    plc: '',
    plotAreaYards: '',
    plotPriceYards: 6500,
    plotAreaFeet: '',
    totalPaymentYards: '',
    maintenanceCharge: 0,
    totalCharges: 0,
    plotTotalPayment: 0,
  });

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Calculate total payment, charges, and convert yards to feet
  const calculateTotalPayment = () => {
    const { plotAreaYards, plc } = formData;

    const totalPayment = plotAreaYards * formData.plotPriceYards;
    const maintenance = plotAreaYards * 100;
    const totalCharges = maintenance + 15000; // Legal Fee is Rs15000
    const plotTotalPayment = totalPayment + totalCharges;

    // Convert plot area from yards to feet (1 yard = 9 sq. feet)
    const plotAreaFeet = plotAreaYards * 9;

    setFormData({
      ...formData,
      plotAreaFeet,
      totalPaymentYards: totalPayment.toFixed(2),
      maintenanceCharge: maintenance.toFixed(2),
      totalCharges: totalCharges.toFixed(2),
      plotTotalPayment: plotTotalPayment.toFixed(2),
    });
  };

  useEffect(() => {
    if (formData.plotAreaYards && formData.plotPriceYards) {
      calculateTotalPayment();
    }
  }, [formData.plotAreaYards, formData.plc, formData.plotPriceYards]);

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    const { name, phone, email, plc, plotAreaYards, plotAreaFeet, plotPriceYards, totalPaymentYards, maintenanceCharge, totalCharges, plotTotalPayment } = formData;

    let startY = 60;

    // Load image and draw it before adding text
    const img = new Image();
    img.src = img1.src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Add image to PDF (top left corner)
      doc.addImage(img, "PNG",  5, 5, 185, 50);

      // Project Heading
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      let pageWidth = doc.internal.pageSize.getWidth();
      const head = document.querySelector("h1")?.innerText || "Cost Sheet";
      let text = doc.getTextWidth(head);
      let xPosition = (pageWidth - text) / 2;
      doc.text(head, xPosition, 52);

      startY += 10;

      // Format Indian Numbers
      const formattedplc = formatIndianNumber(plc);
      const formattedPricePerYard = formatIndianNumber(plotPriceYards);
      const formattedTotalPaymentYards = formatIndianNumber(totalPaymentYards);
      const formattedMaintenanceCharge = formatIndianNumber(maintenanceCharge);
      const formattedTotalCharges = formatIndianNumber(totalCharges);
      const formattedPlotTotalPayment = formatIndianNumber(plotTotalPayment);

      // Table with details
      doc.autoTable({
        startY: startY,
        body: [
          ['Name', name],
          ['Phone', phone],
          ['Email', email],
          ['Preffered Location Charges (PLC)', `Rs. ${formattedplc}`],
          ['Plot Area (Yards)', plotAreaYards],
          ['Plot Area (Feet)', plotAreaFeet],
          ['Plot Price per Yard', `Rs. ${formattedPricePerYard}`],
          ['Total Payment', `Rs. ${formattedTotalPaymentYards}`],
        ],
        theme: 'grid',
        styles: { fontSize: 12, cellPadding: 3, lineWidth: 0.5, lineColor: [0, 0, 0] },
        headStyles: { fillColor: [0, 51, 102], textColor: 255, fontStyle: 'bold', lineWidth: 0.8 },
        alternateRowStyles: { fillColor: [225, 230, 255] },
        columnStyles: {
          0: { halign: 'left', cellWidth: 'auto' },
          1: { halign: 'right', cellWidth: 80 }
      }
      });

      let finalY = doc.lastAutoTable.finalY + 7;

      // Additional Charges Heading
      doc.setFontSize(14);
      doc.text('Additional Charges', pageWidth / 2, finalY, { align: "center" });

      // Table for Additional Charges
      doc.autoTable({
        startY: finalY + 4,
        body: [
          ['Maintenance Charge (100 x Size)', `Rs. ${formattedMaintenanceCharge}`],
          ['Legal Fee (Per Sale Deed)', 'Rs. 15,000.00'],
          ['Total Charges', `Rs. ${formattedTotalCharges}`],
          ['Plot Total Payment', `Rs. ${formattedPlotTotalPayment}`],
        ],
        theme: "grid",
        styles: { fontSize: 12, cellPadding: 3, lineWidth: 0.5, lineColor: [0, 0, 0] },
        headStyles: { fillColor: [0, 51, 102], textColor: 255, fontStyle: "bold", lineWidth: 0.8 },
        alternateRowStyles: { fillColor: [225, 230, 255] },
        columnStyles: {
            0: { halign: 'left', cellWidth: 'auto' },
            1: { halign: 'right', cellWidth: 80 }
        }
      });

      finalY = doc.lastAutoTable.finalY;

      // Terms & Conditions Section
      doc.setFontSize(10);
      doc.text('Terms & Conditions:', 15, finalY + 12);
      doc.setFontSize(9);
      const terms = [
        "1. The booking amount is Rs. 50,000.",
        "2. You can request a refund within 30 days, and the payment will be returned to you within 7 days.",
        "3. This is a system-generated document and does not require a signature.",
        "4. The plot price and charges are subject to change without prior notice.",
        "5. Maintenance charges are one-time and non-refundable.",
        "6. Legal fees cover documentation and registration expenses.",
        "7. The final payment must be completed within the stipulated period.",
        "8. Full payment is to be completed within 30 days.",
        "9. For registry, stamp duty is 4.9% for females and 5.9% for males.",
        "10. Preferred Location Charge (PLC) will be added where necessary."
      ];

      terms.forEach((term, index) => {
        doc.text(term, 15, finalY + 18 + index * 5);
      });

      // Date of Generation
      let date = new Date().toLocaleDateString();
      doc.setFontSize(9);
      doc.text(`Date of Generation: ${date}`, 15, doc.internal.pageSize.height - 5);

      // Save PDF
      doc.save('Plot_Details.pdf');
    };

    img.onerror = () => {
      console.error("Error loading image.");
    };
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <p className="text-center text-3xl font-bold text-gray-700 mb-4">Plot Price Calculation</p>
      <form>
        <table className="w-full border-collapse">
          <tbody>
            {/* Name */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Name</td>
              <td className="p-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Phone Number */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Phone Number</td>
              <td className="p-2">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Email */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Email</td>
              <td className="p-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Plot No */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Plot No</td>
              <td className="p-2">
                <input
                  type="number"
                  name="plotNo"
                  value={formData.plotNo}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* PLC */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Preferred Location Charge (PLC)</td>
              <td className="p-2">
                <input
                  type="number"
                  name="plc"
                  value={formData.plc}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Plot Area */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Plot Area (Yards)</td>
              <td className="p-2">
                <input
                  type="number"
                  name="plotAreaYards"
                  value={formData.plotAreaYards}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Plot Area (Feet) */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Plot Area (Feet)</td>
              <td className="p-2">
                <input
                  type="number"
                  name="plotAreaFeet"
                  value={formData.plotAreaFeet}
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>
            {/* Plot Price per Yard */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Plot Price per Yard</td>
              <td className="p-2">
                <input
                  type="number"
                  name="plotPriceYards"
                  value={formData.plotPriceYards}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </td>
            </tr>
            {/* Total Payment */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Total Payment</td>
              <td className="p-2">
                <input
                  type="text"
                  name="totalPaymentYards"
                  value={formData.totalPaymentYards}
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>

            {/* Additional Charges Section */}
            <tr className="border-b bg-gray-100">
              <td colSpan="2" className="p-2 font-bold text-center">Additional Charges</td>
            </tr>

            {/* Maintenance Charge */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Maintenance Charge (Rs. 100 x Size)</td>
              <td className="p-2">
                <input
                  type="text"
                  value={formData.maintenanceCharge}
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>

            {/* Legal Fee */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Legal Fee (Per Sale Deed)</td>
              <td className="p-2">
                <input
                  type="text"
                  value="15000.00"
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>

            {/* Total Charges */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Total Charges</td>
              <td className="p-2">
                <input
                  type="text"
                  value={formData.totalCharges}
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>

            {/* Plot Total Payment */}
            <tr className="border-b">
              <td className="p-2 font-semibold">Plot Total Payment</td>
              <td className="p-2">
                <input
                  type="text"
                  value={formData.plotTotalPayment}
                  className="border p-2 w-full rounded"
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          type="button"
          onClick={generatePDF}
          className="bg-blue-600 text-white p-2 mt-6 w-full rounded hover:bg-blue-700 transition-colors"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
}