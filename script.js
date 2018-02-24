new Vue({
    el: '#app',
    data: {
        you: {
            power: 100,
            attack: 7,
            damage: 20,
            specialAttack: 20
        },
        monster: {
            power: 100,
            attack: 5,
            damage: 20
        },
        gameOn: false
    }
    ,
    computed: {
        scoreYou: function() {
            var yourScore = this.you.power - this.you.damage;
            return yourScore > 0 ? yourScore : 0;
        },
        scoreMonster: function() {
            var monsterScore  = this.monster.power - this.monster.damage;
            return monsterScore > 0 ? monsterScore : 0;
        }
    },
    methods: {
        startGame: function () {
            this.gameOn = true;
        },
        endGame: function () {
            this.gameOn = false;
        },
        healMe: function () {
            this.you.damage = this.you.damage + this.monster.attack;
            this.you.power = this.you.power + 15;
        },
        attackHim: function () {
            this.you.damage = this.you.damage + this.monster.attack;
            this.monster.damage = this.monster.damage + this.you.attack;
        },
        specialAttackHim: function () {
            this.you.damage += this.monster.attack;
            this.monster.damage += this.you.specialAttack;
        }



    }
});
