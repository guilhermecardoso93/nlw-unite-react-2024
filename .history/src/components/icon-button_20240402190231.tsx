import { ComponentProps } from "react";

interface IconButtonsProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonsProps) {
  return (
    <button
      {...props}
      className="bg-white/10 border border-white/10 rounded-md p-1.5"
    />
  );
}
