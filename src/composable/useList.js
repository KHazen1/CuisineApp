import { ref, computed } from "vue";

const list = ref([]);

const useList = () => {

    const needed = computed (() => {
    return list.value.filter(item => !item.done);
    });

    const checked = computed (() => {
    return list.value.filter(item => item.done);
    });

    const addItem = (newItem) => {
        if (newItem.trim()) {
            list.value.push({
            id: list.value.length,
            content: newItem,
            done: false,
            });
        }
    };

    const changeStatus = (id) => {
    const item = list.value.find((item) => item.id === id);
    item.done = !item.done;
    };

    return {
        list,
        needed,
        checked,
        addItem,
        changeStatus,
    };
};

export default useList;