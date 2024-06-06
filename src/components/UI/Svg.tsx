// @ts-ignore
import SVG from 'react-inlinesvg';

export default function Svg({
  className,
  src,
  width = 10,
  height = 10,
  title = null
}: {
  className?: string,
  src: any,
  width?: string | number | undefined,
  height?: string | number | undefined,
  title?: string | null,
}) {
  return (
    <SVG
      src={src}
      width={width}
      height={height}
      title={title}
      className={className}
    />
  )
}
