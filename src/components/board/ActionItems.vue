<template>
    <div>
        <div class="ui raised segment">
            <span class="ui blue ribbon label"><i class="book icon" style="font-size: 14pt"></i> </span>
            Action Items
        </div>
        <div class="ui fluid icon input" :class="{error: isValid}">
            <input type="text" placeholder="Action Item goes here..."
                   @keyup.enter="saveActionItem"
                   v-model="actionDescription">
            <i class="pencil alternate icon"></i>
        </div>
        <h4 class="ui horizontal divider header">
            <i class="minus icon"></i>
        </h4>
        <app-action-item v-for="actionItem in actionsItems"
                         :actionItem="actionItem"
                         :key="actionItem.id"
                         @editActionItem="assign"
                         @deleteActionItem="remove"/>
    </div>
</template>
<script>
    import ActionItem from './ActionItem';
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                actionDescription: '',
                isValid: false,
            };
        },
        components: {
            appActionItem: ActionItem,
        },
        computed: {
            actionsItems() {
                return this.$store.getters.loadActionItems;
            },
        },
        methods: {
            ...mapActions({
                save: 'saveAction',
                edit: 'updateAction',
                delete: 'deleteAction',
            }),
            saveActionItem() {
                if (this.actionDescription.trim() !== '') {
                    this.isValid = false;
                    this.save(this.actionDescription);
                    this.actionDescription = '';
                } else {
                    this.isValid = true;
                }
            },
            assign(actionItem) {
                this.edit(actionItem);
            },
            remove(id) {
                this.delete(id);
            },
        },
    };
</script>