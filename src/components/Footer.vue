<template>
  <div id="footer">
    <div class="container" v-if="context.hasOwnProperty('footer')">
      <!--
      <div v-for="category in context.footer.site_map">
        <ul class="links">
          <h3>{{ category.title }}</h3>
          <li v-for="item in category.links">
          <a href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      -->
      <div>
        <ul>
          <h1>CINEMA</h1>
          <li><a href="#">Procinema</a></li>
        </ul>
        <ul>
          <h1>DIVERTISMENT</h1>
          <li><a href="#">ProTV</a></li>
          <li><a href="#">Romanii au talent</a></li>
          <li><a href="#">Vocea Romaniei</a></li>
          <li><a href="#">Masterchef</a></li>
          <li><a href="#">Les Fierbinti</a></li>
          <li><a href="#">La Maruta</a></li>
          <li><a href="#">Apropo TV</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <h1>STIRI</h1>
          <li><a href="#">Stirile ProTV</a></li>
          <li><a href="#">Romania, te iubesc!</a></li>
          <li><a href="#">Dupa 20 de ani</a></li>
        </ul>

        <ul>
          <h1>TEHNOLOGIE</h1>
          <li><a href="#">I Like IT</a></li>
          <li><a href="#">Yoda</a></li>
        </ul>

        <ul>
          <h1>SPORT</h1>
          <li><a href="#">Sport.ro</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <h1>JOBURI PRO</h1>
          <li><a href="#">Job-uri disponible ProTV</a></li>
        </ul>

        <ul>
          <h1>LIFESTYLE</h1>
          <li><a href="#">Ce se intampla, Doctore?</a></li>
          <li><a href="#">Acasa TV</a></li>
          <li><a href="#">Perfecte.ro</a></li>
          <li><a href="#">DeBarbati</a></li>
          <li><a href="#">Foodstory.stirileprotv.ro</a></li>
        </ul>

        <ul>
          <h1>ECONOMIC</h1>
          <li><a href="#">InCont.stirileprotv.ro</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <h1>MUZICA</h1>
          <li><a href="#">MTV</a></li>
        </ul>

        <ul>
          <h1>PROTVPLUS</h1>
        </ul>

        <ul>
          <h1>VOYO</h1>
        </ul>

        <ul>
          <h1>CONCURS</h1>
        </ul>

        <ul>
          <h1>DESPRE</h1>
          <li><a href="#">Despre cookies</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: [
    'context'
  ]
}
</script>
<style scoped>
#footer {
  background: #000a49 url('../assets/bg-footer.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}

ul h1 {
  font-size: 22px;
  margin-bottom: 5px;
}

.container {
  width: 830px;
}
.container div {
  padding: 20px 0;
  width: 200px;
  float: left;
}

.container div ul {
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
}

ul li {
  list-style-type: none;
  padding-bottom: 5px;
}

ul a {
  color: #ababab;
  font-size: 15px;
  line-height: 22px;
}
</style>
