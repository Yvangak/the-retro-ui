<template>
    <div class="ui cards">
        <div class="card">
            <div class="content">
                <div class="right floated mini basic red button ui">
                    <i class="trash icon"></i>
                </div>
                <img class="left floated mini ui image" src="../../assets/user.png">
                <div class="meta">
                    {{feeling.owner}}
                </div>
                <div class="description">
                    {{feeling.description}}
                </div>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui labeled button" tabindex="0">
                        <div class="ui blue button" @click="incrementCounter">
                            <i class="star icon"></i>
                        </div>
                        <span class="ui basic blue left pointing label">{{feeling.counter}} </span>
                    </div>
                    <div class="ui basic green button">&nbsp;<i class="check icon"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['feeling'],
        methods: {
            incrementCounter(){
                this.feeling.counter += 1;
                return this.feeling.counter;
            }
        }
    }
</script>