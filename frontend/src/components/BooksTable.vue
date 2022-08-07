<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            {{ $t('book-text') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in books"
          :key="item.name"
        >
          <td>{{ index+1 }}</td>
          <td>
            <a
              target="__blank"
              :href="getHrefLink(item)"
            >
              {{ item.title }}
            </a>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'BookTable',
  props: [ 'books', 'project' ],
  data: function() {
    return {
    }
  },
  methods: {
    getHrefLink: function(item){
      return window.location.origin + '/' + this.project + '/' + item.title.split(":")[1]
    }
  }
}
</script>
