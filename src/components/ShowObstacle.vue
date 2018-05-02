<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Obstacles details
        <b-link href="#/">(Obstale List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{obstacle.title}}
        </template>
        <template slot="lead">
          Distance: {{obstacle.distance}}<br>
          Date: {{obstacle.updated_date}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="danger" @click.stop="deleteobstacle(obstacle._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'ShowObstacle',
    data () {
      return {
        obstacle: []
      }
    },
    created () {
      axios.get(`http://localhost:3000/obstacle/` + this.$route.params.id)
        .then(response => {
          this.obstacle = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      editobstacle (obstacleid) {
        this.$router.push({
          name: 'EditObstacle',
          params: { id: obstacleid }
        })
      },
      deleteobstacle (obstacleid) {
        axios.delete('http://localhost:3000/obstacle/' + obstacleid)
          .then((result) => {
            this.$router.push({
              name: 'ObstacleList'
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
