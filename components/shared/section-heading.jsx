import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  descriptionClassName,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("eyebrow", eyebrowClassName)}>{eyebrow}</div>
      ) : null}
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-relaxed text-slate-300 md:text-lg", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
