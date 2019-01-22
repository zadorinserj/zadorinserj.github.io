<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <div class="layout">
      <sidebar
          :profile-info="profileInfo"
      ></sidebar>
      <main class="main layout__main">
        <section class="period main__item">
          <navbar :counter="unsplashQuantityPhotos"></navbar>
          <dashboard
              :dashboard-collection="dashboard"
          ></dashboard>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  import sidebar from './components/sidebar.vue';
  import dashboard from './components/dashboard.vue';
  import navbar from './components/navbar.vue';

  const unsplashApi = 'https://api.unsplash.com/';
  const unsplashApiAccessKey ='?client_id=50aadc667f39d6c2f8877889b305811361b8ab7fc24de3aeac77357c685933a3';
  let unsplashUserName = 'bradobrey';
  let unsplashQuantityPhotos = 8;

  export default {
    name: 'app',
    components: {
      sidebar,
      dashboard,
      navbar,
    },
    props: {

    },
    data: function () {
      return {
        profileInfo: {
          userName: '',
          userProfileLink: '',
          userProfileImage: '',
        },
        dashboard: [],
        quantity: unsplashQuantityPhotos,
      };
    },
    created() {
      this.getProfileInfo();
      this.getRandomPhotos();
    },
    methods: {
      getProfileInfo() {
        fetch(unsplashApi + 'users/' + unsplashUserName + '/' + unsplashApiAccessKey).then((response) => {
          response.json().then((data) => {
            this.profileInfo.userName = data.first_name + ' ' + data.last_name;
            this.profileInfo.userProfileLink = data.links.html;
            this.profileInfo.userProfileImage = data.profile_image.medium;
          });
        }).catch();
      },
      getRandomPhotos() {
        fetch(unsplashApi + 'photos/' + 'random/' + unsplashApiAccessKey + '&count=' + unsplashQuantityPhotos + '&orientation=landscape').then((response) => {
          response.json().then((data) => {
            for (let i = 0; i < data.length; i++) {
              this.dashboard.push(data[i]);
            }
          });
        }).catch();
      },
    },
  };
</script>

<style>
  @import "./styles/normalize.css";

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
    background-color: #fafafa;
  }

  .layout {
    width: 100%;
    height: 100vh;

    &__sidebar {
      position: absolute;
      left: 0;
      top: 0;
    }

    &__main {
      position: relative;
    }
  }

  .main {
    margin-left: 220px;
    width: calc(100% - 220px);
    height: 100vh;
    padding: 30px;
    overflow-y: scroll;
  }
</style>
