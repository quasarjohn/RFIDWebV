<template>
  <div>

    <app-search-bar
    v-on:searchStudent="searchStudent($event)"
    v-bind:isSearchLoading="isSearchLoading"
    v-bind:content="studentNo"
    />
    <student-da
    v-bind:studentNo="studentNo"
    v-on:studentQueried="studentQueried($event)"
    />
    <imageuploader-da
      v-bind:fileObject="fileObject"
      v-on:imageUploaded="onImageUploaded($event)"
    />

    <div  id="content" class="container" v-bind:class="{hidden: isHidden}" style="margin-top: 16px">
      <div class="card" id="result">

        <div class="row" style="margin: auto;">
          <div class="col s12 l4" style="text-align: center;">
            <img id="dp" src="assets/ic_avatar.png" v-bind:src="dp" class="responsive-img circle" style="width: 240px; height: 240px; margin: 32px;">
          </div>
          <div class="col s12 l8" style="padding-left: 32px; padding-top: 16px; padding-bottom: 32px">

            <h4 class="material-text" id="name">{{fullName}}</h4>
            <h5 class="material-text" id="student_no">{{studentNo}}</h5>
            <h5 class="material-text" id="program">{{program}}</h5>
            <h5 class="material-text" id="year">{{year}}</h5>
            <h5 class="material-text" id="section">{{section}}</h5>
            <p id="guardian">{{guardian}}</p>
            <p id="phone">{{phone}}</p>
            <p id="address">{{address}}</p>

          </div>

          <div class="col s12 l12 color-primary valign-wrapper" style="height: 60px; text-align: center; padding-left: 200px; padding-right: 200px">
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon" @click="edit()">edit</i>
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon" @click="updateImage()">camera</i>
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon" @click="registerRfid()">fingerprint</i>
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon" @clck="disableRfid()">delete</i>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>ID Activation</h4>
        <p>Tap ID to activate.</p>
        <div class="centered-text">
          <img src="assets/ic_rfid.jpg">
          <input id="rfid_input" type="text" style="height: 0px; width: 0px; opacity: 0%;">
        </div>
      </div>
      <input type="file" name="image" id="img_chooser" ref="img_chooser" style="display: none;" @change="onFileChanged()" />
    </div>

    <div id="lock_modal" class="modal">
      <div class="modal-content">
        <h4 id="title">Disable RFID?</h4>
        <p id="subtitle">This will remove access to the ID card associated to this account.</p>
      </div>
      <div class="modal-footer">
        <a  id="save_btn" class="modal-action modal-close waves-effect waves-green btn-flat">DISABLE</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:['activationStudentNo'],
  name: 'activation',
  data () {
    return {
      studentNo: this.activationStudentNo,
      fullName: '',
      program:'',
      year:'',
      section:'',
      guardian:'',
      phone:'',
      address:'',
      dp:'',

      //bound to the search result
      isHidden: true,
      //bound to the search bar. true if result is loading
      isSearchLoading: false,

      student: '',

      //bound to imageUploaderDA
      fileObject: ''
    }
  },
  methods: {
    studentQueried(s) {
      if(s!=null){
        //I assign the value of so I can pass it to the AddStudent page for
        //editing through an event
        this.student = s;

        console.log(s);
        this.fullName = s.last_name + ', ' + s.first_name + ' '  + s.middle_name;
        this.program = s.program;
        this.year = s.year;
        this.section = s.section;
        this.guardian = 'Guardian: ' + s.guardian_name;
        this.phone = 'Phone Number: ' + s.guardian_phone;
        this.address = 'Address:' + s.guardian_address;
        this.dp = s.img_url;
        this.isHidden = false;
      }
      else {
        Materialize.toast('No result found', 2000);
      }
      this.isSearchLoading = false;
    },
    searchStudent(studentNo) {
      //update the student number using the event from the search app-search-bar
      //the studentDA has a prop that watches the value of student_no
      //if it is changed, the query will run
      this.studentNo = studentNo;
      this.isSearchLoading = true;
    },
    edit() {
      this.$emit('editStudent', this.student);
    },
    updateImage() {
      this.$refs.img_chooser.click();
    },
    registerRfid() {

    },
    disableRfid() {

    },
    onFileChanged() {
      //bound to imaguploaderDA
      //when file is selected, change it here and it will upload via props
      this.fileObject = {
        file: this.$refs.img_chooser.files[0],
        key: this.student.key
      }

    },
    onImageUploaded(url) {
      this.dp = url;
    }
  },
  mounted() {
    //on page load,try to query a student
    if(this.activationStudentNo.length != 0) {
      this.isSearchLoading = true;
      console.log(this.$children[1].queryStudent(this.activationStudentNo));
    }
  }
}


</script>

<style>

</style>
