import styled from 'styled-components'

export const Pagination = styled.span`
  color: ${ ({isRed}) => isRed ? 'red' :'blue'}
`
