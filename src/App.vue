<template>
    <div>
        <app-header></app-header>
        <div class="ui main container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('loadHappyFeelings');
            this.$store.dispatch('loadConfusedData');
            this.$store.dispatch('loadSadFeelingsData');
        }
    };
</script>
