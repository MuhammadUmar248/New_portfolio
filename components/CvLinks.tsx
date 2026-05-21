import { portfolioProfile } from "@/data/portfolio"
import { FiDownload, FiEye } from "react-icons/fi"

type Props = {
  layout?: "row" | "column"
  size?: "sm" | "md"
}

export default function CvLinks({ layout = "row", size = "md" }: Props) {
  const { cvUrl, cvDownloadName } = portfolioProfile
  const padding = size === "sm" ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base"

  return (
    <div
      className={`flex flex-wrap gap-3 ${layout === "column" ? "flex-col items-stretch" : "items-center"}`}
    >
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 font-semibold text-cyan-800 transition hover:bg-cyan-500/15 dark:text-cyan-300 ${padding}`}
      >
        <FiEye size={size === "sm" ? 16 : 18} />
        View CV
      </a>
      <a
        href={cvUrl}
        download={cvDownloadName}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white font-semibold text-slate-800 transition hover:border-cyan-500/50 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${padding}`}
      >
        <FiDownload size={size === "sm" ? 16 : 18} />
        Download CV
      </a>
    </div>
  )
}
