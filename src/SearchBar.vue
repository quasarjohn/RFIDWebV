

<template>
  <div class="card search-bar" style="margin: auto; margin-top: 16px">
    <div class="valign-wrapper">
      <input id="search-field" style="margin-left: 16px;"
      placeholder="Search by student number"
      type="text" name="search">
      <i class="material-icons clickable-icon" style="margin-bottom: 20px; margin-right: 10px">search</i>
    </div>
    <div id="data_progress" class="progress hidden" style="margin-top: -24px">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-search-bar',
  data () {
    return {
    }
  },
}
</script>

<style>

</style>
