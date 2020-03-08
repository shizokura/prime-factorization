<template>
  <q-page class="flex flex-center">
    <FormMain v-if="!tree.submitted" :tree="tree" />
    <TreeMain v-else :tree="tree" />
  </q-page>
</template>

<script>
// Components
import TreeMain from '../components/TreeMain';
import FormMain from '../components/FormMain';

// Classes
import Tree from '../classes/Tree';

// Utilities
import { EventBus } from '../event-bus';

export default 
{
  name: 'PageIndex',
  components: { TreeMain, FormMain },
  data: () => 
  ({
    tree: new Tree()
  }),
  created()
  {
    EventBus.$on('back', () => 
    {
      this.tree.back();
    });
  }
}
</script>
