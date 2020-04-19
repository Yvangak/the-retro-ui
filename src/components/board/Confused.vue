<template>
    <div>
        <div class="ui raised segment">
            <span class="ui orange ribbon label"><i class="meh icon" style="font-size: 14pt"></i></span>
            Feeling Confused
        </div>
        <div class="ui fluid icon input" :class="{error: isValid}">
            <input type="text" placeholder="Your feeling goes here..." v-model="descriptionModel"
                   @keyup.enter="add">
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
                return this.$store.getters.getLoadedData;
            },
        },
        methods: {
            ...mapActions({
                savedConfusedFeeling: 'addConfusedFeeling',
                editConfusedFeeling: 'updateConfusedFeeling',
                removeConfusedFeeling: 'deleteConfusedFeeling'
            }),
            add() {
                if (this.descriptionModel.trim() !== '') {
                    this.savedConfusedFeeling(this.descriptionModel);
                    this.descriptionModel = '';
                    this.isValid = false;
                } else {
                    this.isValid = true;
                }

            },
            edit(feelingModel){
                this.editConfusedFeeling(feelingModel);
            },
            remove(feelingModel){
                this.removeConfusedFeeling(feelingModel);
            }
        },
    };
</script>