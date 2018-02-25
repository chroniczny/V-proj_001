new Vue({
    el: '#app',
    data: {
        you: {
            power: 100,
            damage: 0,
            attackCost: 2,
            attackCostSpecial: 4
        },
        monster: {
            power: 100,
            damage: 0,
            attackCost: 2
        },
        gameOn: false
    },
    computed: {
        scoreYou: function () {
            var yourScore = Math.floor(this.you.power - this.you.damage);
            return yourScore > 0 ? yourScore : 0;
        },
        scoreMonster: function () {
            var monsterScore = Math.floor(this.monster.power - this.monster.damage);
            return monsterScore > 0 ? monsterScore : 0;
        },
        youAttack: function () {
          return Math.floor(.05 * this.scoreYou);
        },
        youSpecialAttack: function () {
          return Math.floor(.15 * this.scoreYou);
        },
        monsterAttack: function() {
            return Math.floor(.075 * this.scoreMonster);
        }
        // ,
        // logs: {
        //     youLogs: [],
        //     monsterLogs: []
        // }
    },
    methods: {
        startGame: function () {
            this.gameOn = true;
        },
        endGame: function () {
            if (confirm('Do you wanna end this game?') == true) {
                this.you.power = 100;
                this.you.damage = 0;
                this.monster.power = 100;
                this.monster.damage = 0;
                this.gameOn = false;
            } else {
                this.gameOn = true;
            }
        },
        healMe: function () {
            this.you.damage = this.you.damage + this.monsterAttack;
            this.you.power = this.you.power + 7;
            this.monster.damage = this.monster.damage + this.monster.attackCost;
        },
        attackHim: function () {
            this.you.damage = this.you.damage + this.monsterAttack + this.you.attackCost;
            this.monster.damage = this.monster.damage + this.youAttack + this.monster.attackCost;
        },
        specialAttackHim: function () {
            this.you.damage = this.you.damage + this.monsterAttack  + this.you.attackCostSpecial;
            this.monster.damage = this.monster.damage + this.youSpecialAttack + this.monster.attackCost;
        }
    }
});
