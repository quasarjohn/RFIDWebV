<template>
  <div>

    <app-search-bar></app-search-bar>

    <div  id="content" class="container hidden" style="margin-top: 16px">
      <div class="card" id="result">

        <div class="row" style="margin: auto;">
          <div class="col s12 l4" style="text-align: center;">
            <img id="dp" src="assets/ic_avatar.png" class="responsive-img circle" style="width: 240px; height: 240px; margin: 32px;">
          </div>
          <div class="col s12 l8" style="padding-left: 32px; padding-top: 16px; padding-bottom: 32px">

            <h4 class="material-text" id="name"></h4>
            <h5 class="material-text" id="student_no"></h5>
            <h5 class="material-text" id="program"></h5>
            <h5 class="material-text" id="year"></h5>
            <h5 class="material-text" id="section"></h5>
            <p id="guardian"></p>
            <p id="phone"></p>
            <p id="address"></p>

          </div>

          <div class="col s12 l12 color-primary valign-wrapper" style="height: 60px; text-align: center; padding-left: 200px; padding-right: 200px">
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon">edit</i>
            <i style="margin:auto;" class="material-icons md-24 md-light clickable-icon">camera</i>
            <i id="fingerprint" style="margin:auto;" class="material-icons md-24 md-light clickable-icon">fingerprint</i>
            <i id="delete_img" style="margin:auto;" class="material-icons md-24 md-light clickable-icon">delete</i>
          </div>

        </div>
      </div>

    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>ID Activation</h4>
        <p>Tap ID to activate.</p>
        <div class="centered-text">
          <img src="assets/ic_rfid.jpg">
          <input id="rfid_input" type="text" style="height: 0px; width: 0px; opacity: 0%;">
        </div>
      </div>
      <input type="file" name="image" id="img_chooser" style="display: none;" />
    </div>


    <div id="lock_modal" class="modal">
      <div class="modal-content">
        <h4 id="title">Disable RFID?</h4>
        <p id="subtitle">This will remove access to the ID card associated to this account.</p>
      </div>
      <div class="modal-footer">
        <a  id="save_btn" class="modal-action modal-close waves-effect waves-green btn-flat">DISABLE</a>
      </div>
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
