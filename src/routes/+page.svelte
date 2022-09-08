<script lang="ts">

import Card from "../components/Card.svelte";
import News from "../components/News.svelte";
import MobileCarousel from "../components/MobileCarousel.svelte";
import '../app.scss'

</script>
<main class="contentBody">
	<div class="bannerContent">
		<h2>
			<p>Mundo Nerd?</p>
			<p>NAPED!</p>
		</h2>
		
		<p class="bannerContentDescription">
			O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.
		</p>
	</div>
	<MobileCarousel />
	<div class="destaques">
		<Card imgSrc='images/877562 1.png'></Card>
		<Card imgSrc='images/98677e90349dff1d04519b1cebc0d02a 1.png'></Card>
		<Card imgSrc='images/ElTI-Q0UcAA3EFg 1.png'></Card>
	</div>

	<div class="contentCenter">
		<div class="content">
			<Card isSection={true} imgSrc='images/thumb-1920-1133039 1.png'></Card>
			<Card isSection={true} imgSrc='images/thumb-1920-678085 1.png'></Card>
			<Card isSection={true} imgSrc='images/minecraft-vendas 1.png'></Card>
			<Card isSection={true} imgSrc='images/harry-potter-wallpapers-desktop-86788224 1.png'></Card>
			<Card isSection={true} imgSrc='images/supernatural 1.png'></Card>
			<Card isSection={true} imgSrc='images/877562 1.png'></Card>
			<Card isSection={true} imgSrc='images/877562 1.png'></Card>
			<Card isSection={true} imgSrc='images/877562 1.png'></Card>
			<Card isSection={true} imgSrc='images/877562 1.png'></Card>
			<Card isSection={true} imgSrc='images/877562 1.png'></Card>
		</div>
		<div class="sidebar">
			<h3>Lorem ipsum dolor</h3>
			<Card imgSrc='images/A-Viagem-de-Chihiro-chihiro-e-haku 1.png'></Card>
			<Card imgSrc='images/cena-do-filme-a-rede-social-2010-1547503577708_v2_1920x1204 1.png'></Card>
			<Card imgSrc='images/NarTrailer_Print09.max-1920x1200 1.png'></Card>
		</div>
	</div>
	<News />
</main>

<style lang="scss">

.bannerContent{
	margin-bottom: 80px;
	h2{
		p{
			margin-bottom: 12px;
		}
	}
	p.bannerContentDescription{
		width: 361px;
	}
}
.destaques{
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 338px;
	max-width: 100%;
	margin-bottom: 70px;
}
.contentCenter{
	display: grid;
	grid-template-columns: 1fr 338px;
	grid-gap: 20px;
	.content{
		height: 900px !important;
		overflow: hidden;
		overflow-y: scroll;
		&::-webkit-scrollbar{
			width: 8px;
		}
		&::-webkit-scrollbar-thumb{
			background-color: #8257E6;
		}
		&::-webkit-scrollbar-track{
			background-color: #282830;
		}
	}
	.sidebar h3{
		border-bottom: 3px solid #8257E6;
		padding-bottom: 13px;
		margin-bottom: 12px;
		max-width: 210px;
	}
}
</style>
