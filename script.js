new Vue({
    el: '#app',
    data: {
        you: {
            power: 100,
            damage: 0,
            attackCost: 2,
            attackCostSpecial: 4,
            healing: 7
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
        monsterAttack: function () {
            return Math.floor(.075 * this.scoreMonster);
        },
        logs: function () {
            return []
        }
    },
    watch: {
        scoreYou: function () {
            if (this.scoreYou <= 0) {
                this.endGame(confirm('Monster is a winner! Wanna play again?'));
            }
        },
        scoreMonster: function () {
            if (this.scoreMonster <= 0) {
                this.endGame(confirm('Player is a winner! Wanna play again?'));
            }
        }
    },

    methods: {
        startGame: function () {
            this.gameOn = true;
        },
        confirmEnding: function () {
            return confirm('Do you wanna end this game?');
        },
        resetGame: function () {
            this.endGame(this.confirmEnding());
        },
        endGame: function (confirmation) {
            if (confirmation) {
                this.you.power = 100;
                this.you.damage = 0;
                this.monster.power = 100;
                this.monster.damage = 0;
                this.gameOn = false;
                this.logs.length = 0;
            } else {
                this.gameOn = true;
            }
        },
        healMe: function () {
            this.you.damage = this.you.damage + this.monsterAttack;
            this.you.power = this.you.power + this.you.healing;
            this.monster.damage = this.monster.damage + this.monster.attackCost;
            this.logs.unshift({
                player: [this.you.healing, 'player', 'heals'],
                monster: [this.monsterAttack, 'player', 'hits']
            });
        },
        attackHim: function () {
            this.you.damage = this.you.damage + this.monsterAttack + this.you.attackCost;
            this.monster.damage = this.monster.damage + this.youAttack + this.monster.attackCost;
            this.logs.unshift({
                player: [this.youAttack, 'monster', 'hits'],
                monster: [this.monsterAttack, 'player', 'hits']
            });
        },
        specialAttackHim: function () {
            this.you.damage = this.you.damage + this.monsterAttack + this.you.attackCostSpecial;
            this.monster.damage = this.monster.damage + this.youSpecialAttack + this.monster.attackCost;
            this.logs.unshift({
                player: [this.youSpecialAttack, 'monster', 'hits'],
                monster: [this.monsterAttack, 'player', 'hits']
            });
        }
    }
});
