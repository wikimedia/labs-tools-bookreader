<template>
  <div>
    <v-row>
      <v-col cols="8"></v-col>
      <v-col cols="4">
          <v-select
            :items="wsprojects" :label="$t('wiki-projects')"
            outlined v-model="selectedproject" dense @change="loadProject"
          ></v-select>
      </v-col>
    </v-row>
    <books-table :books="indexdata" :project="selectedproject"></books-table>
  </div>
</template>

<script>
import { getWikisourcesLang } from '@/utill';
import axios from 'axios';
import BooksTable from '@/components/BooksTable.vue';

export default {
  name: 'BooksView',
  components: {
    BooksTable
  },
  data: function(){
    return {
      "wsprojects": [],
      "selectedproject": "en",
      "indexdata": null
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
    this.loadProject()
  },
  methods: {
    loadProject: function(){
      let endpoint = "https://"+ this.selectedproject + ".wikisource.org/w/api.php"
      const parameters = {
          "action": "query",
          "format": "json",
          "list": "querypage",
          "qppage": "IndexPages",
          "qplimit": "50",
          "origin": "*"
      }

      axios.get(endpoint, { params: parameters })
        .then( res => {
          if( res.status === 200 ){
            this.indexdata = res.data.query.querypage.results
          }
        })
        .catch( err => {
          alert("Something went wrong :(")
        })
    }
  }
}
</script>