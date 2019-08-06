<template>
<v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-title>
      <div>Cloud Vision</div>
    </v-card-title>
    <v-card-text>
      <vue-audio :file="file1"></vue-audio>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn text>Share</v-btn>

      <v-btn
        text
        color="purple"
      >
        Explore
      </v-btn> -->

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? '▽' : '△' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
            Cloud Vision은 제조기업 공장에 Cloud 기반 머신비전 서비스를 제공하는 KT의 5G 스마트팩토리 솔루션 입니다.

            머신비전은 품질검사 같이 사람이 육안으로 수행하던 작업을 머신이 대신 수행해주는 서비스로,

            최근 각 산업분야가 자동화되면서 반도체는 물론 자동차, 물류, 식품 등 제조 생산공정 전반에 광범위하게 사용되고 있습니다.

            머신비전의 핵심 요소는 딥러닝 기반의 AI 영상분석 기술입니다.

            AI를 충분히 활용하기 위해서는 고성능 IT인프라가 필요한데, 5G가 출연하기 이전에는 모든 인프라를 공장내부에 구축할 수밖에 없었습니다.

            그러나, Cloud Vision은 고성능이 필요한 AI 컴퓨팅을 Cloud에서 처리하고, 5G를 통해 대용량 데이터를 공장과 주고 받음으로써 머신비전 서비스를 제공합니다.

            기존의 머신비전은 높은 가격 때문에 대기업 중심으로 도입하고 있으나,

            Cloud Vision은 고객이 대규모 장비를 구매할 필요 없이 사용한 만큼 서비스 비용만 지불하면 되므로,

            가격부담 때문에 도입을 꺼려하던 중소기업 시장을 새로이 창출할 수 있습니다.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import VueAudio from 'vue-audio';

export default {
  data: () => ({
    show: false,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
    file1: 'http://35.200.34.157:8090/cloudvision_1.wav'
  }),
  components: {
    'vue-audio': VueAudio
  }
};
</script>
