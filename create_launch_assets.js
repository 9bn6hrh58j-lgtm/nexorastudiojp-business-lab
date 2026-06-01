const fs = require("fs");
const path = require("path");

const root = __dirname;
const imagesDir = path.join(root, "images");
const svgDir = path.join(root, "image-sources");
fs.mkdirSync(imagesDir, { recursive: true });
fs.mkdirSync(svgDir, { recursive: true });

const W = 2000;
const H = 2000;
const CROP_H = 1600;
const TOP = 200;

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function text(x, y, value, size = 48, weight = 500, color = "#111827") {
  return `<text x="${x}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(value)}</text>`;
}

function multiline(x, y, lines, size = 48, gap = 62, weight = 700, color = "#111827") {
  return lines.map((line, i) => text(x, y + i * gap, line, size, weight, color)).join("\n");
}

function label(x, y, value) {
  return `<rect x="${x}" y="${y - 42}" rx="22" ry="22" width="${value.length * 20 + 44}" height="54" fill="#DCFCE7"/>
${text(x + 22, y - 6, value, 26, 700, "#166534")}`;
}

function checkList(x, y, items) {
  return items.map((item, i) => `${text(x, y + i * 62, "✓", 34, 700, "#16A34A")}${text(x + 50, y + i * 62, item, 34, 600, "#111827")}`).join("\n");
}

function sheetBox(x, y, w, h, title, headers, rows, focusCols = []) {
  const colW = w / headers.length;
  let out = `<g>
<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="3"/>
<rect x="${x}" y="${y}" width="${w}" height="70" rx="18" fill="#F9FAFB"/>
${text(x + 28, y + 46, title, 30, 700, "#111827")}
<rect x="${x}" y="${y + 70}" width="${w}" height="58" fill="#0F766E"/>`;
  headers.forEach((head, i) => {
    out += text(x + i * colW + 18, y + 109, head, 22, 700, "#FFFFFF");
  });
  rows.forEach((row, r) => {
    const yy = y + 128 + r * 54;
    out += `<rect x="${x}" y="${yy}" width="${w}" height="54" fill="${r % 2 ? "#FFFFFF" : "#F9FAFB"}"/>`;
    row.forEach((cell, c) => {
      const color = focusCols.includes(c) && String(cell).includes("Renewal") ? "#DC2626" : "#374151";
      const weight = focusCols.includes(c) ? 700 : 500;
      out += text(x + c * colW + 18, yy + 36, String(cell).slice(0, 18), 21, weight, color);
    });
  });
  out += `</g>`;
  return out;
}

