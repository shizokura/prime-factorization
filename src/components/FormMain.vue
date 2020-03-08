<template>
    <form @submit.prevent="submit()" class="form-main">
        <q-input v-model="tree.value" label="Enter a number" />
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
    },
    methods:
    {
        submit()
        {
            this.tree.submit();
        }
    }
}
</script>

<style lang="scss">
.form-main
{
    width: 500px;
}
</style>