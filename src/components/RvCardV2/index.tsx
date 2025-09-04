import { JSX } from "react";
import "./styles.scss";
import Link from "@docusaurus/Link";

interface RvCardProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
  children: React.ReactNode;
  pdfLink?: string;
  details?: string;
  headingLevel?: keyof JSX.IntrinsicElements; // e.g. "h2" | "h3" | "h4"
}

export default function RvCard({
  title,
  children,
  buttonLabel,
  buttonHref,
  headingLevel: Heading = "h3",
  pdfLink,
  details
}: RvCardProps) {
  // Generate a safe ID from the title (for aria-labelledby)
  const headerId = `${title.replace(/\s+/g, "-").toLowerCase()}-header`;

  return (
    <div className="rv-card-2" role="region" aria-labelledby={headerId}>
      <Heading id={headerId} className="rv-header">
        {title}
      </Heading>

      <div className="rv-content">{children}</div>

      <div className="rv-footer">
        <Link
          className="rv-a-button"
          to={buttonHref}
          rel="noopener noreferrer"
          aria-label={`${buttonLabel} about ${title}`}
          isNavLink={true}
        >
          {buttonLabel}
        </Link>
        {pdfLink && <a className="rv-pdf-button">Download</a>}
      </div>
      {details && <div className="rv-details"><Link href={details}>More Details</Link></div>}
    </div>
  );
}
