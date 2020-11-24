<template>
  <v-app>
    <v-app-bar app>
      <router-link :to="{ name: 'user.create' }" active-class="active" exact
        >Create User</router-link
      >
      <router-link :to="{ name: 'user.list' }" exact>List User</router-link>
    </v-app-bar>
    <v-main>
      <router-view> </router-view>
    </v-main>

    <div style="height: 700px;"></div>
    <h3 id="react">React</h3>
    <div style="height: 700px;"></div>
  </v-app>
  <!-- <v-container>
    <v-tabs>
      <v-tab>
        <router-link to="/users/create">Create User</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/users">List User</router-link>
      </v-tab>
    </v-tabs>


  </v-container> -->
</template>

<script>
// import CreateUser from "./CreateUser";
// import ListUser from "./ListUser";
export default {
  name: "HelloWorld",
  components: {
    // CreateUser,
    // ListUser,
  },
  data: () => ({}),
  created() {
    console.log(this.$route.query.locale);
    console.log(this.$route.query.browser);
  },
};
</script>
