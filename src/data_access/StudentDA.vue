<!-- This vue file is for reading and writing students -->
<template>
</template>

<script>
export default {
  props:['studentNo', 'student'],
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
    },
    addStudent() {
      console.log(this.student)
      var database = firebase.database();
      database.ref('students').push().set(this.student);
    }
  },
  watch: {
    studentNo() {
      this.queryStudent();
    },
    student() {
      this.addStudent()
    }
  }
}

</script>

<style>

</style>
