<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">check availability
        <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
        <span v-if="noAvailability" class="text-danger">(NO AVAILABLE)</span>
        </h6>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input
                    type="date"
                    name="from"
                    class="form-control"
                    placeholder="Start date"
                    v-model="from"
                    @keyup.enter="check"
                    :class="[{'is-invalid':errorFor('from')}]"
                />
                <div class="invalid-feedback" v-for="(error, index) in errorFor('from')" :key="index">{{error}}</div>
            </div>
            <div class="form-group col-md-6">
                <label for="to">To</label>
                <input
                    type="date"
                    name="to"
                    class="form-control"
                    placeholder="End date"
                    v-model="to"
                    @keyup.enter="check"
                    :class="[{'is-invalid':errorFor('to')}]"
                />
                <div class="invalid-feedback" v-for="(error, index) in errorFor('to')" :key="index">{{error}}</div>
            </div>
            <button class="btn btn-secondary btn-block" @click="check" :disabled="loading">Check!</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bookableId: String
    },
    data(){
        return{
            from:null,
            to:null,
            loading:false,
            status:null,
            errors: null
        }
    },
    methods:{
        check(){
            this.loading = true;
            this.errors = null;

            axios.get(`/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`)
            .then(res => {
                // console.log(res)
                this.status = res.status;
            })
            .catch(err => {
                if (err.response.status == 422) {
                    this.errors = err.response.data.errors
                }
                // console.error(err); 
                this.status = err.response.status;
            }).then(res => {
                this.loading=false
            })
        },
        errorFor(field){
            return this.hasErrors && this.errors[field] ? this.errors[field] : null; 
        }
    },
    computed:{
        hasErrors(){
            return this.status == 422 && this.errors != null
        },
        hasAvailability(){
            return this.status == 200
        },
        noAvailability(){
            return this.status == 404
        }
    }
}
</script>

<style scoped>
label {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: gray;
    font-weight: bold;
}
</style>
