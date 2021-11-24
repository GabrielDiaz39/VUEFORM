<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-text-field
            v-model="userData.email"
            label="E-mail"
            hint="type your email"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-text-field
            v-model="userData.psw"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters."
            counter
            @click:append="show = !show"
            :rules="[rules.required, rules.min]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <v-slider
            v-model="userData.ranking"
            min="1"
            max="10"
            :label="label_rank.label"
            :track-color="label_rank.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <v-textarea
            label="comments"
            v-model="userData.comments"
            hint="type here your comments..."
          >
          </v-textarea>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-checkbox
            v-model="userData.options"
            value="sendcoupons"
            label="send me monthly coupons"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-checkbox
            v-model="userData.options"
            value="sendspecial"
            label="I want today's special"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-btn color="teal lighten-2" class="mr-4" @click.prevent="submitted"
            >Submit</v-btn
          >
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" md="6" sm="12">
          <v-card class="mx-auto my-12" elevation="2">
            <v-card-title> User Data Content </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" sm="12">
                  <p><b>Email: </b> {{ userData.email }}</p>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <p><b>Password: </b> {{ userData.psw }}</p>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <p><b>Password: </b> {{ userData.psw }}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  data() {
    return {
      show: false,
      userData: {
        email: "",
        psw: "",
        ranking: 5,
        comments: "",
        options: [],
        isSubmitted: false,
      },
      rules: {
        min: (v) => v.length >= 8 || "Min 8 characters",
        required: (value) => !!value || "Required.",
      },
      label_rank: {
        label: "Raking",
        val: 10,
        color: "red",
      },
    };
  },
  methods: {
    submitted() {
      //this.userData.isSubmitted = true;
      console.log(JSON.stringify(this.userData));
      
      UserDataService.create(this.userData)
        .then(() => {
          alert("Created new user successfully!");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
