<template>
    <div>
      <app-nav v-on:tabchange="tabchange($event)"></app-nav>
      <component v-bind:is="activecomponent"></component>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activecomponent: 'home'
    }
  },
  methods: {
    tabchange: function(page) {
      this.activecomponent = page;
    }
  }
}
</script>

<style>

</style>
