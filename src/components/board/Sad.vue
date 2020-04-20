<template>
    <div>
        <div class="ui raised segment">
            <span class="ui red ribbon label"><i class="frown icon" style="font-size: 14pt"></i></span>
            Feeling Sad
        </div>
        <div class="ui fluid icon input" :class="{error:isValid}">
            <input type="text" placeholder="Your feeling goes here..." v-model="descriptionModel"
                   @keyup.enter="addFeeling">
            <i class="pencil alternate icon"></i>
        </div>
        <h4 class="ui horizontal divider header">
            <i class="minus icon"></i>
        </h4>
        <app-feeling v-for="feeling in feelings"
                     :feeling="feeling"
                     :key="feeling.id"
                     @editFeeling="edit"
                     @removeFeeling="remove">
        </app-feeling>
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
                return this.$store.getters.getSadFeelings;
            },
        },
        methods: {
            ...mapActions({
                saveSadFeeling: 'addSadFeeling',
                editSadFeeling: 'updateSadFeeling',
                removeSadFeeling: 'deleteSadFeeling',
            }),
            addFeeling() {
                if (this.descriptionModel.trim() !== '') {
                    this.saveSadFeeling(this.descriptionModel);
                    this.descriptionModel = '';
                    this.isValid = false;
                } else {
                    this.isValid = true;
                }
            },
            edit(feelingModel) {
                this.editSadFeeling(feelingModel);
            },
            remove(feelingModel) {
                this.removeSadFeeling(feelingModel);
            },
        },
    };
</script>