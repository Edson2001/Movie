<script lang="ts">
    import {fly, fade} from "svelte/transition"
    export let imgSrc: string
    export let isSection: boolean = false
    
</script>
<div in:fly={{y: 3000, duration: 3000}} out:fade  class="card">
    <a href="/1">
        <img src="{imgSrc}" alt="">
        <div class="content">
            <span>Lorem</span>
            <p class="titleCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            {#if isSection}
                <p class="section-options">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
                <p class="section-options">00/00/0000</p>
                <p class="section-options button-options">
                    Ler Notícia
                </p>
            {/if}
        </div>
    </a>
</div>

<style lang="scss">
    .card{
        width: 100%;
        position: relative;
        max-width: 100%;
        a{
            p.section-options{
                margin-bottom: 6px;
                color: #C4C4C4;
                font-size: 11px;
                &:nth-child(2){
                    font-weight: 600;
                }
            }
            p.button-options{
                background-color: #8257E6 !important;
                color: #FFF !important;
                width: 100px !important;
                padding: 5px;
                height: 20px;
                border-radius: 3px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            display: block;
            img{
                max-width: 100%;
                width: 100%;
            }
            color: #FAFBFB;
            .content{
                span{
                    position: absolute;
                    top: 12px;
                    left: 30px;
                    background-color: #8257E6;
                    height: 25px;
                    width: 80px;
                    text-align: center;
                    border-radius: 5px;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                }
                p{
                    position: absolute;
                    bottom: 0;
                    width: 80%;
                    left: 7%;
                    bottom: 15px;
                }
            }
        }
        &:nth-child(1){
            grid-column: 1;
            grid-row: 1/3;
            height: 350px;
            a{
                position: relative;
                height: 100%;
                img{
                    height: 100%;
                    background: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
                }
            }
            
        }
        &:nth-child(n+2){
            height: 165px;
            a{
                height: 100%;
                img{
                    height: 100%;
                }
            }
        }
        &:hover{
            transition: 0.5s ease;
            transform: scale(1.1) translateX(-10%);
        }
    }
</style>