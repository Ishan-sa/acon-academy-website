/*
 * Markdown — minimal, dependency-free renderer for blog article bodies.
 * Supports: ## / ### headings, - bullet lists, blank-line paragraphs,
 * and inline **bold**. Styled to match ACON's article prose.
 */
import { Fragment, type ReactNode } from "react";

/** Parse inline **bold** into React nodes. */
function renderInline(text: string, keyBase: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts
    .filter((p) => p !== "")
    .map((part, i) => {
      const m = part.match(/^\*\*([^*]+)\*\*$/);
      if (m) {
        return (
          <strong key={`${keyBase}-${i}`} className="font-semibold text-[rgb(9,39,88)]">
            {m[1]}
          </strong>
        );
      }
      return <Fragment key={`${keyBase}-${i}`}>{part}</Fragment>;
    });
}

export default function Markdown({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);
  const elements: ReactNode[] = [];

  blocks.forEach((raw, bi) => {
    const block = raw.trim();
    if (!block) return;

    // Bullet list: every line starts with "- "
    const lines = block.split("\n");
    if (lines.every((l) => l.trim().startsWith("- "))) {
      elements.push(
        <ul key={bi} className="list-disc pl-6 mb-6 space-y-2">
          {lines.map((l, li) => (
            <li key={li} className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg">
              {renderInline(l.trim().replace(/^-\s+/, ""), `${bi}-${li}`)}
            </li>
          ))}
        </ul>
      );
      return;
    }

    // Headings
    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={bi} className="font-display text-xl lg:text-2xl font-bold text-[rgb(9,39,88)] mt-8 mb-3">
          {renderInline(block.replace(/^###\s+/, ""), `h3-${bi}`)}
        </h3>
      );
      return;
    }
    if (block.startsWith("## ")) {
      elements.push(
        <h2 key={bi} className="font-display text-2xl lg:text-3xl font-bold text-[rgb(9,39,88)] mt-10 mb-4">
          {renderInline(block.replace(/^##\s+/, ""), `h2-${bi}`)}
        </h2>
      );
      return;
    }

    // Paragraph
    elements.push(
      <p key={bi} className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-6">
        {renderInline(block, `p-${bi}`)}
      </p>
    );
  });

  return <div className="prose max-w-none">{elements}</div>;
}
