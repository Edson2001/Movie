<script lang="ts">
import News from '../../components/News.svelte';
import '../../app.scss'
</script>
<main class="contentBody">
    <div class="top-info">
        <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio.
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span>00 de Julho de 2021</span>
    </div>
    <div class="content-info">
        <img  src="images/Vidas-ao-Vento-Naoko 1.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel 
            dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula.
             Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
              Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat.
               Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor
             mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>

             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam in mauris vel dolor consectetur scelerisque quis eu eros.
                 Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum,
                  nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, 
                  et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus 
                  porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend 
                  ornare leo et auctor.
             </p>
        <img src="images/vidas1 1.png" alt="">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. 
            Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, 
            nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, 
            et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus 
            porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare 
            leo et auctor.
        </p>
    </div>
    <News />
</main>

<style lang="scss">
    $colorC4: #c4c4c4;
   
    img{
        max-width: 100%;
        width: 100%;
        margin-bottom: 30px;
    }
    .top-info{
        h2{
            font-size: 34px;
            font-weight: 400;
            line-height: 56px;
        }
        p, span{
            font-size: 24px;
            font-weight: 400;
            color: $colorC4;
            line-height: 55px;
        }
        span{
            font-size: 18px;
        }
    }
    .content-info{
        p{
            line-height: 40px;
            font-size: 24px;
            font-weight: 400;
            color: $colorC4;
            margin-bottom: 43px;
        }
    }
</style>