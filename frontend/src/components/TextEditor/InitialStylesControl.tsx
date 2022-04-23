import React from "react";
import { Root, SButton } from "./styled";

export const inlineStyles = [
  { label: "B", style: "BOLD" },
  { label: "I", style: "ITALIC" },
  { label: "U", style: "UNDERLINE" },
  { label: "abc", style: "STRIKETHROUGH" },
  //   { label: "H", style: "FONT_SIZE_30" },
];

const InlineStyleControls = ({ currentInlineStyle, onToggle }: any) => {
  return (
    <Root>
      {inlineStyles.map((type) => (
        <SButton
          type="button"
          style={{
            fontWeight: currentInlineStyle.has(type.style) ? "bold" : "normal",
            textDecoration:
              type.style === "STRIKETHROUGH" ? "line-through" : "lineThrough",
          }}
          key={type.label}
          onMouseDown={(e) => {
            e.preventDefault();
            onToggle(type.style);
          }}
        >
          {type.label}
        </SButton>
      ))}
    </Root>
  );
};

export default InlineStyleControls;
