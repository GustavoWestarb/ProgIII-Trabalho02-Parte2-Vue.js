
<template>
  <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large header">
          <span class="md-title">Sistema Dash</span>

          <div class="md-toolbar-section-end">
            <md-field class="md-layout-item md-size-25">
              <label style="color: white">Search</label>
              <span class="md-prefix"><md-icon>search</md-icon></span>
              <md-input></md-input>
            </md-field>

            <md-button class="md-icon-button">
              <md-icon>notifications_active</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>account_circle</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
          <md-toolbar class="md-transparent logo-menu" md-elevation="0">
            <img src="../assets/dash.png" alt="Logo dash" height="50px" width="200px"/>
          </md-toolbar>
          <div>
            <div class="list">
              <md-list>
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
          <div class="md-layout">
            <md-card class="md-layout-item md-size-25 md-small-size-100 card" md-with-hover>
              <md-ripple>
               <md-card-header>
                 <div class="md-title">Programação III</div>
                </md-card-header>

                <md-card-media md-ratio>
                  <img src="../assets/progress.png" alt="Progresso da disciplina">
                </md-card-media>

                <md-card-content>
                  Porcentagem de conclusão da disciplina, a cada atividade concluída e enviada ao professor, a porcentagem será atualizada.
                </md-card-content>
              </md-ripple>
            </md-card>

            <md-card class="md-layout-item md-size-70 md-small-size-100 card" md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">Programação III</div>
                </md-card-header>
                <md-card-media md-ratio>
                  <img src="../assets/card02.png" alt="Progresso da disciplina">
                </md-card-media>
              </md-ripple>
            </md-card>

            
              <md-card class="md-layout-item md-size-25 md-small-size-100 card" md-with-hover>
                <form novalidate class="md-layout" @submit.prevent="validateUser">
                  <md-card-header>
                    <div class="md-title">Dados</div>
                  </md-card-header>

                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="nome">Nome</label>
                          <md-input name="nome" id="first-name" autocomplete="given-name" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="sobrenome">Sobrenome</label>
                          <md-input name="sobrenome" id="first-name" autocomplete="given-name" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="copy">Copia</label>
                          <md-input name="copy" id="first-name" autocomplete="given-name" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="email">E-mail</label>
                          <md-input name="email" id="first-name" autocomplete="given-name" />
                        </md-field>
                      </div>
                    </div>
                    
                  </md-card-content>

                  <md-cards-actions>
                    <md-button class="md-accent">Cancelar</md-button>
                    <md-button type="submit" class="md-primary" :disabled="sending">Enviar</md-button>
                  </md-cards-actions>
                </form>
              </md-card>

            <md-card class="md-layout-item md-size-70 md-small-size-100 card" md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">Programação III</div>
                </md-card-header>

                <md-card-content>
                  <div class="md-layout-item md-small-size-100">
                    <md-table v-model="users" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort" md-card>
                      <md-table-toolbar>
                        <h1 class="md-title">Users</h1>
                      </md-table-toolbar>

                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
                        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </div>
                </md-card-content>
              </md-ripple>
            </md-card>
          </div>
        </md-app-content>
      </md-app>
    </div>
</template>

<style lang="scss" scoped>

  .md-app {
    height: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-app-drawer{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

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
  }

  $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    height: $list-width;
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

  .card{
    margin-top: 50px;
  }
</style>

<script>

import { FormValidation } from "../FormValidation"

export default {
  name: 'Waterfall',
  data: () => ({
      currentSort: 'name',
      currentSortOrder: 'asc',
      users: [
        {
          id: 1,
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          gender: 'Male',
          title: 'Assistant Media Planner'
        },
        {
          id: 2,
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          title: 'Account Coordinator'
        },
        {
          id: 3,
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          gender: 'Female',
          title: 'Operator'
        },
        {
          id: 4,
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          gender: 'Male',
          title: 'Software Test Engineer III'
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          gender: 'Female',
          title: 'Paralegal'
        }
      ]
    }),
    methods: {
      customSort (value) {
        return value.sort((a, b) => {
          const sortBy = this.currentSort

          if (this.currentSortOrder === 'desc') {
            return a[sortBy].localeCompare(b[sortBy])
          }

          return b[sortBy].localeCompare(a[sortBy])
        })
      }
    }
}


</script>

