<script>

import '../../../app.scss'
import Card from '../../../components/Card.svelte';
import Pagination from "../../../components/Pagination.svelte"
let results = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12]
</script>
<main class="contentBody">
    <div class="top-result">
        <div class="img-top">
            <img src="/images/naruto-tobi-wallpaper-1440x900_4 1.png" alt="">
            <h2>Animes</h2>
            <p>
                O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.
            </p>
        </div>
        <div class="input-search">
            <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui">
            <img src="/images/Vector.png" class="img-icon" alt="">
        </div>
    </div>
    <div class="searchResult">
        {#each results as item}
            <Card imgSrc="/images/GTA-5-PlayStation-5-Rockstar-Games-Sony-2020.png" />
        {/each}
    </div>
    <Pagination />
</main>

<style lang="scss">
    $colorC4: #c4c4c4;
    img{
        max-width: 100%;
        width: 100%;
    }
    .input-search{
        input{
            outline: none;
            border: none;
            max-width: 100%;
            width: 100%;
            height: 60px;
            background: #282830;
            text-indent: 25px;
            color:  #989898;
        }
        margin-top: 42px;
        margin-bottom: 70px;
        position: relative;
        img{
            width: 20px;
            height: 20px; 
            position: absolute;
            top: 40%;
            right: 2%;
        }
    }
    .img-top{
        position: relative;
        h2, p{
            position: absolute;
            top: 0;
            left: 5%;
        }
        h2{
            top: 25%;
        }
        p{
            top: 38%;
            color: #c4c4c4;
            max-width: 492px;
        }
    }
</style>