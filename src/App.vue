<template>
  <div id="app">
    <resume></resume>
  </div>
</template>

<script>
import Resume from './components/Resume'

export default {
  name: 'app',
  components: {
    Resume
  }
}
</script>

<style>
  @import url('//fonts.googleapis.com/css?family=Lato');
  @import url('//fonts.googleapis.com/css?family=Rokkitt');

  html, body {
    background: #303030; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
