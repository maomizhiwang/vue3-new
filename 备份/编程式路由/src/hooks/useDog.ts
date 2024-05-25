import axios from 'axios';
import { onMounted, reactive } from 'vue';


export default function () {
    let dogList = reactive<string[]>([]);

    async function getDog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(res.data.message)
        } catch (e) {
            console.log(e)
        }
    }
    onMounted(() => {
        getDog()
    })


    return { dogList, getDog }
}