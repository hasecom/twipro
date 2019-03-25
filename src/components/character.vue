<template>
<div id='player' class='d-inline'></div>
</template>

<script>
export default {
    name: 'character',
    data() {
        return {
            //cssのクラス名
            direction: {
                'bottom': ['man_front0', 'man_front1', 'man_front2'],
                'left': ['man_right0', 'man_right1', 'man_right2'],
                'right': ['man_left0', 'man_left1', 'man_left2'],
                'top': ['man_back0', 'man_back1', 'man_back2'],
            },
            the_before_direction: "",
            next_num: 0
        }
    },
    mounted: function () {
        let player_element = document.getElementById('player');
        player_element.classList.add('man_front0');
        this.the_before_direction = 'bottom';
    },
    methods: {
        player_direction(direction) {
            this.remove_class(direction);
            this.add_class(direction);
        },
        remove_class(direction) {
            let player_element = document.getElementById('player');
            for (let i = 0; i < Object.keys(this.direction).length; i++) {
                for (let j = 0; j < this.direction[Object.keys(this.direction)[i]].length; j++) {
                    player_element.classList.remove(this.direction[Object.keys(this.direction)[i]][j]);
                }
            }
        },
        add_class(direction) {

            if (direction == this.the_before_direction) {
                
                if(this.next_num == 2){
                this.next_num = 0;
                }else{
                this.next_num = this.next_num + 1;
                }
            } else {
                this.next_num = 0;
            }
            let player_element = document.getElementById('player');
            
            player_element.classList.add(this.direction[direction][this.next_num]);
            this.the_before_direction = direction;
        }
    }
}
</script>

<style scoped>
#player {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 42%;
    z-index: 1;

}

.man_front0 {
    background: url("../assets/img/chara/man_front.png") no-repeat center center;
    object-fit: cover;
}

.man_front1 {
    background: url("../assets/img/chara/man_front1.png") no-repeat center center;
    object-fit: cover;
}

.man_front2 {
    background: url("../assets/img/chara/man_front2.png") no-repeat center center;
    object-fit: cover;
}

.man_right0 {
    background: url("../assets/img/chara/man_right.png") no-repeat center center;
    object-fit: cover;
}

.man_right1 {
    background: url("../assets/img/chara/man_right1.png") no-repeat center center;
    object-fit: cover;
}

.man_right2 {
    background: url("../assets/img/chara/man_right2.png") no-repeat center center;
    object-fit: cover;
}

.man_left0 {
    background: url("../assets/img/chara/man_left.png") no-repeat center center;
    object-fit: cover;
}

.man_left1 {
    background: url("../assets/img/chara/man_left1.png") no-repeat center center;
    object-fit: cover;
}

.man_left2 {
    background: url("../assets/img/chara/man_left2.png") no-repeat center center;
    object-fit: cover;
}

.man_back0 {
    background: url("../assets/img/chara/man_back.png") no-repeat center center;
    object-fit: cover;
}

.man_back1 {
    background: url("../assets/img/chara/man_back1.png") no-repeat center center;
    object-fit: cover;
}

.man_back2 {
    background: url("../assets/img/chara/man_back2.png") no-repeat center center;
    object-fit: cover;
}
</style>
