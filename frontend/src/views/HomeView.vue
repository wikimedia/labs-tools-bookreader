<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-sheet min-height="80vh" rounded="lg">
        <br/>
        <v-container>
          <v-form @submit.prevent="readByURL">
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  :label="$t('byurl-placeholder')"
                  type="url" v-model="form1.url" outlined required
                ></v-text-field>
                <v-btn type="submit" color="primary" elevation="2" outlined>{{ $t('form-submit') }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
          <br/>
          <br/>
          <div class="center-separator">{{ $t('or-text') }}</div>
          <br/>
          <br/>
          <v-form @submit.prevent="readByName">
            <v-row>
              <v-col vcols="12" md="4">
                <v-select
                  :items="wsprojects" :label="$t('wiki-projects')"
                  outlined v-model="form2.project" dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :label="$t('label-filename')" :placeholder="$t('filename-placeholder')"
                  outlined v-model="form2.name" required
                ></v-text-field>
                <v-btn type="submit" elevation="2" outlined>{{ $t('form-submit') }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { getWikisourcesLang } from './../utill';

export default {
  name: 'HomeView',
  data: function(){
    return {
      "wsprojects": [],
      "form1": {
        "url": ""
      },
      "form2": {
        "project": "en",
        "name": ""
      }
    }
  },
  created: function(){
    let temp_wsprojects = [];
    Object.entries( getWikisourcesLang() ).forEach( (item) => {
      temp_wsprojects.push( {
        "value": item[0],
        "text": item[1],
      })

    })
    this.wsprojects = temp_wsprojects
  },
  methods: {
    readByURL: function(){
      window.location = window.location.origin + '/read?file=' + this.form1.url
    },
    readByName: function(){
      window.location = window.location.origin + '/' + this.form2.project + '/' + this.form2.name
    }
  },
}
</script>

<style>
.center-separator {
  display: flex;
  line-height: 1em;
  color: gray;
}

.center-separator::before, .center-separator::after {
  content: '';
  display: inline-block;
  flex-grow: 1;
  margin-top: 0.5em;
  background: gray;
  height: 1px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>