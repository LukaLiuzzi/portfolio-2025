"use client"

const BackToTop = () => {
  return (
    <button
      className="group flex w-fit items-center gap-1.5 rounded border border-border p-1.5 text-sm transition-colors duration-300 ease-in-out hover:border-foreground/25 hover:bg-primary-foreground"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 15l8-8 8 8"
        />
      </svg>
      Volver arriba
    </button>
  )
}

export default BackToTop
