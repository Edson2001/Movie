<script lang="ts">
import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';
import Card from './Card.svelte';
</script>
<div class="showOnMobile">
    <Splide  options={ {
        rewind: true,
        gap   : '1rem',
      } } hasTrack={ false } aria-label="My Favorite Images">
        <div class="custom-wrapper">
            <SplideTrack>
                <SplideSlide>
                    <Card imgSrc="images/877562 1.png"  />
                </SplideSlide>
                <SplideSlide>
                    <Card imgSrc="images/98677e90349dff1d04519b1cebc0d02a 1.png" />
                </SplideSlide>
                <SplideSlide>
                    <Card imgSrc="images/ElTI-Q0UcAA3EFg 1.png" />
                </SplideSlide>
            </SplideTrack>
            <div class="splide__arrows" />
        </div>
    </Splide>
</div>