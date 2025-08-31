import { useState, useRef, useEffect, useId } from "react";
import "./styles.scss";

export type DownloadItem = {
  href: string;
  label: string;
};

export function RvPDFMenu({ items }: { items: DownloadItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const menuId = useId();

  // Close if clicking outside
  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    const items = itemsRef.current;
    const currentIndex = items.indexOf(document.activeElement);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        items[(currentIndex + 1) % items.length].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        items[(currentIndex - 1 + items.length) % items.length].focus();
        break;
      case "Escape":
        setOpen(false);
        buttonRef.current.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        className="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        Download PDFs{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginLeft: "0.3em",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <ul
        id={menuId}
        ref={menuRef}
        role="menu"
        className={`dropdown-menu ${open ? "open" : ""}`}
        onKeyDown={handleKeyDown}
      >
        {items.map((item, i) => (
          <li key={i} role="none">
            <a
              href={item.href}
              download
              role="menuitem"
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="dropdown-item"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
