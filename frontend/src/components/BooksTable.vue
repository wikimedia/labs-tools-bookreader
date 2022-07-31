<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            S. No.
          </th>
          <th class="text-left">
            Book
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
              :href="'https://' + project + '.wikisource.org/wiki/' + item.title"
              target="__blank"
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
  }
}
</script>
