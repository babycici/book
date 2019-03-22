<template>
    <div class='add'>
        <my-title til='添加页'></my-title>
        <myInput v-model='name' text='书的名字'>
            <!-- 书的名字 -->
        </myInput>
        <myInput v-model='info' text='书的信息'>
            <!-- 书的名字 -->
        </myInput>
        <myInput v-model='price' text='书的价格' type='number'>
            <!-- 书的名字 -->
        </myInput>
        <myInput v-model='cover' text='书的封面'>
            <!-- 书的名字 -->
        </myInput>
        <button @click='add'>添加</button>
        <!-- 添加页 -->
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import myInput from './my-input.vue'
    export default {
        data() {
            return {
                name: '',
                info:'',
                price:'',
                cover:''
            }
        },
        components:{
            'my-title':title,
            myInput
        },
        methods: {
            add(){
                //修改vuex中的数据 list
                let obj={
                    // bookCover:this.cover
                    bookCover:"https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg",
                    bookId:Math.random(),
                    bookInfo:this.info,
                    bookName:this.name,
                    bookPrice:this.price
                }
                this.$store.commit("addList",[obj]);
                this.$router.push('/list')
            }
        },
    }
</script>

<style scoped>
    .add{
        padding: 1.5rem 0 2rem 0;
    }
    button{
        width: 60%;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        outline: none;
        margin:0.5rem auto;
        background: #8e8ed1;
        color: white;
        font-size: 1rem;
        display: block;
    }
</style>