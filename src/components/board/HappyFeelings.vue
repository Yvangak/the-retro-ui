<template>
    <div>
        <div class="ui raised segment">
            <span class="ui green ribbon label">
                <i class="smile icon" style="font-size: 14pt"></i>
            </span>
            Feeling Happy
        </div>
        <div class="ui green center aligned  segment">
            <div class="ui left icon input">
                <input type="text" placeholder="Feeling goes here...">
                <i class="hand point right icon"></i>
            </div>
        </div>
        <Feeling></Feeling>
    </div>
</template>
<script>
    import Feeling from './Feeling.vue';

    export default {
        components: {
            Feeling,
        },
    };
</script>