import type { CSSProperties } from "react";
import type { PageSize } from "@react-pdf/types";

// 1020.0/1320 = 0.7727272727
//    8.5/11   = 0.7727272727
export const PdfPageSize = Object.freeze({
  label: "LETTER" as PageSize,
  width: 8.5,
  height: 11,
  get aspectRatio(): CSSProperties["aspectRatio"] {
    return this.width / this.height;
  },
});
