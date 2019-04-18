<template>
    <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary header">
        <span class="md-title">Dash</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent logo-menu" md-elevation="0">
          LOGO
        </md-toolbar>

        <div class="full-control">
        <div class="list">
        <md-list :md-expand-single="expandSingle">
            <md-list-item md-expand :md-expanded.sync="expandNews">
            <md-icon>whatshot</md-icon>
            <span class="md-list-item-text">News</span>

            <md-list slot="md-expand">
                <md-list-item class="md-inset">World</md-list-item>
                <md-list-item class="md-inset">Europe</md-list-item>
                <md-list-item class="md-inset">South America</md-list-item>
            </md-list>
            </md-list-item>

            <md-list-item md-expand>
            <md-icon>videogame_asset</md-icon>
            <span class="md-list-item-text">Games</span>

            <md-list slot="md-expand">
                <md-list-item class="md-inset">Console</md-list-item>
                <md-list-item class="md-inset">PC</md-list-item>
                <md-list-item class="md-inset">Phone</md-list-item>
            </md-list>
            </md-list-item>

            <md-list-item md-expand>
            <md-icon>video_library</md-icon>
            <span class="md-list-item-text">Video</span>

            <md-list slot="md-expand">
                <md-list-item class="md-inset">Humor</md-list-item>
                <md-list-item class="md-inset">Music</md-list-item>
                <md-list-item class="md-inset">Movies</md-list-item>
                <md-list-item class="md-inset">TV Shows</md-list-item>
            </md-list>
            </md-list-item>

            <md-list-item>
            <md-icon>shopping_basket</md-icon>
            <span class="md-list-item-text">Shop</span>
            </md-list-item>
        </md-list>
        </div>
    </div>
      </md-app-drawer>

      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .header{
      background-image: linear-gradient(to left, rgb(55, 115, 255), #b400ff);
      color: white;
  }

  .logo-menu{
      color: black;
      font-family: 'Courier New', Courier, monospace;
      font-size: 30px
  }

  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .list {
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>

<script>
export default {
  name: 'Normal'
}

</script>

