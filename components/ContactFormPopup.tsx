"use client"

import React, { useEffect } from "react"
import { FiCheck, FiX, FiAlertCircle } from "react-icons/fi"

export type ContactPopupStatus = "closed" | "loading" | "success" | "error"

type Props = {
  status: ContactPopupStatus
  message?: string
  onClose: () => void
}

export default function ContactFormPopup({ status, message, onClose }: Props) {
  useEffect(() => {
    if (status !== "success" && status !== "error") return

    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [status, onClose])

  if (status === "closed") return null

  const isLoading = status === "loading"
  const isSuccess = status === "success"
  const isError = status === "error"

  const borderClass = isSuccess
    ? "border-emerald-500/30"
    : isError
      ? "border-rose-500/30"
      : "border-cyan-500/30"

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-busy={isLoading}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm dark:bg-slate-950/70"
        aria-label="Close"
        onClick={isLoading ? undefined : onClose}
        disabled={isLoading}
      />

      <div
        className={`relative w-full max-w-sm animate-popupIn rounded-[1.75rem] border bg-white p-8 shadow-2xl shadow-slate-300/40 dark:bg-slate-900 dark:shadow-slate-950/50 ${borderClass}`}
      >
        {!isLoading && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Dismiss"
          >
            <FiX className="h-5 w-5" />
          </button>
        )}

        <div className="flex flex-col items-center text-center">
          {isLoading && (
            <>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <svg
                  className="h-8 w-8 animate-spin text-cyan-600 dark:text-cyan-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-slate-950 dark:text-slate-100">
                Sending message...
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Please wait a moment
              </p>
            </>
          )}

          {isSuccess && (
            <>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                <FiCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
              </div>
              <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                Message sent!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {message ?? "Message sent successfully! I'll respond within 24 hours."}
              </p>
            </>
          )}

          {isError && (
            <>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10">
                <FiAlertCircle
                  className="h-8 w-8 text-rose-600 dark:text-rose-400"
                  strokeWidth={2.5}
                />
              </div>
              <p className="text-lg font-semibold text-rose-700 dark:text-rose-300">
                Could not send
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {message ?? "Failed to send message. Please try again or email me directly."}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
