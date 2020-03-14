<template>
  <q-page class="flex flex-center">
    <FormMain v-if="!tree.submitted" :tree="tree" />
    <TreeMain v-else :tree="tree" />
  </q-page>
</template>

<script>
export default 
{
  name: 'RedirectPage',
    created()
    {
        return this.$router.push('/index');
        //test
    }
}
</script>
