#!/usr/bin/env node
/**
 * Generate a minimal valid PDF for Ali Sobouhi's resume.
 * This creates a real PDF structure that can be opened by any PDF reader.
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Build a minimal valid PDF with basic resume content
function buildPDF() {
  const objects = [];
  let objectCount = 0;

  function addObject(content) {
    objectCount++;
    const id = objectCount;
    objects.push({ id, content });
    return id;
  }

  // Object 1: Catalog
  const pagesId = 2;
  const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

  // Object 2: Pages
  const pageId = 3;
  addObject(`<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`);

  // Object 3: Page
  const contentsId = 4;
  const fontId = 5;
  addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Contents ${contentsId} 0 R /Resources << /Font << /F1 ${fontId} 0 R >> >> >>`);

  // Object 4: Content stream
  const lines = [
    'BT',
    '/F1 24 Tf',
    '72 720 Td',
    '(Ali Sobouhi) Tj',
    '/F1 14 Tf',
    '0 -30 Td',
    '(Front-End Developer & Team Lead) Tj',
    '/F1 11 Tf',
    '0 -25 Td',
    '(Tehran, Iran | alisoftware1133@gmail.com) Tj',
    '0 -35 Td',
    '/F1 16 Tf',
    '(Professional Experience) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Sepehr Company - Front-End Developer & Team Lead) Tj',
    '0 -18 Td',
    '(July 2021 - Present | Tehran, Iran | Full-time) Tj',
    '0 -20 Td',
    '(- Directed and mentored front-end development team across) Tj',
    '0 -16 Td',
    '(  multiple simultaneous healthcare projects.) Tj',
    '0 -16 Td',
    '(- Architected scalable front-end solutions for national-scale) Tj',
    '0 -16 Td',
    '(  healthcare platforms serving government ministries.) Tj',
    '0 -16 Td',
    '(- Established front-end development standards, reusable) Tj',
    '0 -16 Td',
    '(  component libraries and shared design patterns.) Tj',
    '0 -16 Td',
    '(- Partnered closely with UI/UX designers using Figma and) Tj',
    '0 -16 Td',
    '(  Adobe XD for pixel-perfect responsive interfaces.) Tj',
    '0 -16 Td',
    '(- Enforced role-based access control \\(RBAC\\) systems across) Tj',
    '0 -16 Td',
    '(  multiple platforms.) Tj',
    '0 -30 Td',
    '/F1 16 Tf',
    '(Education) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Master of Software Engineering - GPA: 17.09/20) Tj',
    '0 -16 Td',
    '(Islamic Azad University, Science & Research Branch \\(2022-2025\\)) Tj',
    '0 -22 Td',
    '(Bachelor of Computer Engineering - GPA: 18.16/20) Tj',
    '0 -16 Td',
    '(Islamic Azad University, Tehran Branch \\(2017-2020\\)) Tj',
    '0 -30 Td',
    '/F1 16 Tf',
    '(Technical Skills) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Core: JavaScript \\(ES6+\\), TypeScript, React.js, HTML5, CSS3) Tj',
    '0 -16 Td',
    '(State: Redux, Redux Toolkit, TanStack Query) Tj',
    '0 -16 Td',
    '(Styling: Tailwind CSS, Material UI, Ant Design, Bootstrap) Tj',
    '0 -16 Td',
    '(Frameworks: Next.js, React Native, PWA) Tj',
    '0 -16 Td',
    '(Tools: Git, Figma, Adobe XD) Tj',
    '0 -30 Td',
    '/F1 16 Tf',
    '(Languages) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Persian - Native) Tj',
    '0 -16 Td',
    '(English - Professional Working Proficiency) Tj',
    'ET'
  ];
  const stream = lines.join('\n');
  addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);

  // Object 5: Font
  addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`);

  // Build the PDF
  let pdf = '%PDF-1.4\n';
  const offsets = [];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += `${obj.id} 0 obj\n${obj.content}\nendobj\n`;
  }

  // Cross-reference table
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objectCount + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (const offset of offsets) {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }

  // Trailer
  pdf += `trailer\n<< /Size ${objectCount + 1} /Root ${catalogId} 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

const pdfContent = buildPDF();
const outputPath = resolve(__dirname, '../public/Ali_Sobouhi_Resume.pdf');
writeFileSync(outputPath, pdfContent);
console.log(`✅ PDF generated: ${outputPath} (${pdfContent.length} bytes)`);
