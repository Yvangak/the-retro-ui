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
                <app-happy></app-happy>
            </div>
            <div class="four wide column">
                <app-confused></app-confused>
            </div>
            <div class="four wide column">
                <app-sad></app-sad>
            </div>
            <div class="four wide column">
                <ActionItems></ActionItems>
            </div>
        </div>
    </div>
</template>
<script>
    import Happy from './Happy.vue';
    import Confused from './Confused.vue';
    import Sad from './Sad.vue';
    import ActionItems from './ActionItems.vue';

    export default {
        components: {
            appHappy: Happy,
            appConfused: Confused,
            appSad: Sad,
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