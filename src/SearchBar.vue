<template>
  <div class="card search-bar" style="margin: auto; margin-top: 16px">
    <div class="valign-wrapper">
      <input ref="searchfield" style="margin-left: 16px;"
      placeholder="Search by student number"
      type="text" name="search">
      <i class="material-icons clickable-icon"
      style="margin-bottom: 20px; margin-right: 10px" @click="searchStudent()">search
      </i>
    </div>
    <div id="data_progress" class="progress" v-bind:class="{hidden: !isSearchLoading}" style="margin-top: -24px">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['isSearchLoading'],
  name: 'app-search-bar',
  data () {
    return {
    }
  },
  methods: {
    searchStudent() {
      let student_no = this.$refs.searchfield.value;
      this.$emit('searchStudent', student_no);
    }
  }
}
</script>

<style>

</style>
