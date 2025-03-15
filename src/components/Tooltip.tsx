export const Tooltip: React.FC<{ text: string, showTooltip: boolean, tooltipPosition: number[] }> = ({ text, showTooltip }) => {

  if (!showTooltip) return <></>;
  return (<div
    className="tooltip"
  >{text}</div>
  )
}