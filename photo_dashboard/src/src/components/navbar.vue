<template>
  <div class="period__nav">
    <div class="period__title">Subcarpathia 2016</div>
    <div class="period__photo-number">{{ counter }} photos</div>
    <div class="interactive">
      <button class="interactive-btn interactive-btn--play"></button>
      <button class="interactive-btn interactive-btn--share"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      counter: {
        type: Number,
        default: 0,
      },
    },
    model: {

    },
    data() {
      return {

      };
    },
    watch: {

    },
    created() {

    },
    methods: {

    },
  };
</script>

<style>
  .period {
    &__nav {
      margin-bottom: 15px;
      display: flex;
      align-items: flex-end;
    }

    &__title {
      margin-right: 9px;
      font-size: 22px;
      color: #444444;
      line-height: 22px;
    }

    &__photo-number {
      position: relative;
      font-size: 14px;
      color: #c0c0c0;

      &::before {
        content: '(';
      }

      &::after {
        content: ')';
      }
    }

    &__interactive {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
