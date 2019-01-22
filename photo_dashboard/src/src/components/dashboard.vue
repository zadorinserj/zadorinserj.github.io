<template>
  <div class="period-grid">
    <div
        v-if="photoCollection.length !== 0"
        class="period-grid__item"
        v-for="item in photoCollection"
        v-bind:key="item.id"
    >
      <div class="period-grid__image-wrapper">
        <img class="period-grid__image" :src="item.urls.regular" alt="">
      </div>
      <div class="period-grid__date">25.02.2016</div>
    </div>
  </div>
</template>

<script>
  // import moment from 'moment';

  export default {
    name: 'dashboard',
    props: {
      dashboardCollection: {
        type: Array,
        default: [],
      },
    },
    model: {

    },
    data() {
      return {
        photoCollection: this.dashboardCollection,
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
  .period-grid {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: calc(100% / 4 - 25px);
      height: 25vh;
      margin: 10px 10px 20px;

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-child(4n - 3) {
        margin-left: 0;
      }

      @media(max-width: 1500px) {
        width: calc(100% / 3 - 40px);
        height: 23vh;
      }

      @media(max-width: 1100px) {
        width: calc(100% / 2 - 40px);
      }

      @media(max-width: 768px) {
        width: 100%;
        height: 25vh;
      }
    }

    &__image-wrapper {
      position: relative;
      width: 100%;
      height: calc(100% - 20px);
      margin-bottom: 5px;
      background-color: #424561;
      border-radius: 5px;
      overflow: hidden;
    }

    &__image {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 120%;
      max-height: 120%;
      min-width: 100%;
      min-height: 100%;
    }

    &__date {
      font-size: 14px;
      color: #c0c0c0;
    }
  }
</style>
