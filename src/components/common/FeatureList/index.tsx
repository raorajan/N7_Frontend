import { CheckIcon } from "../Icons/CheckIcon";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mt-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckIcon />
          <span className="text-[#03121A] text-[14px] leading-[160%]" style={{ fontFamily: "var(--font-archivo)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
