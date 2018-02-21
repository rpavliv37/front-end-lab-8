function showResult(fighter) {
    console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}

function fighter(info) {
    let stats = info;
    let history = { wins: 0, loses: 0 };

    getName = () => stats.name;

    fight = (defender) => {
        let defenderOdlHp = defender.getStats().hp;

        if (defender.block()) {
            return false; //made no dmg
        } else {
            defender.getStats().hp -= stats.attack;
            let madeAnyDmg = defenderOdlHp > defender.getStats().hp; // true if made somedmg
            if (madeAnyDmg) {
                history.wins++;
                defender.getCombatHistory().loses++;
            };

            return madeAnyDmg;
        }
    };

    block = () => {
        return false;
    };

    getStats = () => stats;

    getCombatHistory = () => history;

    return {
        getName,
        fight,
        block,
        getStats,
        getCombatHistory
    }
}



var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3


showResult(fighter1);


showResult(fighter2); 


showResult(fighter3);
