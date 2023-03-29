import { ComponentStory, ComponentMeta } from '@storybook/react'

import NotesApp from '../NotesApp'

export default {
  title: 'Components/App',
  component: NotesApp,
} as ComponentMeta<typeof NotesApp>

// eslint-disable-next-line
const Template: ComponentStory<typeof NotesApp> = () => <NotesApp />

export const Default = Template.bind({})