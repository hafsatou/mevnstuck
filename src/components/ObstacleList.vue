<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Obstacle List
      </h2>
      <b-table striped hover :items="obstacles" :fields="fields">
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ObstacleList',
  data () {
    return {
      fields: {
        distance: { label: 'Distance', sortable: true, 'class': 'text-center' },
        updated_date: { label: 'Date', sortable: true },
      },
      obstacles: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/Obstacle`)
    .then(response => {
      this.obstacles = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (Obstacle) {
      this.$router.push({
        name: 'ShowObstacle',
        params: { id: Obstacle._id }
      })
    }
  }
}
</script>