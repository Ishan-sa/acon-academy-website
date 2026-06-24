/*
 * ACON Academy — School Policy Page
 * Accordion of institutional policies. Refund Policy is a placeholder
 * pending the client's document.
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mailto = (
  <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>
);

const policies = [
  {
    id: "code-of-conduct",
    title: "1. Code of Conduct",
    content: (
      <>
        <p>
          ACON Academy is committed to providing a safe, respectful, and inclusive learning environment for all students and staff. Students are expected to act with integrity, treat others with respect, and comply with all Canadian federal, provincial, and municipal laws.
        </p>
        <p>
          Harassment, discrimination, bullying, or disruptive behavior of any kind — whether in person, online, or through any communication channel — will not be tolerated and may result in disciplinary action, up to and including dismissal from the academy.
        </p>
        <p>Students are also expected to:</p>
        <ul>
          <li>Attend classes punctually and participate actively.</li>
          <li>Respect the intellectual property and privacy of fellow students and staff.</li>
          <li>Use academy resources (including the student portal) responsibly and only for educational purposes.</li>
        </ul>
      </>
    ),
  },
  {
    id: "visa-policy",
    title: "2. Visa Policy",
    content: (
      <>
        <p>
          It is the sole responsibility of every student to ensure they maintain valid legal status to study in Canada at all times. ACON Academy is not responsible for visa processing, extensions, renewals, or new applications on behalf of students.
        </p>
        <p>
          ACON Academy cannot legally advise students on Immigration, Refugees and Citizenship Canada (IRCC) processes or regulations. Students must refer directly to the IRCC website or consult with a Registered Canadian Immigration Consultant (RCIC) for guidance.
        </p>
        <p>
          IRCC Website:{" "}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(31,106,173)] hover:underline break-words"
          >
            https://www.canada.ca/en/immigration-refugees-citizenship.html
          </a>
        </p>
      </>
    ),
  },
  {
    id: "sexual-misconduct",
    title: "3. Sexual Misconduct Policy",
    content: (
      <>
        <p>
          Every student and staff member at ACON Academy has the right to a learning and working environment free from sexual violence, harassment, and misconduct.
        </p>
        <p>
          ACON Academy maintains a zero-tolerance policy towards any form of sexual harassment, assault, coercion, or exploitation — whether physical, verbal, written, or electronic. This policy applies across all campuses, online platforms, and any academy-related activities.
        </p>
        <p>
          Any student or staff member who experiences or witnesses sexual misconduct is encouraged to report it immediately to the academy administration. All reports will be treated with strict confidentiality. ACON Academy is committed to supporting affected individuals and taking prompt, appropriate action on all reports.
        </p>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    title: "4. Dispute Resolution Policy",
    content: (
      <>
        <p>
          ACON Academy is committed to resolving disputes and complaints in a fair, transparent, and timely manner.
        </p>
        <p>If a student has a concern or complaint, they should follow these steps:</p>
        <ol>
          <li>Speak directly with the instructor or staff member involved to attempt an informal resolution.</li>
          <li>If unresolved, submit a written complaint to the academy administration at {mailto}.</li>
          <li>The administration will acknowledge the complaint within 3 business days and work toward a resolution within 10 business days.</li>
          <li>If the student remains unsatisfied, they may escalate the matter to the appropriate regulatory authority.</li>
        </ol>
        <p>All complaints will be handled with respect, confidentiality, and without fear of retaliation.</p>
      </>
    ),
  },
  {
    id: "student-dismissal",
    title: "5. Student Dismissal Policy",
    content: (
      <>
        <p>ACON Academy reserves the right to dismiss a student from any program under the following circumstances:</p>
        <ul>
          <li>Repeated or serious violations of the Code of Conduct.</li>
          <li>Academic dishonesty, including plagiarism or cheating on assessments.</li>
          <li>Non-payment of tuition fees.</li>
          <li>Behavior that poses a risk to the safety or well-being of other students or staff.</li>
          <li>Providing false or misleading information during the enrollment process.</li>
        </ul>
        <p>
          Before dismissal, the student will be given written notice and an opportunity to respond. Dismissal decisions may be appealed through the Dispute Resolution process outlined above.
        </p>
      </>
    ),
  },
  {
    id: "withdrawal",
    title: "6. Withdrawal Policy",
    content: (
      <>
        <p>
          Students who wish to withdraw from a program must notify ACON Academy in writing by emailing {mailto}. The withdrawal date is the date the written notice is received by the academy.
        </p>
        <p>
          Students are encouraged to speak with an advisor before withdrawing to explore all available options, including program transfers or leave of absence.
        </p>
        <p>Refund eligibility upon withdrawal is governed by the Refund Policy (see below).</p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "7. Privacy Policy",
    content: (
      <>
        <p>
          ACON Academy is committed to protecting the personal information of its students and website visitors in accordance with the British Columbia Personal Information Protection Act (PIPA) and applicable Canadian privacy legislation.
        </p>
        <p>
          Personal information collected during the enrollment process is used solely for educational, administrative, and communication purposes and will not be shared with third parties without your consent, except as required by law.
        </p>
        <p>For questions about how your data is handled, contact us at {mailto}.</p>
      </>
    ),
  },
  {
    id: "refund",
    title: "8. Refund Policy",
    content: (
      <p className="italic text-[rgb(120,140,170)]">
        The detailed Refund Policy document will be provided separately by the client and will be added here once received.
      </p>
    ),
  },
];

export default function SchoolPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-white">School Policy</span>
          </div>
          <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Policies &amp; Standards</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">School Policy</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl">
            Our institutional policies set clear expectations and protections for every ACON Academy student. Expand any section below to read the full policy.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {policies.map((p) => (
              <AccordionItem
                key={p.id}
                value={p.id}
                className="border border-[rgb(210,225,245)] rounded-sm bg-white px-6 last:border-b"
              >
                <AccordionTrigger className="font-display text-lg font-bold text-[rgb(9,39,88)] hover:no-underline">
                  {p.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="font-body text-[rgb(40,55,80)] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5">
                    {p.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
