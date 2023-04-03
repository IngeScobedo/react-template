import { Grid, InputLabel } from '@mui/material'
import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react'

import './Textarea.scss'
export interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  variant: 'body-note'
  label: string
}

// const Textarea = ({ id, label, ...props }: Props) => {
//   return (
//     <Grid item xs={12}>
//       <div className="textarea-wrapper">
//         <Grid
//           item
//           sx={{ display: 'flex', justifyContent: 'space-between' }}
//           xs={12}
//         >
//           <InputLabel
//             sx={{ color: 'text.secondary', fontSize: '12px' }}
//             htmlFor={id}
//           >
//             {label}
//           </InputLabel>
//         </Grid>
//         <textarea id={id} {...props} />
//       </div>
//     </Grid>
//   )
// }

// eslint-disable-next-line react/display-name
const Textarea = forwardRef(({ id, label, ...props }: Props, ref) => {
  return (
    <Grid item xs={12}>
      <div className="textarea-wrapper">
        <Grid
          item
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          xs={12}
        >
          <InputLabel
            sx={{ color: 'text.secondary', fontSize: '12px' }}
            htmlFor={id}
          >
            {label}
          </InputLabel>
        </Grid>
        <textarea id={id} {...props} />
      </div>
    </Grid>
  )
})

export default Textarea
