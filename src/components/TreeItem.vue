<template>
    <ul v-if="factors && factors.length">
        <li v-for="(factor, index) in factors" :key="index">
            <a href="#">{{ factor.value }}</a>
            <TreeItem v-if="factor.factors" :factors="factor.factors" />
        </li>
    </ul>
</template>

<script>
export default 
{
    name: 'TreeItem',
    props:
    {
        factors: Array
    }
}
</script>