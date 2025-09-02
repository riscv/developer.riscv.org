import { JSX } from "react";
import { RvPDFMenu, DownloadItem } from "./RvPdfMenu/index";
import "./styles.scss";

interface RvCardProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
  children: React.ReactNode;
  pdfLinks?: DownloadItem[];
  headingLevel?: keyof JSX.IntrinsicElements; // e.g. "h2" | "h3" | "h4"
}

export default function RvCard({
  title,
  children,
  buttonLabel,
  buttonHref,
  headingLevel: Heading = "h2",
  pdfLinks,
}: RvCardProps) {
  // Generate a safe ID from the title (for aria-labelledby)
  const headerId = `${title.replace(/\s+/g, "-").toLowerCase()}-header`;

  return (
    <div className="rv-card" role="region" aria-labelledby={headerId}>
      <Heading id={headerId} className="rv-header">
        {title}
      </Heading>

      <div className="rv-content">{children}</div>

      <div className="rv-footer">
        <a
          className="rv-a-button"
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${buttonLabel} about ${title}`}
        >
          {buttonLabel}
        </a>
        {pdfLinks && <RvPDFMenu items={pdfLinks} />}
      </div>
    </div>
  );
}
