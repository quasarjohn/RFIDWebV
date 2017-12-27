<template>
</template>

<script>
export default {
  props:['studentNo'],
  name: 'student-da',
  data () {
    return {
    }
  },
  methods: {
    queryStudent() {
      var database = firebase.database();
      database.ref('students').orderByChild('student_no').
          equalTo(parseInt(this.studentNo)).once('value').then((students) => {
            let count = 0;
            let student = null;
            students.forEach(function(s) {
              student = s.val();
            });
            this.$emit('studentQueried', student);
          });
    }
  },
  watch: {
    studentNo() {
      this.queryStudent();
    }
  }
}

</script>

<style>

</style>
