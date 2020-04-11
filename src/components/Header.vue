<template>
    <div class="ui inverted menu">
        <div class="ui container">
            <div class="item" id="retroIcon">
                <img class="logo" src="/src/assets/icon.png">
                TheRetroApp
            </div>
            <div class="right menu">
                <router-link to="/" active-class="active item">
                    <a><i class="home icon"></i> Home</a>
                </router-link>
                <router-link to="/retro-board" class="item">
                    <a><i class="clipboard outline list icon"></i> Retro Board</a>
                </router-link>
                <router-link to="/retro-history" class="item">
                    <a><i class="history icon"></i> Retro History</a>
                </router-link>
                <div class="ui simple dropdown item">
                    <i class="user outline icon"></i> <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item" href="#"><i class="user icon"></i> Profile</a>
                        <a class="item" href="#"><i class="arrow right icon"></i> Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    #retroIcon {
        font-family: 'Apple Chancery';
        color: coral;
        font-size: 14pt;
    }
</style>