<template>
  <v-data-table
    :headers="headers"
    :items="userData"
    :items-per-page="5"
    class="elevation-1"
  >
 <template v-slot:item.actions="{ item }">

      <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>

      <v-icon @click="deleteItem(item)">delete</v-icon>

    </template>
  </v-data-table>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  data() {
    return {
      userData: [],
      edituserData: {
        email: "",
        psw: "",
        ranking: 1,
        comments: "",
        options: [],
      },
      defaultuserData: {
        email: "",
        psw: "",
        ranking: 1,
        comments: "",
        options: [],
      },
      currentuserData: null,
      currentIndex: -1,
      unsubscribe: null,
      headers: [
        { text: "E-mail", value: "email" },
        { text: "Ranking", value: "ranking" },
        { text: "Comments", value: "comments", sortable: false },
        { text:"Actions", value:"actions", sortable:false}
      ],
    };
  },
  methods: {
    onDataChange(items) {
      let _userData = [];
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _userData.push({
          id: id,
          email: data.email,
          psw: data.psw,
          ranking: data.ranking,
          comments: data.comments,
          options: data.options,
        });
      });
      this.UserData = _userData;
    },
    refreshList() {
      this.currentuserData = null;
      this.currentIndex = -1;
    },
    editItem(item) {
      alert("Show Edit Modal");
      console.log(item);
    },
    deleteItem(item) {
      alert("Show Delete Modal");
      console.log(item);
    },
  },
  mounted() {
    this.unsubscribe = UserDataService.getAll()
      .orderBy("Email", "asc")
      .onSnapshot(this.onDataChange);
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>
