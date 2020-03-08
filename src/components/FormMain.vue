<template>
    <form @submit.prevent="tree.submit()" class="form-main">
        <q-input v-model="tree.value" type="number" label="Enter a number" />
        <q-btn type="submit" style="width: 100%; margin-top: 15px;" color="primary" label="Submit" />
    </form>
</template>

<script>
export default 
{
    name: 'Form',
    props:
    {
        tree: Object
    }
}
</script>

<style lang="scss">
.form-main
{
    width: 100%;
    max-width: 400px;
    padding-left: 25px;
    padding-right: 25px;
}
</style>