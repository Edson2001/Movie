<script lang="ts">
import {fade} from "svelte/transition"
</script>
<nav class="menu">
    <div class="top-site">
        <h1>
            <a href="/">READ</a>
        </h1>
        <div class="menu-mobile">
            <span></span>
            <span></span>
        </div>
    </div>
    <nav>
        <ul>
            <li class="active">
                <a transition:fade href="/">Home</a>
            </li>
            <li>
                <a transition:fade href="/search/anime">Séries</a>
            </li>
            <li>
                <a transition:fade href="/search/anime">Filmes</a>
            </li>
            <li>
                <a transition:fade href="/search/anime">Animes</a>
            </li>
            <li>
                <a transition:fade href="/search/anime">Games</a>
            </li>
            <li>
                <a transition:fade href="/search/anime">Minha Conta</a>
            </li>
        </ul>
    </nav>
</nav>

<style lang="scss">
.menu{
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    margin-bottom: 114px;
    flex-wrap: wrap;
    h1{
        a{
            color: #8257E6;
        }
        font-size: 24px;
    }
    ul{
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            margin-right: 60px;
            &:last-child{
                margin-right: 0px;
                border: 1px solid #8257E6;
                padding: 5px;
                border-radius: 30px;
                margin-left: 40px;
                a{
                    padding: 5px;
                    color: #FEFBFB;
                }
            }
            a{
                color: #C4C4C4;
            }
        }
        li.active{
            a{
                color: #FEFBFB;
                border-bottom: 2px solid #8257E6;
            }
        }
    }
}
.menu-mobile{
    display: none;
}
@media (max-width: 774px){
   .menu{
        .top-site{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        display: block;
        position: relative;
        ul{
            li{
                &:last-child{
                   width: 100%;
                   margin-left: 0;
                   text-align: center;
                   padding: 10px;
                   margin-top: 38px;
                }
                &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5){
                   display: none;
                }
            }
        }
        .menu-mobile{
            position: relative;
            display: block;
            span:first-child{
                display: block;
                width: 13px;
                border-top: 2px solid #FFF;
                margin-left: 5PX;
                &::after{
                    top: -4PX;
                    position: absolute;
                    content: '';
                    width: 18px;
                    height: 2px;
                    background-color: #FFF;
                    right: 0;
                }
            }
            span:last-child{
                display: block;
                width: 18px;
                border-top: 2px solid #FFF;
                margin-top: 1.5px;
                &::after{
                    top: 7px;
                    position: absolute;
                    content: '';
                    width: 13px;
                    height: 2px;
                    right: 0;
                    background-color: #FFF;
                }
            }
        }
   }
}
</style>