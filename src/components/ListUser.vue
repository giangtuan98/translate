<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.email }}</td>
          <td>{{ row.item.name }}</td>
          <td>
            <v-btn color="primary" @click="goToEditUser(row.item.name)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-btn block color="primary" dark @click="createUser">
      {{ trans("ユーザーID") }}
    </v-btn>
  </div>
</template>

<script>
import { translate } from "../../mixins/translate";

export default {
  mixins: [translate],
  data() {
    return {
      headers: [
        {
          text: "Email",
          value: "email",
        },
        {
          text: "name",
          value: "name",
        },
        {
          text: "action",
          value: "",
        },
      ],
      users: [],
    };
  },
  methods: {
    createUser() {
      this.$router.push({ name: "user.create" });
    },
    goToEditUser(userId) {
      this.$router.push({
        name: "user.edit",
        params: {
          id: userId,
        },
      });
    },
  },
  created() {
    console.log("created");
    this.$http.get("data.json").then((response) => {
      let data = response.body;
      for (let key in data) {
        this.users.push(data[key]);
      }
    });
  },
};
</script>

<style></style>
