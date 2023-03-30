import { Meta } from '@storybook/react'
import Input from '../../components/Input'

const meta: Meta = {
  title: 'Input',
  component: Input,
}

export default meta

export const Default = () => <Input variant="primary" />
