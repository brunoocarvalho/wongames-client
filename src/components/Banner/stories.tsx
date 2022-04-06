import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
	title: 'Banner',
	component: Banner,
	args: {
		img: 'https://img.olhardigital.com.br/wp-content/uploads/2020/12/cyberpunk.png',
		title: 'Defy death',
		subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death'
	},
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		ribbon: {
			type: 'string'
		}
	}
} as Meta

export const Basic: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
)

WithRibbon.args = {
	ribbon: '20% OFF',
	ribbonSize: 'normal',
	ribbonColor: 'secondary'
}
