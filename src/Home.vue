<template>
    <div id="wrapper" style="text-align: center;">
      <h2
      class="white-text"
      style="margin-top: 80px; font-weight: 200">
      Welcome to Attendance<br>Monitoring
      </h2>

      <a
      @click="tabChange('addstudent')"
      class="center-align waves-effect waves-dark btn-large white black-text"
      style="margin-top:20px; width:160px; margin-right:5px">ADD&nbspSTUDENT
      </a>
      <a
      @click="tabChange('monitoring')"
      class="center-align waves-effect waves-light btn-large"
      style="background:#ffad33; margin-top:20px; width:160px; margin-left:5px">
      MONITORING
      </a>
      <app-search-bar v-on:searchStudent="searchStudent($event)"></app-search-bar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    tabChange(page) {
      this.$emit('tabChange', page);
    },
    searchStudent(student_no) {
      this.$emit('searchStudentFromHome', student_no);
    }
  }
}
</script>

<style>

</style>
