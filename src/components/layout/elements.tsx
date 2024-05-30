import { Box, BoxProps } from '@mui/material'
import { forwardRef } from 'react'

export const Column = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box display='flex' flexDirection='column' ref={ref} {...props} />
})
Column.displayName = 'Column'

export const Row = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box display='flex' flexDirection='row' ref={ref} {...props} />
})
Row.displayName = 'Row'
