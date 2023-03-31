import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../../components/input/Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      defaultValue: 'Default label',
    },
    placeholder: {
      defaultValue: 'Insert your ...',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

const Email = Template.bind({})
Email.args = {
  variant: 'email',
  placeholder: 'Ingresa tu correo electronico',
  label: 'Correo Electrónico',
}

const Password = Template.bind({})
Password.args = {
  variant: 'password',
  label: 'Contraseña',
  placeholder: 'Ingresa tu contraseña',
}

const NoteTitle = Template.bind({})
NoteTitle.args = {
  variant: 'note-title',
  label: 'Titulo de la nota',
  placeholder: 'Ingresar titulo',
}

export { Email, Password, NoteTitle }
