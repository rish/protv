<template>
  <div class="container">
    <div class="header">
      <div class="row">
        <div class="thumb">
          <img src="../assets/temp/channel/logo.jpg">
        </div>
        <ul>
          <li class="active">Home</li>
          <li>Despre Canal</li>
          <li>Stiri</li>
          <li>Seriale</li>
          <li>Filme</li>
          <li>Exclusiv Online</li>
          <li>Program Tv</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChannelHeader'
}
</script>
<style scoped>
.container {
  width: 1000px;
  padding: 0;
}

.header {
  position: relative;
  width: 100%;
  height: 460px;
  background-image: url('../assets/temp/channel/header.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 40px;
}

.row {
  background: white;
  position: absolute;
  bottom: -40px;
  width: 100%;
  margin: 0;
  height: 40px;
}

.thumb {
  float: left;
  position: absolute;
  border: 3px solid white;
  left: 30px;
  bottom: 10px;
}

ul {
  padding-top: 5px;
  position: relative;
  left: 220px;
}

li {
  color: #434343;
  display: inline-block;
  font-size: 16px;
  margin-right: 25px;
  font-weight: 300;
  padding-top: 3px;
}

li.active {
  color: black;
  font-weight: 500;
  text-transform: uppercase;
}

li.highlight {
  background: #1f55ff;
  color: white;
  padding: 3px 10px;
  text-transform: uppercase;
  font-weight: 400;
  margin-right: 0;
}
</style>
