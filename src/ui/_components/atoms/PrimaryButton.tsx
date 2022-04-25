import { ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from 'ui/_styles/colors'
import { Margins, marginsCss } from 'ui/_styles/mixins/margins'

interface Props extends Margins {
  children: ReactNode
  onClick?: () => void
}

export const PrimaryButton = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  ${marginsCss};

  background-color: ${colors.primary};
  border: none;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  color: ${colors.white};

  &:hover {
    background-color: #e05d5e;
    cursor: pointer;
  }
`
