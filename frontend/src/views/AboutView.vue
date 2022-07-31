<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-sheet min-height="80vh" rounded="lg" style="padding: 12px">
        <br/>
        <p>
          BookReader is a tool to read PDF/DjVu in book format.
          <br/>
          For context: <a target="__blank" href="https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2019/Multimedia_and_Commons/Improve_the_PDF/book_reader">Improve the PDF/book reader</a> and
          <a target="__blank" href="https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2016/Categories/Commons#Implement_Internet_Archive_BookReader_in_Commons_&_Wikisource">Implement Internet Archive BookReader in Commons & Wikisource</a>.
        </p>
        <h3>Created and maintained by:</h3>
        <p>
          <a target="__blank" href="https://meta.wikimedia.org/wiki/User:Jayprakash12345">Jayprakash</a>
        </p>
        <h3>Viewer Powered by:</h3>
        <p>
          <a target="__blank" href="https://github.com/internetarchive/bookreader">Internet Archive BookReader</a>
        </p>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'AboutView',
  data: function(){
    return {
    }
  }
}
</script>