<template>
    <div class="form-data" >
        
        <input-form input-id="useremail" input-type="text" 
            info-label="Adresse email" 
            info-question="Cette adresse sera utilisée afin de nous permettre de communiquer avec vous."
            info-error="Veuillez entrer une adresse e-mail valide."
            event="email" @email="saveEmail" >
        </input-form>

        <input-form input-id="password" input-type="password" 
            info-label="Mot de passe" 
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="password" @password="savePwd" >
        </input-form>
        
        <input-form input-id="confirmation" input-type="password" 
            info-label="Confirmation de mot de passe"
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="same-password" @same-password="saveSamePwd" >
        </input-form>

        <input-form input-id="phone" input-type="text" 
            info-label="Téléphone"
            info-question="Nous utilisons votre numéro de telephone qu'à des fins de sécurité et de maintien de comptes individuels."
            info-error="Veuillez entrer un numero de téléphone valide."
            event="phone" @phone="savePhone" >
        </input-form>

        <input-date info-label="Date de naissance : "
            event="birthday" @birthday="saveBirthday" >
        </input-date>

        <input-form input-id="zip" input-type="text" 
            info-label="Code postal"
            info-error="Veuillez entrer un code postale valide."
            event="zip" @zip="saveZip" >
        </input-form>

        <button class="form-button-ok" @click="validateData()"  v-bind:disabled="isButtonDisable" >
            <p>Suivant</p>
        </button>

    </div>
</template>

<script>
import dataValidater from './../../services/api/data_validator'

import inputForm from './../inputs/input_form_v1'
import inputDate from './../inputs/input_date_v1'

export default {
    components: { inputForm, inputDate },
    data () {
        return {
            // data associe au champs 'adresse mail'
            savedEmail: '',
            isValidEmail: false,

            // data associe au champs 'mot de passe'
            savedPassword: '',
            isValidPwd:false,

            // data associe au champs 'confirmation de mot de passe'
            savedSamePwd: '',

            // data associe au champs 'telephone'
            savedPhone: '',
            isValidPhone: false,

            // data associe au champs 'date de naissance'
            savedBirthday: '',
            isValidBirthday: false,

            // data associe au champs 'code postal'
            savedZip: '',
            isValidZip: false,
        }
    },

    methods: {
        saveEmail (email) {
            this.savedEmail = email.value
            this.isValidEmail = email.isValid
        },
        savePwd (pwd) {
            this.savedPassword = pwd.value
            this.isValidPwd = pwd.isValid
        },
        saveSamePwd (pwd) {
            this.savedSamePwd = pwd.value
        },
        savePhone (phone) {
            this.savedPhone = phone.value
            this.isValidPhone = phone.isValid
        },
        saveZip (zip) {
            this.savedZip = zip.value
            this.isValidZip = zip.isValid
        },
        saveBirthday (date) {
            this.savedBirthday = date.value
            this.isValidBirthday = date.isValid
        },

        validateData () {
            // TODO : verifier qu'il n existe pas deja un user avec ce numero ou cette adresse mail

            var token = dataValidater.getToken({
                email: this.savedEmail, 
                phone: this.savedPhone, 
                pwd: this.savedPassword
            });
            this.$emit('tokenized', token);
            console.log('codePhone : ' + dataValidater.getPhoneCode());
            console.log('codeEmail : ' + dataValidater.getEmailCode());

            this.$router.push('/create/user/verification')
        }
    },

    computed: {

        isButtonDisable () {
            return !(this.isValidEmail && this.isValidPwd && this.isValidPhone 
                && this.isValidBirthday && this.isValidZip 
                && this.savedPassword === this.savedSamePwd)
        } 
        

    }
    
}
</script>

<style src="../styles/style_forms.css"></style>



