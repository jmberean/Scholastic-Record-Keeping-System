<template>
  <div id="app">
    <v-app>
      <page-header/>
        <main>
          <v-container fluid>
            <router-view/>
          </v-container>
        </main>
      </v-app>
      <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'app',
  components:{
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  padding: 20px;
}
</style>
