"use client"

interface ExperienceItemProps {
  title: string
  company: string
  date: string
  description?: string
}

const ExperienceItem = ({
  title,
  company,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="relative rounded border border-border w-full px-4 py-3 sm:px-6 sm:py-4 hover:bg-primary-foreground hover:[animation:bounce-scale-in_0.4s_ease-in-out_forwards] [animation:bounce-scale-out_0.4s_ease-in-out_forwards] transition-all ease-bounce">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg sm:text:xl font-bold">{title}</h3>
        <h4 className="text-base sm:text-lg font-light">{company}</h4>
        <h5 className="text-muted-foreground text-xs">{date}</h5>
        {description && (
          <p className="text-base font-light text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default ExperienceItem
