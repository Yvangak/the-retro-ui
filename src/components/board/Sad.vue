<template>
    <div>
        <div class="ui raised segment">
            <span class="ui red ribbon label"><i class="frown icon" style="font-size: 14pt"></i></span>
            Feeling Sad
        </div>
        <div class="ui red center aligned  segment">
            <div class="ui left icon input">
                <input type="text" placeholder="Feeling goes here...">
                <i class="hand point right icon"></i>
            </div>
        </div>
        <app-feeling v-for="feeling in feelings" :feeling="feeling" :key="feeling.id"></app-feeling>
    </div>
</template>
<script>
    import Feeling from './Feeling.vue';

    export default {
        components: {
            appFeeling: Feeling,
        },
        computed: {
            feelings() {
                return this.$store.getters.getSadFeelings;
            },
        },
    };
</script>