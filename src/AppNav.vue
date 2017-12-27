<template>
  <div id="app-nav">
    <nav>
			<div class="nav-wrapper color-primary">
			  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		    <ul id="nav-mobile" class="left hide-on-med-and-down">
		    	<li class="active"><a href="index.html">Home</a></li>
        	<li><a @click="tabchange('addstudent')">Add Student</a></li>
        	<li><a @click="tabchange('activation')">ID Activation</a></li>
        	<li><a @click="tabchange('monitoring')">Monitoring</a></li>
        	<li><a @click="tabchange('history')">Monitoring History</a></li>
				</ul>

				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li id="log-in" class="clickable-icon gone"><a class="blue-text text-lighten-4" href="login.html">LOG IN</a></li>
				  <li id="greeting" class="gone"><a href="add-student.html">Hi, Donna!</a></li>
        	<li id="avatar" class="gone"><a class="dropdown-button" href="#"
        	data-activates='dropdown'><img src="assets/ic_avatar.png" class="img-avatar circle"></a>
        	</li>
				</ul>

				<ul class="side-nav" id="mobile-demo">
        	<li class="active"><a href="index.html">Home</a></li>
        	<li><a href="add-student.html">Add Student</a></li>
        	<li><a href="id-activation.html">ID Activation</a></li>
        	<li><a href="monitoring.html">Monitoring</a></li>
        	<li><a href="history.html">Monitoring History</a></li>
        	<li><a href="#">Log Out</a></li>
      	</ul>

      	<!-- Dropdown Structure -->
			  <ul id='dropdown' class='dropdown-content' style="margin-top: 63px; margin-left: -5px">
			    <!-- <li><a href="#!" class="black-text" style="font-size: 15px">Profile</a></li> -->
			    <li><a href="#!" class="black-text" style="font-size: 15px">Log Out</a></li>
			  </ul>
			</div>
		</nav>

    <h1>{{navcomponent}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app-nav',
  data () {
    return {
      navcomponent: ''
    }
  },
  methods: {
    tabchange: function(page) {
      console.log('x')
      this.$emit('tabchange', page);
    }
  }
}
</script>

<style>

</style>
