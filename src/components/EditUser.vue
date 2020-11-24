<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="user.email" label="Email"></v-text-field>
        <v-text-field v-model="user.name" label="Name"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "giang@gmail.com",
        name: "giang",
      },
    };
  },
  watch: {
    $route(to) {
      this.user.name = to.params.id;
    },
  },
  created() {
    this.user.name = this.$route.params.id;
  },
  beforeRouteEnter(to, from, next) {
    console.log("before route enter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("Do you want leave this page?")) {
      next();
    }
  },
};
</script>

<style></style>
