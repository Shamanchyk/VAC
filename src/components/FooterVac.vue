<template lang="">
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-logo">
                    <img src="../assets/img/LogoFooter.svg" alt="">
                </div>
                <div class="footer-link">
                    <div class="footer-link_teams">
                        <router-link to="/terms">Terms</router-link>
                        <router-link to="/privacy">Privacy</router-link>
                    </div>
                    <div class="footer-link_soc">
                        <a href="#"><img src="../assets/img/InstagramFooter.png" alt=""></a>
                        <a href="#"><img src="../assets/img/FacebookFooter.png" alt=""></a>
                        <a href="#"><img src="../assets/img/YouTubeFooter.png" alt=""></a>
                    </div>
                    <div class="footer-link_create">
                        <span>Created by</span>
                        <img src="../assets/img/LogoFooterId.png" alt="">
                    </div>
                </div>
                <div class="footer-copy">
                    <h4>©Copyright, 2020. Vehicle Approval</h4>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

.footer {
    width: 100%;
    background: #7481FF;
}

.footer-main {
    padding: 40px 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.footer-link {
    display: flex;
    align-items: center;
    width: 56%;
    justify-content: space-between;

		&_teams {
            display: flex;
            gap: 20px;
            
            a{
                display: block;
                font-family: 'Gilroy600';
                font-size: 16px;
                line-height: 14px;
                text-align: center;
                color: #FFFFFF;
                border-bottom: 2px solid transparent;

                &:hover{
                    border-bottom: 2px solid #FFFFFF;
                    transition: .2s ease all;
                }
            }
		}

		&_soc {
            display: flex;
            align-items: center;
            gap: 10px;
		}

		&_create {
            display: flex;
            align-items: center;
            gap: 8px;

            span{
                font-family: 'Gilroy600';
                font-size: 16px;
                line-height: 14px;
                text-align: center;
                color: #FFFFFF;
            }
		}
}

.footer-copy {
    h4{
        font-family: 'Gilroy600';
        font-size: 16px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
    }
}

    
</style>