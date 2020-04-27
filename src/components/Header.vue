<template>
    <div class="ui menu">
        <div class="ui container">
            <div class="item" id="retroIcon">
                <img class="logo" src="/src/assets/icon.png">
                TheRetroApp
            </div>
            <div class="right menu">
                <router-link to="/retro-board" class="item">
                    <a><i class="clipboard outline list icon"></i> Retro Board</a>
                </router-link>
                <router-link to="/" active-class="active item">
                    <a><i class="history icon"></i> Retro History</a>
                </router-link>
                <div class="ui simple dropdown item">
                    <i class="user outline icon"></i> <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item" href="#"><i class="user icon"></i> Profile</a>
                        <a class="item" href="#"><i class="sign-out icon"></i> Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .blueHeader {
        background-color: #1a69a4 !important;
    }

    #retroIcon {
        font-family: 'Apple Chancery';
        color: coral;
        font-size: 14pt;
    }
</style>