import { TooltipPosition } from "../utils/types";

const getToolTipPosition = (tooltipPosition: TooltipPosition) => {
  switch (tooltipPosition) {
    case "bottom-center":
      return { top: "100%", left: "40%" };
    case "bottom-left":
      return { top: "100%", left: "0%" };
    case "bottom-right":
      return { top: "100%", left: "100%" };
    case "top-center":
      return { top: "0%", left: "40%" };
    case "top-left":
      return { top: "0%", left: "0%" };
    case "top-right":
      return { top: "0%", left: "100%" };
    case "left-center":
      return { top: "40%", left: "0%" };
      case "right-center":
        return { top: "40%", left: "100%" };
    default:
      return { top: "100%", left: "40%" };
  }
}
export const Tooltip: React.FC<{ text: string, showTooltip: boolean, tooltipPosition?: TooltipPosition }> = ({ text, showTooltip, tooltipPosition = "bottom-center" }) => {
  const { top, left } = getToolTipPosition(tooltipPosition)

  if (!showTooltip) return <></>;
  return (<div
    className="tooltip"
    style={{top: top, left: left}}
  >{text}</div>
  )
}