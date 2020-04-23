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
        <app-action-item></app-action-item>
    </div>
</template>
<script>
    import ActionItem from './ActionItem';

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
        methods: {
            saveActionItem(){
                if(this.actionDescription.trim()!==''){
                    this.isValid = false;
                }else{
                    this.isValid = true;
                }
            }
        }
    };
</script>