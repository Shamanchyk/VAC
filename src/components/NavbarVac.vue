<template>
    <nav class="header">
        <div class="container">
            <div class="naw-wrapper">
                <router-link to="/" class="logo">
                    <img src="@/assets/img/Logo.svg" alt="">
                </router-link>
                <div class="header-rigth">
                    <div class="header-btn">
                    <router-link to="/Inventory" class="nav-inventory">Inventory</router-link>
                    <router-link to="/Request" class="nav-request">Request a car</router-link> 
                    </div>
                    <ul>
                        <div class="hamburger">
                            <img src="../assets/img/BurgerMenu.png" v-if="!mobileNav" @click="toggleMobleNav" key="menu" alt=""/>
                            <img src="../assets/img/BurgerMenuExt.png" v-if="mobileNav" @click="toggleMobleNav" key="clear"  alt=""/>
                        </div>
                        <transition name="menu-transition">
                            <div class="menu" v-show="mobileNav">
                                <li class="menu-link" v-for="(menu, index) in headerMenu" :key="index">
                                    <router-link :to="menu.path">
                                        {{ menu.name }}
                                    </router-link>
                                </li>

                                <div class="soc-burger_top">
                                    <a href="#"><img src="@/assets/img/Instagram.svg" alt="Instagram"></a>
                                    <a href="#"><img src="@/assets/img/Facebook.svg" alt="Facebook"></a>
                                    <a href="#"><img src="@/assets/img/YouTube.svg" alt="YouTube"></a>
                                </div>
                            </div>
                        </transition>
                    </ul>
                </div>
            </div>   
        </div> 
    </nav>
</template>

<script>
export default {
    data() {
        return{
            headerMenu: [
                {name: 'Contact us', path: '/contact'},
                {name: 'About VAC', path: '/about'},
                {name: 'Loan Rates', path: '/loan'},
                {name: 'Video', path: '/video'},
                {name: 'Blog', path: '/blog'},
                {name: 'Calculate', path: '/calculate'}
            ],
            mobileNav: false,
        }
    },
    methods: {
        toggleMobleNav(){
            this.mobileNav = !this.mobileNav;
        },
    },
}
</script>

<style lang="scss">
.header {
    width: 100%;
    margin: 0 auto;
    background: #FFFFFF;
    font-family: 'Gilroy700';
}
.naw-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
.logo {
    img{
        display: block;
    }
}

.header-rigth{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 63px;
    position: relative;
}

.header-btn{
    display: flex;
    gap: 20px;
    padding-right: 50px;
}

.nav-inventory {
    border: 1px solid #7481FF;
    border-radius: 2px;
    padding: 16px 17px;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #7481FF;
}
.nav-request {
    background: #7481FF;
    padding: 16px 17px;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
}
.hamburger {
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 7px;
    display: flex;
    align-items: center;
    right: 0;

    img{
        z-index: 3;
        transition: .3s ease all;
    }
}

.menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 570px;
    height: 100%;
    background: #FFFFFF;
    right: 0; 
    top: 0;
    z-index: 2;
    padding-top: 130px;
    padding-left: 60px;
}

.menu-link a{
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
    border-bottom: 1px solid transparent;

    &:hover{
        border-bottom: 3px solid #41456B;
        transition: .3s ease all;
    }
}
.soc-burger {
    &_top {
        display: flex;
        gap: 10px;
        margin-top: 240px;
    }
}

.menu-transition-enter-active,
.menu-transition-leave-active{
    transition: .7s ease all;
}

.menu-transition-enter-from,
.menu-transition-leave-to{
    transform: translateX(570px);
}

.menu-transition-enter-to{
    transform: translateX(0);
}


</style>