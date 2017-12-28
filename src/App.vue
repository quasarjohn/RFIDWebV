<template>
    <div>
      <app-nav v-on:tabChange="tabChange($event)"></app-nav>
      <component
        v-bind:activationStudentNo="activationStudentNo"
        v-bind:studentToEdit="studentToEdit"
        v-bind:is="activeComponent"
        v-on:tabChange="tabChange($event)"
        v-on:searchStudentFromHome="searchStudentFromHome($event)"
        v-on:editStudent="editStudent($event)"
      />
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activationStudentNo: '',
      activeComponent: 'home',

      studentToEdit: ''
    }
  },
  methods: {
    tabChange(page) {
      this.activeComponent = page;
    },
    searchStudentFromHome(student_no) {
      //pass props to activation.vue from home in case user searches using the
      //search bar in the home page
      this.activationStudentNo = student_no;
      this.activeComponent = 'activation';
    },
    editStudent(student) {
      this.studentToEdit = student;
      this.activeComponent = 'addstudent';
    }
  }
}
</script>

<style>

</style>
