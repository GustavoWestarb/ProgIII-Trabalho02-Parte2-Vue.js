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

          <div class="sidebar-wrapper">
            <div class="list">
              <md-list :md-expand-single="expandSingle">
                  <md-list-item>
                    <md-icon>card_travel</md-icon>
                    <span class="md-list-item-text">Disciplinas</span>
                  </md-list-item>

                  <md-list-item md-expand>
                    <md-icon>aspect_ratio</md-icon>
                    <span class="md-list-item-text">Área de trabalho</span>

                    <md-list slot="md-expand">
                      <md-list-item class="md-inset">Trabalhos</md-list-item>
                      <md-list-item class="md-inset">Atividades</md-list-item>
                    </md-list>
                  </md-list-item>

                  <span class="md-list-item-text">Ferramentas</span>

                  <md-list-item>
                    <md-icon>mail_outline</md-icon>
                    <span class="md-list-item-text">Email</span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon>chat_bubble_outline</md-icon>
                    <span class="md-list-item-text">Chat</span>
                  </md-list-item>

                  <md-list-item>
                    <md-icon>done_outline</md-icon>
                    <span class="md-list-item-text">To Do</span>
                  </md-list-item>
              </md-list>
            </div>
          </div>
      </md-app-drawer>

      <md-app-content>
        <aside class="md-layout">
           <md-card class="md-layout-item md-size-25 md-small-size-100 cards" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Programação III</div>
              </md-card-header>

              <md-card-media>
                <img src="../assets/progress.png" alt="Progresso da disciplina" height="80px" width="80px">
              </md-card-media>

              <md-card-content>
                Porcentagem de conclusão da disciplina, a cada atividade concluída e enviada ao professor, a porcentagem será atualizada, assim como qualquer ação referente as atividades pendentes da disciplina.
              </md-card-content>
            </md-ripple>
          </md-card>

          <md-card class="md-layout-item md-size-50 md-small-size-100 cards" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Programação III</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>
            </md-ripple>
          </md-card>

          <md-card class="md-layout-item md-size-25 md-small-size-100 cards" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Programação III</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>
            </md-ripple>
          </md-card>

          <md-card class="md-layout-item md-size-50 md-small-size-100 cards" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Programação III</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>
            </md-ripple>
          </md-card>
        </aside>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>

  .md-drawer {
    width: 320px;
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    display: inline-block;
    overflow: auto;
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .cards{
    margin-top: 50px;
  }
</style>

<script>
export default {
  name: 'Normal'
}

</script>

