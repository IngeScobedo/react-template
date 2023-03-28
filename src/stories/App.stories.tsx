import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from '../App'

export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>

// eslint-disable-next-line
const Template: ComponentStory<typeof App> = () => <App />

export const Default = Template.bind({})