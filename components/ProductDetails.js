app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        `
        <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
        </ul>
        `,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})