import { journeySteps } from "@/content/journey";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";

export function JourneyTimeline() {
  return (
    <RevealGroup className="relative mx-auto max-w-2xl" stagger={0.08}>
      <div
        aria-hidden="true"
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-border to-transparent"
      />
      <ol className="flex flex-col gap-9">
        {journeySteps.map((step, i) => (
          <RevealItem key={step.title} y={16}>
            <li className="relative flex gap-6">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-deep/60 bg-background font-heading text-base text-gold-deep">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="font-heading text-xl text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground max-w-md">
                  {step.description}
                </p>
              </div>
            </li>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  );
}
