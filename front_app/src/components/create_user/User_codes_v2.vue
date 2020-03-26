<template>
    <div class="form-data"  >

        <input-form input-id="codemail" input-type="text" 
            info-label="Code reçu par email" 
            event="codemail" @codemail="saveCodeEmail" >
        </input-form>

        <input-form input-id="codephone" input-type="text" 
            info-label="Code reçu par téléphone" 
            event="codephone" @codephone="saveCodePhone" >
        </input-form>

        <button class="form-button-ok" @click="checkCodes()">
            <p>Suivant</p>
        </button>
    </div>

</template>

<script>
import inputForm from './../inputs/input_form_v1'

export default {
    components: {inputForm},

    data () {
        return {
            emailCode: '',
            phoneCode: ''
        }
    },

    methods : {

        saveCodeEmail (code) {
            this.emailCode = code.value
        },
        saveCodePhone (code) {
            this.phoneCode = code.value
        },
        
        checkCodes () {
            /* 
            TODO: faire en sorte de verifier le token et les codes.
                  Si codes === OK => creation du user plus go page suivante
            */
            this.$router.push('confirmation');
        },

    }

}
</script>

<style src="../styles/style_forms.css"></style>

