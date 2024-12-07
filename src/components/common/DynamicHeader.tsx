"use client";

import { useEffect, useState, type ReactNode } from "react";
import ReactDOM from "react-dom";

export default function DynamicHeader({ children }: { children?: ReactNode }) {
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  useEffect(() => {
    // Attendre que l'élément cible soit disponible
    const el = document.getElementById("dynamic-header");
    if (el) {
      setTargetElement(el);
    }
  }, []);

  // Si l'élément cible n'est pas encore prêt, ne rien rendre
  if (!targetElement) {
    return null;
  }

  // Rendre le portail lorsque l'élément cible est chargé
  return ReactDOM.createPortal(<>{children}</>, targetElement);
}
