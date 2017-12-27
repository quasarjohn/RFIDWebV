<template>
    <div style="text-align:center">

      <div class="container">
        <div class="row">
          <div class="col s12 l6">
            <h4 class="material-text hide-on-med-and-down" style="text-align: left;">Add New Student</h4>
          </div>
          <div class="col s12 l6" style="text-align: right;">
            <h4 id="student-no" class="material-text"></h4>
          </div>
        </div>

        <form>

          <div class="row">
            <div class="col s12 l12"><h5 style="text-align: left;" class="material-text">Personal Information</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" id="last-name" name="last-name" class="validate">
              <label for="last-name">Last Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="first-name" id="first-name">
              <label for="first-name">First Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="middle-name" id="middle-name">
              <label for="middle-name">Middle Name</label>
            </div>
            <div class="col s12 l8 input-field">
              <input type="text" id="address" name="address">
              <label for="address">Address</label>
            </div>
            <div class="col s12 l4 input-field">
              <input id="phone" type="text" name="phone">
              <label for="phone">Phone Number</label>
            </div>
            <div class="col s12 l4 input-field">
              <input class="datepicker" type="text" id="birth-date" name="birth-date">
              <label for="birth-date">Birth Date</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="civil-status" id="civil-status">
              <label for="civil-status">Civil Status</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="nationality" id="nationality">
              <label for="nationality">Nationality</label>
            </div>
            <div class="col s12 l12 input-field"><h5 style="text-align: left;" class="material-text">Academic Information</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" name="program" id="program">
              <label for="program">Program ex. STEM</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="year" id="year">
              <label for="year">Year ex. 2</label>
            </div>
            <div class="col s12 l4 input-field">
              <input type="text" name="section" id="section" class="autocomplete">
              <label for="section">Section</label>
            </div>
            <div class="col s12 l12 input-field"><h5 style="text-align: left;" class="material-text">Guardian</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" name="guardian" id="guardian">
              <label for="guardian">Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input type="text" name="guardian-phone" id="guardian-phone">
              <label for="guardian-phone">Phone Number</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="guardian-address" id="guardian-address">
              <label for="guardian-address">Address</label>
            </div>
            <div class="col s12 l12" style="text-align: right;"><a
              class="center-align waves-effect waves-light btn-large"
              style="background:#ffad33; margin-top:20px; margin-left:5px" id="save_btn">
              SAVE
            </a></div>
          </div>

        </form>
      </div>

      <div id="save_modal" class="modal">
        <div class="modal-content">
          <h4 id="title">Save Data?</h4>
          <p id="subtitle">Make sure you have double checked the data before saving it.</p>
        </div>
        <div class="modal-footer">
          <a  id="save_btn" class="modal-action modal-close waves-effect waves-green btn-flat">SAVE</a>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
