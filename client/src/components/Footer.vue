<template>
  <div>
  <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex        
        py-3
        text-xs-center
        white--text
        xs12
        style="margin-left:20px;margin-right:20px"
      >
        &copy;2018 — <strong>Lava</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>

<style scoped>

</style>
