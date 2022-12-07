<template>
  <div>
    <div class="cardBox">
       <div v-for="item in cardList" :key="item.id" class="card">
            <div class="card-face card-font"><i :class="item.icon"></i></div>
            <div class="card-face card-back"><i class="el-icon-question"></i> </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Card',
    data() {
        return {
            cardList:[
                {
                    id:'a12',
                    icon:'el-icon-edit'
                },
                {
                    id:'a15',
                    icon:'el-icon-delete'
                },
                {
                    id:'b12',
                    icon:'el-icon-more'
                },
                {
                    id:'c1253',
                    icon:'el-icon-user'
                },
                {
                    id:'a15532',
                    icon:'el-icon-edit'
                },
                {
                    id:'a345',
                    icon:'el-icon-delete'
                },
                {
                    id:'b22',
                    icon:'el-icon-more'
                },
                {
                    id:'w12',
                    icon:'el-icon-user'
                },
                {
                    id:'a1512532',
                    icon:'el-icon-edit'
                },
                {
                    id:'a3b145',
                    icon:'el-icon-delete'
                },
                {
                    id:'v1212',
                    icon:'el-icon-more'
                },
                {
                    id:'4321',
                    icon:'el-icon-user'
                }
            ]
        }
    }
}
</script>

<style scoped>
.cardBox {
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    width: 900px;
    height: 800px;
    margin: 20px auto;
    border: 1px solid #ccc;
}
.card {
    transform-style: preserve-3d;
    transition: transform 2s;
    transform-origin: 100px 110px 0;
    animation: isRotate ease-in-out 2s;
}

.card-face {
    position: absolute;
    width: 200px;
    height: 220px;
    text-align: center;
    line-height: 220px;
    font-size: 40px;
    color: #fff;
}
.card-font {
    border: 1px solid #ccc;
    background-color: orange;
    transform: translateZ(1px);
}
.card-back {
    border: 1px solid red;
    background-color:red;
    transform: rotateY(-180deg);
}
@keyframes isRotate {
        0%{
            transform: rotateY( 0 );
        }
        /* show-back */
        100% {
            transform: rotateY( -180deg );
        }

}
</style>