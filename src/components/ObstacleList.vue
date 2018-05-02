<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Obstacle List
      </h2>
      <b-table striped hover :items="obstacles" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn variant="success" size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
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
        distance: { label: 'Distance' },
        updated_date: { label: 'Date'},
        actions: { label: 'Action', 'class': 'text-center' }
      },
      obstacles: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/obstacle`)
    .then(response => {
      this.obstacles = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (obstacle) {
      this.$router.push({
        name: 'ShowObstacle',
        params: { id: obstacle._id }
      })
    }
    /*deleteobstacle (obstacleid) {
      axios.delete('http://localhost:3000/obstacle/' + obstacleid)
        .then((result) => {
          this.$router.push({
            name: 'ObstacleList'
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }*/
  }
}
</script>
