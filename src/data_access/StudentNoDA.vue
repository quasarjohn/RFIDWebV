<!-- This vue file is for listening to the latest student number -->
<template>
</template>

<script>
export default {
  name: 'studentno-da',
  data () {
    return {
    }
  },
  methods: {
    queryLatestStudentNo() {
      var database = firebase.database();
      database.ref('student_no').once('value').then((student_no) => {
        this.$emit('lastStudentNoLoaded', parseInt(student_no.val()) + 1);
      });
    }
  },
  mounted() {
    this.queryLatestStudentNo();
  }
}

</script>

<style>

</style>