function canvas(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="#FFFFFF"/>
<rect x="0" y="${TOP}" width="${W}" height="${CROP_H}" fill="#FFFFFF"/>
${content}
</svg>`;
}

const dashboard = sheetBox(910, 420, 900, 760, "Dashboard", ["Metric", "Value"], [
  ["Active Clients", "7"],
  ["Total Payments", "$4,600"],
  ["Unpaid Balance", "$1,410"],
  ["Completed Sessions", "9"],
  ["Need Renewal", "3"],
], [1]);

const packages = sheetBox(880, 520, 950, 620, "Packages", ["Package", "Purchased", "Done", "Left", "Status"], [
  ["10 Pack", "10", "8", "2", "Renewal Needed"],
  ["8 Pack", "8", "4", "4", "OK"],
  ["Trial", "1", "0", "1", "Renewal Needed"],
  ["20 Pack", "20", "16", "4", "Renewal Needed"],
], [3, 4]);

const payments = sheetBox(160, 820, 760, 520, "Payments", ["Client", "Date", "Amount", "Method"], [
  ["Ava", "2026-05-01", "$700", "Card"],
  ["Noah", "2026-05-05", "$280", "Card"],
  ["Emma", "2026-05-10", "$900", "Bank"],
  ["Mia", "2026-05-22", "$300", "Cash"],
], [2]);

const balance = sheetBox(1040, 820, 760, 520, "Balance Due", ["Client", "Price", "Paid", "Due"], [
  ["Noah", "$560", "$280", "$280"],
  ["Ava", "$700", "$700", "$0"],
  ["Ben", "$700", "$350", "$350"],
  ["Emma", "$900", "$900", "$0"],
], [3]);

const mobile = sheetBox(160, 720, 760, 520, "Mobile Input", ["Date", "Client", "Done", "Next"], [
  ["Jun 4", "C001", "Yes", "Jun 11"],
  ["Jun 5", "C002", "Yes", "Jun 12"],
  ["Jun 6", "C003", "No", "Jun 13"],
], [2]);

const checklist = sheetBox(1040, 720, 760, 520, "Renewal Checklist", ["Checklist Item", "Done"], [
  ["Low sessions", ""],
  ["Renewal message", ""],
  ["Unpaid payments", ""],
  ["Next session", ""],
], [0]);

const svgs = [
  {
    file: "01-main-thumbnail.svg",
    body: `
${multiline(140, 470, ["Never lose track", "of sessions,", "payments, or", "renewals."], 72, 86, 800)}
${text(140, 900, "Personal Trainer Client,", 34, 700, "#111827")}
${text(140, 946, "Session & Payment Tracker", 34, 700, "#111827")}
${label(140, 1040, "Google Sheets + Excel")}
${dashboard}
`,
  },
  {
    file: "02-dashboard-overview.svg",
    body: `
${label(150, 360, "Dashboard Overview")}
${text(150, 460, "See what needs your attention today.", 64, 800, "#111827")}
${text(150, 530, "View active clients, unpaid balances, completed sessions,", 34, 500, "#4B5563")}
${text(150, 575, "and renewal alerts in one dashboard.", 34, 500, "#4B5563")}
${sheetBox(150, 680, 1700, 790, "Dashboard", ["Metric", "Value", "Watchlist"], [
  ["Active Clients", "7", "Today"],
  ["Total Payments", "$4,600", "Paid"],
  ["Unpaid Balance", "$1,410", "Review"],
  ["Completed Sessions", "9", "Logged"],
  ["Need Renewal", "3", "Message"],
  ["Renewal Watchlist", "C001, C005, C006", "Action"],
], [1, 2])}
`,
  },
  {
    file: "03-session-package-tracking.svg",
    body: `
${label(140, 400, "Session Package Tracking")}
${text(140, 505, "Know who has sessions left.", 66, 800, "#111827")}
${text(140, 575, "Track purchased sessions, completed sessions,", 33, 500, "#4B5563")}
${text(140, 620, "remaining sessions, and renewal status.", 33, 500, "#4B5563")}
${checkList(140, 780, ["Sessions purchased", "Remaining sessions", "Renewal status"])}
${packages}
`,
  },
  {
    file: "04-payment-tracking.svg",
    body: `
${label(150, 360, "Payment Tracking")}
${text(150, 460, "Keep payments clear.", 68, 800, "#111827")}
${text(150, 530, "Record payments, partial payments, balances due,", 34, 500, "#4B5563")}
${text(150, 575, "and payment methods in one place.", 34, 500, "#4B5563")}
${payments}
<rect x="980" y="850" width="4" height="460" fill="#16A34A"/>
${balance}
`,
  },
  {
    file: "05-mobile-input-renewal-checklist.svg",
    body: `
${label(150, 360, "Mobile Input + Renewal Checklist")}
${text(150, 460, "Update fast after each session.", 66, 800, "#111827")}
${text(150, 530, "Use quick notes after sessions, then follow the checklist", 34, 500, "#4B5563")}
${text(150, 575, "so no client slips through the cracks.", 34, 500, "#4B5563")}
${mobile}
${checklist}
${label(150, 1480, "Included in your download")}
${text(150, 1560, "Excel file · Google Sheets compatible · Quick Start Guide", 34, 700, "#111827")}
`,
  },
];

for (const item of svgs) {
  fs.writeFileSync(path.join(svgDir, item.file), canvas(item.body));
}

function pdfEscape(s) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(textValue, maxChars) {
  const words = textValue.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function makePdf() {
  const pageW = 612;
  const pageH = 792;
  const margin = 56;
  const source = fs.readFileSync(path.join(root, "quick-start-guide-final.md"), "utf8").split(/\r?\n/);
  const pages = [];
  let ops = [];
  let y = pageH - margin;

  function newPage() {
    pages.push(ops.join("\n"));
    ops = [];
    y = pageH - margin;
  }

  function addLine(line, size = 11, font = "F1", leading = 16) {
    if (y < margin + leading) newPage();
    ops.push(`BT /${font} ${size} Tf ${margin} ${y} Td (${pdfEscape(line)}) Tj ET`);
    y -= leading;
  }

  for (const raw of source) {
    const line = raw.trim();
    if (!line) {
      y -= 8;
      continue;
    }
    if (line.startsWith("# ")) {
      y -= 8;
      for (const l of wrapText(line.slice(2), 42)) addLine(l, 20, "F2", 26);
      y -= 8;
    } else if (line.startsWith("## ")) {
      y -= 8;
      for (const l of wrapText(line.slice(3), 58)) addLine(l, 15, "F2", 21);
    } else if (line.startsWith("- ")) {
      for (const l of wrapText("• " + line.slice(2), 76)) addLine(l, 11, "F1", 16);
    } else {
      for (const l of wrapText(line.replace(/`/g, ""), 82)) addLine(l, 11, "F1", 16);
    }
  }
  if (ops.length) pages.push(ops.join("\n"));

  const objects = [];
  function addObj(body) {
    objects.push(body);
    return objects.length;
  }
  const catalogId = addObj("");
  const pagesId = addObj("");
  const font1 = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const font2 = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageIds = [];
  for (const content of pages) {
    const stream = `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`;
    const contentId = addObj(stream);
    const pageId = addObj(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R >> >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  }
  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj, i) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  fs.writeFileSync(path.join(root, "quick-start-guide.pdf"), pdf);
}

makePdf();
console.log("Created SVG image sources and quick-start-guide.pdf");
