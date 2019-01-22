<template>
  <div id="app">
    <sidebar />
  </div>
</template>

<script>
  import sidebar from 'js/components/sidebar';

  export default {
    name: 'app',
    components: {
      sidebar,
    },
    data: function () {
      return {};
    },
  };
</script>

<style>

</style>
