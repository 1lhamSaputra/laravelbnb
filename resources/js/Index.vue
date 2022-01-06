<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link class="navbar-brand" :to="{ name: 'home' }">LaravelBnb</router-link>
            <!-- <router-link class="btn bg-light" :to="{ name: 'second' }">Second</router-link> -->
        </nav>

        <div class="mt-4 mb-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
