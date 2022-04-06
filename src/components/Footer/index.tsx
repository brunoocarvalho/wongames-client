import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
	<S.Wrapper>
		<Logo color="black" />
		<S.Content>
			<S.Column>
				<Heading color="black" size="small" lineBottom lineColor="secondary">
					Contact
				</Heading>

				<a href="malto:sac@wongames.com">sac@wongames.com</a>
			</S.Column>
			<S.Column>
				<Heading color="black" size="small" lineBottom lineColor="secondary">
					Follow us
				</Heading>

				<nav aria-labelledby="social medias">
					<a
						href="https://www.instagram.com/won-games"
						target="_blank"
						rel="noopenner, noreferrer"
					>
						Instagram
					</a>
					<a
						href="https://www.twitter.com/won-games"
						target="_blank"
						rel="noopenner, noreferrer"
					>
						Twitter
					</a>
					<a
						href="https://www.youtube.com/won-games"
						target="_blank"
						rel="noopenner, noreferrer"
					>
						Youtube
					</a>
				</nav>
			</S.Column>
			<S.Column>
				<Heading color="black" size="small" lineBottom lineColor="secondary">
					Links
				</Heading>

				<nav aria-labelledby="footer resources">
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/games">
						<a>Store</a>
					</Link>
					<Link href="/search">
						<a>Buscar</a>
					</Link>
				</nav>
			</S.Column>
			<S.Column>
				<Heading color="black" size="small" lineBottom lineColor="secondary">
					Location
				</Heading>

				<nav aria-labelledby="footer contact">
					<span>Lorem ipsum dolor sit.</span>
					<span>Lorem ipsum</span>
					<span>Lorem, ipsum dolor.</span>
				</nav>
			</S.Column>
		</S.Content>

		<S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
	</S.Wrapper>
)

export default Footer
