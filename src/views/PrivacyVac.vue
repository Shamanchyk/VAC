<template lang="">
    <div class="terms">
            <h2>Privacy Policy</h2>     
    </div>
    <div class="container">
        <div class="terms-link">
            <div class="terms-link_main" v-for="(term, index) in termsLink" :key="index">
                <div class="terms-link_title" @click="term.open = !term.open">
                    <h4>{{term.title}}</h4>
                    <img :class="term.open === true ? 'terms-link_img' : ''" src="../assets/img/Arrow-Bottom.png" alt="">
                </div>
            <transition name="termsLinkP">    
                <p v-if="term.open" class="terms-link_p">
                    {{term.description}}
                </p>
            </transition>
            </div>
        </div>
    </div>   
</template>
<script>
export default {
    data() {
        return{
            termsLink: [
                {title: 'Terms', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Authorization', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Links', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Site terms of use modifications', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Governing law', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'How we treat your personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Cookies', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
            ],
        }
    },
}
</script>
<style lang="scss">

.terms {
        width: 100%;
        height: 145px;
        background-image: url(../assets/img/Bg.png);
        background-size: 100% 100%;

        h2{
            font-family: 'Gilroy800';
            font-size: 60px;
            line-height: 108.5%;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            display: flex;
            align-items:center;
            width: 85%;
            margin: 0 auto;
            height: 100%;
        }
}

.terms-link {
    padding: 40px 0 20px 0;

    img{
        transition: .5s ease all;
    }

		&_main {
            border: 1px solid #D7D7D7;
            margin-bottom: 20px;
            cursor: pointer;
		}

        &_title{
            padding: 20px 24px 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4{
                font-family: 'Gilroy600';
                font-size: 20px;
                line-height: 25px;
                color: #41456B;
            }
        }
        &_p{
            margin: -10px 24px 20px 30px;
            font-family: 'Gilroy400';
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
        }
        &_img{
            transform: rotate(180deg);
        }
}

.termsLinkP-enter-active,
.termsLinkP-leave-active{
    transition: .5s ease opacity;
}
.termsLinkP-enter-from,
.termsLinkP-leave-to{
    opacity: 0;
}

.termsLinkP-enter-to,
.termsLinkP-leave-from{
    opacity: 1;
}
    
</style>