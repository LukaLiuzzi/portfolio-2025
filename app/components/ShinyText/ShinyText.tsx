import { cookies } from "next/headers"

type Theme = "light" | "dark"

const ShinyText = async ({
  text = "",
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`
  const cookieStore = await cookies()

  const theme = cookieStore.get("theme")?.value || ("light" as Theme)

  return (
    <div
      className={`dark:text-[#b5b5b5a4] text-[#535252a4] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage: `${
          theme === "dark"
            ? "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)"
            : "linear-gradient(120deg, rgba(0,0,0, 0) 40%, rgba(0,0,0, 0.8) 50%, rgba(0,0,0, 0) 60%)"
        }`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  )
}

export default ShinyText
