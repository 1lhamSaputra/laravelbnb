<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div v-if="loading">Data is loading...</div>
                    <div v-else>
                        <div class="card">
                            <div class="card-body">
                                <h5>{{ bookable.title }}</h5>
                                <hr />
                                <article>
                                    {{ bookable.description }}
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">Availability & Prices</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookable: null,
            loading: false,
        };
    },
    created() {
        (this.loading = true),
            axios
                .get(`/api/bookables/${this.$route.params.id}`)
                .then((res) => {
                    console.log(res);
                    this.bookable = res.data.data;
                    this.loading = false;
                })
                .catch((err) => {
                    console.error(err);
                });
    },
};
</script>

<style></style>
