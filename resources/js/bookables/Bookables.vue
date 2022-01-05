<template>
    <div>
        <div v-if="loading">Data is loading...</div>
        <div v-else>
            <div class="container">
                <div class="row mb-4" v-for="row in rows" :key="`row${row}`">
                    <div
                        class="col"
                        v-for="(bookable, column) in bookableInRow(row)"
                        :key="`row${row + column}`"
                    >
                        <bookable-list-item
                            :item-title="bookable.title"
                            :item-content="bookable.content"
                            :price="10000"
                        ></bookable-list-item>
                    </div>
                    <div class="col" v-for="p in placeholderInRow(row)" :key="p"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem.vue";

export default {
    components: {
        BookableListItem,
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3,
        };
    },
    computed: {
        rows() {
            return this.bookables
                ? Math.ceil(this.bookables.length / this.columns)
                : 0;
        },
    },
    methods: {
        bookableInRow(row) {
            return this.bookables.slice(
                (row - 1) * this.columns,
                row * this.columns
            );
        },
        placeholderInRow(row) {
            return this.columns - this.bookableInRow(row).length
        }
    },
    mounted() {
        this.loading = true;
        setTimeout(() => {
            this.bookables = [
                {
                    title: "Cheap Villa",
                    content: "a very cheap villa",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
                {
                    title: "Cheap Villa 2",
                    content: "a very cheap villa 2",
                },
            ];
            this.loading = false;

            console.log(this.rows);
        }, 2000);
    },
};
</script>
