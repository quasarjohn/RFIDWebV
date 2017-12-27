<template>
    <div id="wrapper" style="text-align: center;">
      <h2
      class="white-text"
      style="margin-top: 80px; font-weight: 200">
      Welcome to Attendance<br>Monitoring
      </h2>

      <a
      href="add-student.html"
      class="center-align waves-effect waves-dark btn-large white black-text"
      style="margin-top:20px; width:150px; margin-right:5px">ADD&nbspSTUDENT
      </a>
      <a
      href="monitoring.html"
      class="center-align waves-effect waves-light btn-large"
      style="background:#ffad33; margin-top:20px; width:150px; margin-left:5px">
      MONITORING
      </a>

      <app-search-bar></app-search-bar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
}
</script>

<style>

</style>
