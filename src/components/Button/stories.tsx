import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from '.'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string'
		}
	}
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
	children: 'Buy now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
	children: 'Buy now',
	icon: <AddShoppingCart />,
	size: 'small'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
	size: 'large',
	children: 'Buy now',
	as: 'a',
	href: '/link'
}
