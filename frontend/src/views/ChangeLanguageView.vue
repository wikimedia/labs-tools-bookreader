<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-sheet min-height="80vh" rounded="lg" style="padding: 12px">
        <h1 class="text-center">{{ $t('my-language') }}</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              :items="langs"
              :label="$t('selected-language')"
              outlined
              v-model="$i18n.locale"
              item-text="name"
              item-value="code"
            ></v-select>
            <v-btn elevation="2" color="primary" outlined @click="savePreference">
              {{ $t('button-save') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { availableLanguage } from '@/i18n';

export default {
  name: 'ChangeLanguageView',
  data() {
    return {
      langs: this.getLanguagesWithNames(availableLanguage)
    };
  },
  methods: {
    getLanguagesWithNames(codes) {
      const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
      return codes.map(code => ({
        code,
        name: displayNames.of(code)
      }));
    },
    savePreference() {
      localStorage.setItem('ws-bookread-lang', this.$i18n.locale);
      this.$alert(this.$t('preference-saved'), this.$t('success-text'), 'success');
    }
  }
};
</script>
