<template>
<div class="root-newmbr">

    <hr class="form-vertical-border">

    <div class="form-body">
        <div class="form-logo-div">
            <img class="form-logo-img" alt="CHlogo" src="./../../assets/img/logoCH.png"
                @click="goHome()" >
        </div>
        <div class="form-title-div">
            <p class="form-title-text form-title-text-tl">
                <span class="form-title-text form-title-text-hd">D</span>EVENEZ UN HÉRO MAINTENANT</p>
            <hr class="form-title-line-hr">
        </div>
        <!-- TODO : getAnswer a retirer si possible -->
        <router-view v-on:tokenized="setToken($event)" v-on:verified="getAnswer($event)"></router-view>
    
    </div>

    <div class="div-animation">
        <img class="form-circle-img" alt="CHlogo" src="./../../assets/img/forms_circle.png">                
    </div>

</div>    
</template>

<script>

export default {

    data () {
        return {
            token : '',
        }  
    },
    methods : {
        setToken (token) { this.token = token },
        goHome () {
            this.$router.push('/')
        }
    }
    
}
</script>

<style src="../styles/style_forms.css"></style>


