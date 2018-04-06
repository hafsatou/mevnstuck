<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Obstacle List
      </h2>
      <b-table striped hover :items="obstacles" :fields="fields">
      </b-table>
    </b-col>
  </b-row>
</template>
<script>

export default {
  name: 'ObstacleList',
  data () {
    return {
      fields: {
        distance: { label: 'Distance' },
        updated_date: { label: 'Date' }
      },
      obstacles: [],
      errors: []
    }
  }
}
</script>
