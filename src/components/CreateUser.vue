<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model.lazy="user.email" label="Email" required>
        </v-text-field>
        <v-text-field v-model.lazy="user.name" label="Name"></v-text-field>
        <v-btn block color="primary" dark @click="submit">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    submit() {
      this.$http
        .post("data.json", this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
