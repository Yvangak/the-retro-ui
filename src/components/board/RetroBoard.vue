<template>
    <div class="ui container">
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
            ActionItems
        },
    };
</script>