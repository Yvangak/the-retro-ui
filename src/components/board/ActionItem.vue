<template>
    <div class="ui cards">
        <div class="card">
            <div class="content">
                <div class="meta">
                    <div class="center aligned header">Action Item # {{actionItem.id}}</div>
                </div>
                <div class="description">
                    <div class="center aligned description">
                        <p>{{actionItem.description}}</p>
                    </div>
                </div>
            </div>
            <div class="extra content">
                <div class="center aligned author">
                    <div v-if="hasOwner">
                        <img class="ui avatar image" src="../../assets/nerd-guy.png"> {{actionItem.owner}}
                        <button class="right floated mini basic blue button ui" @click="changeOwner">
                            &nbsp;&nbsp;<i class="redo icon"></i>
                        </button>
                    </div>
                    <div class="ui basic button simple dropdown item" v-if="!hasOwner">
                        <i class="user icon"></i> Choose responsible
                        <div class="menu">
                            <div class="item" v-for="(owner, index) in owners"
                                 :key="index"
                                 @click="selectOwner(owner)">
                                <i class="chevron right icon"></i> {{owner}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="extra content center aligned">
                <div class="ui buttons">
                    <button class="ui positive button"
                            @click="markAsComplete"
                            :disabled="isCompleted">
                        <i class="check icon"></i>
                    </button>
                    <div class="or"></div>
                    <button class="ui negative button"
                            @click="removeActionItem">
                        <i class="trash icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['actionItem'],
        data() {
            return {
                ownerUserName: '',
                owners: ['Ygakuba', 'rmoussa', 'rdorn4'],
            };
        },
        computed: {
            hasOwner() {
                return this.actionItem.owner !== null;
            },
            isCompleted() {
                return this.actionItem.status === 'COMPLETED';
            },
        },
        methods: {
            selectOwner(owner) {
                const item = {
                    id: this.actionItem.id,
                    owner: owner,
                    status: 'PENDING',
                };
                this.$emit('editActionItem', item);
            },
            markAsComplete() {
                const item = {
                    id: this.actionItem.id,
                    owner: this.actionItem.owner,
                    status: 'COMPLETED',
                };
                this.$emit('editActionItem', item);
            },
            removeActionItem() {
                this.$emit('deleteActionItem', this.actionItem.id);
            },
            changeOwner() {
                this.$emit('resetOwner', this.actionItem);
            },
        },
    };
</script>