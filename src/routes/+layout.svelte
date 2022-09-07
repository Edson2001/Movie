<script>
import Menu from "../components/Menu.svelte";
import SiteFooter from "../components/SiteFooter.svelte";

</script>
<main>
    <Menu></Menu>
    <slot></slot>
    <SiteFooter></SiteFooter>
</main>

<style>
    main{
        max-width: 1150px;
        width: 100%;
        margin: 0 auto;
        margin-top: 26px;
    }
</style>