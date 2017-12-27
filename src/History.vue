<template>
  <div>
    <div class="container">

      <div>
        <div class="centered-text" style="margin-top: 20px">

          <div style="display: inline-flex;">
            <h4 id="selected_date" class="material-text">25, December 2017</h4>
            <a
            href="#"
            class="center-align waves-effect waves-light btn"
            style="background:#ffad33; margin-top:15px; margin-left:12px">
            CHANGE&nbspDATE
          </a>
        </div>
      </div>

      <table class="centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student No</th>
            <th>Program</th>
            <th>Section</th>
            <th>Year</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody id="table-body">

        </tbody>
      </table>
    </div>
  </div>

  <div class="input-field">
    <input id="date-picker" placeholder="Select Date" type="text" name="date" class="datepicker hidden" style="width: 300px">
  </div>
  </div>

</template>

<script>
export default {
  name: 'activation',
  data () {
    return {

    }
  },
}
</script>

<style>

</style>
