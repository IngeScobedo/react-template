import { Grid } from '@mui/material'

export interface Props {
  variant: 'body-note'
  label: string
}

const Textarea = (props: Props) => {
  return (
    <Grid item xs={12}>
      <div className="textarea-wrapper">
        <textarea
          style={{
            borderRadius: '6px',
            border: '1px solud #D8D6DE',
            padding: '8px 14px',
          }}
          {...props}
        />
      </div>
    </Grid>
  )
}

export default Textarea
