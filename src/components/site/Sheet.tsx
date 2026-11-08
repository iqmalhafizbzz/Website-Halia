"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import s from "./site.module.css";

const EXIT_MS = 200;

/**
 * A bottom sheet for the phone menu, per the Tactile sheet rules: up 320ms, down 200ms, a white grab handle
 * in place of a close button. Tap the handle or the backdrop, press Escape, or drag down past
 * min(64px, 15% of its height) or flick at 0.11 px/ms to close; a shorter drag springs back.
 * `contained` keeps it inside its parent (for the /compare/ page) instead of portalling to the body.
 */
export function Sheet({ open, onClose, label, children, contained = false }: { open: boolean; onClose: () => void; label: string; children: ReactNode; contained?: boolean }) {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ y: number; t: number; dy: number } | null>(null);

  // Keep the sheet mounted through its exit animation.
  useEffect(() => {
    if (open) { setMounted(true); setClosing(false); return; }
    if (!mounted) return;
    setClosing(true);
    const timer = window.setTimeout(() => { setMounted(false); setClosing(false); }, EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open, mounted]);

  useEffect(() => {
    if (!open || !mounted) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    if (!contained) document.documentElement.style.overflow = "hidden";
    sheetRef.current?.querySelector<HTMLElement>("a, button:not([data-handle])")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      if (!contained) document.documentElement.style.overflow = "";
    };
  }, [open, mounted, onClose, contained]);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    drag.current = { y: event.clientY, t: event.timeStamp, dy: 0 };
  }
  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const state = drag.current; const sheet = sheetRef.current;
    if (!state || !sheet) return;
    state.dy = Math.max(0, event.clientY - state.y);
    if (state.dy < 4) return;
    sheet.setPointerCapture(event.pointerId);
    sheet.dataset.dragging = "";
    sheet.style.transform = `translateY(${state.dy}px)`;
  }
  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const state = drag.current; const sheet = sheetRef.current;
    drag.current = null;
    if (!state || !sheet || state.dy < 4) return;
    const velocity = state.dy / Math.max(1, event.timeStamp - state.t);
    delete sheet.dataset.dragging;
    if (state.dy > Math.min(64, sheet.offsetHeight * 0.15) || velocity > 0.11) {
      sheet.style.transform = "";
      onClose();
      return;
    }
    sheet.animate([{ transform: `translateY(${state.dy}px)` }, { transform: "translateY(0)" }], { duration: 240, easing: "cubic-bezier(.23, 1, .32, 1)" });
    sheet.style.transform = "";
  }

  if (!mounted) return null;
  const closingAttr = closing ? "" : undefined;
  const content = (
    <>
      <div className={s.backdrop} data-closing={closingAttr} onClick={onClose} aria-hidden="true" />
      <div ref={sheetRef} className={s.sheet} data-closing={closingAttr} role="dialog" aria-modal="true" aria-label={label}
        onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <button type="button" className={s.handle} data-handle onClick={onClose} aria-label="Close menu"><span /></button>
        {children}
      </div>
    </>
  );
  return contained ? content : createPortal(content, document.body);
}
