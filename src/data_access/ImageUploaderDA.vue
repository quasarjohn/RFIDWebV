<template>
</template>

<script>
export default {
  props:['fileObject'],
  name: 'imageuploader-da',
  data () {
    return {
    }
  },
  methods: {
    uploadStudentImage() {
      var f = this.fileObject;
      var storage = firebase.storage().ref();
      var database = firebase.database();

      var ref = storage.child('students_img/' + f.key + '/dp.jpg');
      ref.put(f.file).then((snapshot)=> {
        var url = snapshot.downloadURL;
        console.log(url);
        database.ref('students/' + f.key + '/img_url').set(url);
        this.$emit('imageUploaded', url);
      })
    }
  },
  watch: {
    fileObject() {
      this.uploadStudentImage();
    }
  }
}

</script>

<style>

</style>
