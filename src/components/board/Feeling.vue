<template>
    <div class="ui cards">
        <div class="card">
            <div class="content">
                <button class="right floated mini basic red button ui" @click="removeFeeling" :disabled="isCompleted">
                    &nbsp&nbsp<i class="trash icon"></i>
                </button>
                <img class="left floated mini ui image" src="../../assets/user.png">
                <div class="meta">
                    {{feeling.author}}
                </div>
                <div class="description">
                    {{feeling.description}}
                </div>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui labeled button" tabindex="0">
                        <button class="ui blue button" @click="incrementCounter" :disabled="isCompleted">
                            <i class="star icon"></i>
                        </button>
                        <span class="ui basic blue left pointing label">{{feeling.stars}} </span>
                    </div>
                    <button class="ui basic green button" @click="markAsCompleted" :disabled="isCompleted">
                        &nbsp<i class="check icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['feeling'],
        computed: {
            isCompleted() {
                return this.feeling.status === 'COMPLETED' ? true : false;
            },
        },
        methods: {
            incrementCounter() {
                const feelingModel = {
                    id: this.feeling.id,
                    stars: this.feeling.stars + 1,
                    status: this.feeling.status,
                };
                this.$emit('editFeeling', feelingModel);
            },
            markAsCompleted() {
                const feelingModel = {
                    id: this.feeling.id,
                    stars: this.feeling.stars,
                    status: 'COMPLETED',
                };
                this.$emit('editFeeling', feelingModel);
            },
            removeFeeling() {
                const feelingModel = {
                    id: this.feeling.id,
                };
                this.$emit('removeFeeling', feelingModel);
            },
        },
    };
</script>