import { default as BaseImage } from 'next/image'
import styled from 'styled-components'

interface Props {
  src: string
  height: number
  width: number | string
  borderRadius?: number
}

const RawImage = ({ src, height, width, borderRadius }: Props) => (
  <BaseImage
    src={src}
    height={height}
    width={width}
    style={{
      borderRadius: borderRadius ?? 0
    }}
  />
)

export const Image = styled(RawImage)``
