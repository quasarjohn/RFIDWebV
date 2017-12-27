<template>

  <div class="container" style="margin-top: 16px">

    <h1>{{activecomponent}}</h1>


    <div class="row hide-on-med-and-down">

      <div class="col s12 l6">
        <div class="time-bar card" style="margin: auto;">
          <div style="display: inline-flex;" class="valign-wrapper">
            <h4 style="margin-left: 16px; margin-top: 28px" id="time" class="material-text cetered-text">11:59 PM</h4>
          </div>
        </div>
      </div>

      <div class="col s12 l6">
        <div class="time-bar card" style="margin: auto;">
          <div style="display: inline-flex;" class="valign-wrapper">
            <h4 style="margin-left: 16px; margin-top: 28px" id="date" class="material-text cetered-text">December 20, 2017</h4>
          </div>
        </div>
      </div>
    </div>


    <div class="card">
      <div id="data_progress" class="progress" style="margin-bottom: 0px; margin-top: 0px">
        <div class="indeterminate"></div>
      </div>
      <div class="row" style="margin: auto;">

        <div class="col s12 l4" style="text-align: center; height: 100%;">

          <img id="img" src="src/assets/ic_avatar.png" class="circle responsive-img" style="width: 240px; height: 240px; margin: 32px; margin-top: 40px">

        </div>
        <div class="col s12 l8" style="padding-left: 32px; padding-bottom: 32px; padding-top: 54px">

          <h4 id="name" class="material-text"></h4>
          <h5 id="program" class="material-text"></h5>
          <h5 id="year" class="material-text"></h5>
          <h5 id="section" class="material-text"></h5>

        </div>


        <div class="col s12 l12 color-primary" style="height: 85px; text-align: center; padding-top: 10px">
          <h4 id="time_in" class="white-text material-text-slim"></h4>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'monitoring',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style>

</style>
