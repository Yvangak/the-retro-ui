<template>
    <div>
        <div class="ui raised segment">
            <span class="ui green ribbon label">
                <i class="smile icon" style="font-size: 14pt"></i>
            </span>
            Feeling Happy
        </div>
        <div class="ui fluid icon input" :class="{error: isValid}">
            <input type="text" placeholder="Your feeling goes here..." v-model="descriptionModel"
                   @keyup.enter="add">
            <i class="pencil alternate icon"></i>
        </div>
        <h4 class="ui horizontal divider header">
            <i class="minus icon"></i>
        </h4>
        <app-Feeling v-for="feeling in feelings"
                     :feeling="feeling"
                     :key="feeling.id"
                     @editFeeling="edit"
                     @removeFeeling="remove">
        </app-Feeling>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';
    import Feeling from './Feeling.vue';

    export default {
        data() {
            return {
                descriptionModel: '',
                isValid: false,
            };
        },
        components: {
            appFeeling: Feeling,
        },
        computed: {
            feelings() {
                return this.$store.getters.getHappyFeelings;
            },
        },
        methods: {
            ...mapActions({
                saveHappyFeeling: 'addHappyFeeling',
                editHappyFeeling: 'updateHappyFeeling',
                deleteHappyFeeling: 'deleteHappyFeeling',
            }),
            add() {
                if (this.descriptionModel.trim() !== '') {
                    this.saveHappyFeeling(this.descriptionModel);
                    this.descriptionModel = '';
                    this.isValid = false;
                } else {
                    this.isValid = true;
                }
            },
            edit(feelingModel) {
                this.editHappyFeeling(feelingModel);
            },
            remove(feelingModel) {
                this.deleteHappyFeeling(feelingModel);
            },
        },
    };
</script>