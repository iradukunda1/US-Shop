<template>
    <div class="delivery-dates-list">
        <div class="delivery-dates-list border py-2 px-3 rounded-0 mb-2 cursor-pointer">
            <p class="font-weight-bold fa-14 mb-0">
                {{ date.dates }}
            </p>
            <p class="fa-13 mb-0">{{ date.type }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            date:Object
        },
        name: "delivery-dates"
    }
</script>

<style scoped>

</style>