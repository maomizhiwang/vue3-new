import { computed, onMounted, ref } from 'vue';

export default function () {

    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })
    function add() {
        sum.value++
    }

    onMounted(() => {
        add()
    })
    return { sum, add, bigSum }
}