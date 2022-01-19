<template>
  <div class="d-none d-md-block" style="padding: 1.25rem">
      <h6 class="text-uppercase text-secondary font-weight-border pt-4">Review List</h6>
      <div v-if="loading">Data is loading...</div>
      <div v-else>
        <div class="border-bottom" v-for="(review, index) in reviews" :key="index">
            <div class="row pt-4">
                <div class="col-md-6">Piotr Jura</div>
                <div class="col-md-6 text-uppercase d-flex justify-content-end">{{ review.rating }}</div>
            </div>
            <div class="row">
                <div class="col-md-12">{{ review.created_at }}</div>
            </div>
            <div class="row pt-4 pb-4">
                <div class="col-md-12">{{ review.content }}</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        bookableId: String
    },
    data() {
        return {
            loading:false,
            reviews:null
        }
    },
    created(){
        this.loading=true
        axios.get(`/api/bookables/${this.bookableId}/reviews`)
        .then(res => {
            console.log(res)
            this.reviews = res.data.data;
        })
        .then(() => this.loading=false)
        .catch(err => {
            console.error(err); 
        })
    }

}
</script>

<style>

</style>