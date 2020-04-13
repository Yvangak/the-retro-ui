<template>
    <div class="ui container">
        <div class="ui menu">
            <div class="item" id="teamName">
                <img class="left floated mini ui image" src="../../assets/team.png">
                Smart Charging
            </div>
            <div class="right item">
                <div class="ui negative basic button">
                    <i class="stopwatch icon"></i> End Retro
                </div>
            </div>
        </div>
        <div class="ui grid">
            <div class="four wide column">
                <HappyFeelings></HappyFeelings>
            </div>
            <div class="four wide column">
                <ConfusedFeelings></ConfusedFeelings>
            </div>
            <div class="four wide column">
                <SadFeelings></SadFeelings>
            </div>
            <div class="four wide column">
                <ActionItems></ActionItems>
            </div>
        </div>
    </div>
</template>
<script>
    import HappyFeelings from './HappyFeelings.vue';
    import ConfusedFeelings from './ConfusedFeelings.vue';
    import SadFeelings from './SadFeelings.vue';
    import ActionItems from './ActionItems.vue';

    export default {
        components: {
            HappyFeelings,
            ConfusedFeelings,
            SadFeelings,
            ActionItems,
        },
    };
</script>
<style>
    #teamName {
        font-family: 'Apple Chancery';
        color: royalblue;
        font-size: 14pt;
    }
</style>