<template>
    <div style="text-align:center">

      <!-- responsible for adding new student -->
      <student-da v-bind:student="student"></student-da>
      <!-- for listening to the latest student number -->
      <studentno-da v-on:lastStudentNoLoaded="lastStudentNoLoaded($event)"></studentno-da>

      <div class="container">
        <div class="row">
          <div class="col s12 l6">
            <h4 class="material-text hide-on-med-and-down" style="text-align: left;">Add New Student</h4>
          </div>
          <div class="col s12 l6" style="text-align: right;">
            <h4 class="material-text">Student Number: {{student_no}}</h4>
          </div>
        </div>

        <form>

          <div class="row">
            <div class="col s12 l12"><h5 style="text-align: left;" class="material-text">Personal Information</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" ref="last_name" name="last-name" class="validate">
              <label for="last-name">Last Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="first-name" ref="first_name">
              <label for="first-name">First Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="middle-name" ref="middle_name">
              <label for="middle-name">Middle Name</label>
            </div>
            <div class="col s12 l8 input-field">
              <input type="text" ref="address" name="address">
              <label for="address">Address</label>
            </div>
            <div class="col s12 l4 input-field">
              <input ref="phone" type="text" name="phone">
              <label for="phone">Phone Number</label>
            </div>
            <div class="col s12 l4 input-field">
              <input class="datepicker" type="text" ref="birth_date" name="birth-date">
              <label for="birth-date">Birth Date</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="civil-status" ref="civil_status">
              <label for="civil-status">Civil Status</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="nationality" ref="nationality">
              <label for="nationality">Nationality</label>
            </div>
            <div class="col s12 l12 input-field"><h5 style="text-align: left;" class="material-text">Academic Information</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" name="program" ref="program">
              <label for="program">Program ex. STEM</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="year" ref="year">
              <label for="year">Year ex. 2</label>
            </div>
            <div class="col s12 l4 input-field">
              <input type="text" name="section" ref="section" class="autocomplete">
              <label for="section">Section</label>
            </div>
            <div class="col s12 l12 input-field"><h5 style="text-align: left;" class="material-text">Guardian</h5></div>
            <div class="col s12 l4 input-field">
              <input type="text" name="guardian" ref="guardian">
              <label for="guardian">Name</label>
            </div>
            <div class="col s12 l4 input-field">
              <input type="text" name="guardian-phone" ref="guardian_phone">
              <label for="guardian-phone">Phone Number</label>
            </div>
            <div class="col s12 l4 input-field">
              <input  type="text" name="guardian-address" ref="guardian_address">
              <label for="guardian-address">Address</label>
            </div>
            <div class="col s12 l12" style="text-align: right;"><a
              @click="addStudent()"
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
      student: '',
      student_no: 1000
    }
  },
  methods: {
    addStudent() {

      var r = this.$refs;

      var s = {
				last_name: r.last_name.value,
				first_name: r.first_name.value,
				middle_name: r.middle_name.value,
				address: r.address.value,
				phone_number: r.phone.value,
				birth_date: r.birth_date.value,
				civil_status: r.civil_status.value,
				nationality: r.nationality.value,
				section: r.section.value,
				program: r.program.value,
				year: r.year.value,
				guardian_name: r.guardian.value,
				guardian_phone: r.guardian_phone.value,
				guardian_address: r.guardian_address.value,
				date_added: new Date().getTime(),
				student_no: this.student_no
			}

      //this data is bound to props in student DA
      //student will be inserted to database when it is changed
      this.student = s;
    },
    //this is an int, already incremented
    lastStudentNoLoaded(student_no) {
      console.log(student_no);
      this.student_no =  student_no;
    }
  },
  mounted() {
    this.$refs.last_name.focus();
  }
}
</script>

<style>

</style>
