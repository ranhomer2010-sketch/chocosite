"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationHint() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ((pathname.replace(/\/$/, "") || "/") === "/") return;

    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      clearTimeout(timeout);
      if (window.location.hash === "#navigation") {
        setVisible(false);
        return;
      }
      setVisible(true);
      timeout = setTimeout(() => setVisible(false), 3000);
    };

    show();
    window.addEventListener("hashchange", show);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", show);
    };
  }, [pathname]);

  return visible ? (
    <div className="navigation-hint" role="status">
      <span aria-hidden="true">↑</span> Навигационная орбита — наверху
    </div>
  ) : null;
}
