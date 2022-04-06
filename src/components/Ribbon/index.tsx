import * as S from './styles'

export type RibbonProps = {
	children: React.ReactNode
	color?: RibbonColors
	size?: RibbonSizes
}

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

const Ribbon = ({
	children,
	color = 'primary',
	size = 'normal'
}: RibbonProps) => (
	<S.Wrapper color={color} size={size}>
		{children}
	</S.Wrapper>
)

export default Ribbon
