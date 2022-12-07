<template lang="">
    <div class="terms">
            <h2>Terms & Conditions</h2>     
    </div>
    <div class="container">
        <div class="terms-link">
            <div class="terms-link_main" :class="term.open === true ? 'terms-link_main-active' : ''" v-for="(term, index) in termsLink" :key="index">
                <div class="terms-link_title" @click="term.open = !term.open">
                    <h4>{{term.title}}</h4>
                    <img :class="term.open === true ? 'terms-link_img' : ''" src="../assets/img/Arrow-Bottom.png" alt="">
                </div>
            <transition name="termsLinkP">    
                <p v-if="term.open" class="terms-link_p" :class="term.open === true ? 'terms-link_p-active' : ''">
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
                {title: 'Please read these terms and conditions of use carefully before using this web site', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Modifications of the terms and conditions', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'How we work', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Authorization', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Links', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Minors', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Restricted access', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Governing law', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Privacy policy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Collecting personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Using and sharing personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Sharing your personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Retaining your personal information', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Contacting you', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Accessing your personal information stored by us', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
                {title: 'Responding to privacy concerns or complaints', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores ipsam assumenda quod corrupti fugit!', open: false},
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
            transition: all .4s ease;

            


            &-active{
                padding: 0 0 20px 0;
            }
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
            margin: -10px 24px 0px 30px;
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
/* .terms-link_main-active::after{
    transition: all .4s ease;
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
 */

</style>