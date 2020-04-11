import Home from './components/Home.vue';
import RetroBoard from './components/board/RetroBoard.vue';
import RetroHistory from './components/history/RetroHistory.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/retro-board', component: RetroBoard},
    {path: '/retro-history', component: RetroHistory},
];