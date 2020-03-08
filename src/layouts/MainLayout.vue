<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn v-if="is_submitted" @click="goBack()" flat round dense icon="arrow_back" />
        <q-toolbar-title>
          {{ is_submitted ? 'Back' : 'Math TP - BT201A' }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { EventBus } from '../event-bus';

export default 
{
  name: 'MainLayout',
  data: () => 
  ({
    is_submitted: false
  }),
  created()
  {
    EventBus.$on('submitted', (submitted) => 
    {
      this.is_submitted = submitted;
    });
  },
  methods:
  {
    goBack()
    {
      this.is_submitted = false;
      EventBus.$emit('back', true);
    }
  }
}
</script>
