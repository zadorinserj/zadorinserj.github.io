<template>
  <aside class="sidebar layout__sidebar">
    <section class="profile">
      <a
          class="profile__picture"
          :href="profileInfo.userProfileLink"
          target="_blank"
      >
        <img
            class="profile__photo"
            :src="profileInfo.userProfileImage"
            alt="Profile photo">
      </a>
      <div class="profile__name">{{ profileInfo.userName }}</div>
      <div class="profile__file-counter">2390 files</div>
      <button class="profile__upload-btn">Upload</button>
    </section>
    <form class="search-form" action="#">
      <input class="search-form__input" type="text" placeholder="Search files" required>
    </form>
    <section class="filter">
      <div class="filter__title">Categories</div>
      <nav class="categories">
        <a class="filter__link filter__link--active" href="#">Photos</a>
        <a class="filter__link" href="#">Videos</a>
        <a class="filter__link" href="#">Projects</a>
      </nav>
      <div class="filter__title">
        Albums
        <button class="albums__add"></button>
      </div>
      <nav class="albums filter__list">
        <a class="filter__link" href="#">Subcarpathia 2016</a>
        <a class="filter__link" href="#">Summer 2015</a>
        <a class="filter__link" href="#">Aspen 2015</a>
        <a class="filter__link" href="#">Croatia 2015</a>
      </nav>
    </section>
  </aside>
</template>

<script>
  export default {
    name: 'sidebar',
    props: {
      profileInfo: {
        type: Object,
        default() {
          return {
            userName: '',
            userProfileLink: '',
            userProfileImage: '',
          };
        },
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
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    height: 100%;
    color: #ffffff;
    background-color: #1e1d26;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 28px;
    padding-bottom: 32px;
    background-color: #272631;

    &__picture {
      position: relative;
      margin-bottom: 18px;
      width: 80px;
      height: 80px;
      background-color: #ffffff;
      border-radius: 100%;
      overflow: hidden;
    }

    &__photo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 120%;
      max-height: 120%;
      min-width: 100%;
      min-height: 100%;
    }

    &__name {
      margin-bottom: 10px;
      font-weight: 700;
    }

    &__file-counter {
      margin-bottom: 22px;
      font-size: 14px;
    }

    &__upload-btn {
      width: 160px;
      padding: 10px;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 15px;
      background-color: #ea5a5a;
      border-radius: 40px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      outline: none;
      transition: box-shadow 0.2s ease;

      &:hover {
        box-shadow: 0 0 15px 0 rgba(234, 90, 90, .8);
      }
    }
  }

  .search-form {
    width: 100%;

    &__input {
      width: 100%;
      padding: 20px;
      background-color: transparent;
      border: 1px solid transparent;
      border-top-color: #111111;
      border-bottom-color: #111111;
      font-size: 16px;
      color: #fafafa;
      outline: none;

      &:focus {
        border: 1px solid #ea5a5a;
      }

      &::placeholder {
        color: #444444;
      }
    }
  }

  .filter {
    width: 100%;

    &__title {
      margin-top: 39px;
      margin-bottom: 20px;
      padding-left: 20px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      color: #d6d5df;
    }

    &__link {
      position: relative;
      margin-bottom: 10px;
      padding: 10px 35px;
      display: block;
      font-size: 14px;
      color: #a3a2a8;
      transition: background-color 0.2s ease;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 3px;
        background-color: transparent;
        transition: background-color 0.2s ease;
      }

      &:hover, &--active {
        background-color: #19181e;

        &:before {
          background-color: #ea5a5a;
        }
      }
    }
  }
</style>
