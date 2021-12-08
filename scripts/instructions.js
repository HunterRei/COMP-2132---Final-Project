const instructions = document.getElementById('instructions');

class Rules{
    constructor(generalRule, ruleOfOne, duplicateRule){
        this.generalRule = generalRule;
        this.ruleOfOne = ruleOfOne;
        this.duplicateRule = duplicateRule;
    }

    describeSelf(){
        let html = `<b>General Rule:</b> ${this.generalRule}.<br><br>
                    <b>Rule Of One:</b> ${this.ruleOfOne}.<br><br>
                    <b>Duplicate Rule:</b> ${this.duplicateRule}.`;

        return html;    
    }
}

let generalRule = "The player's score is the total value of the two dice, eg: player rolls a 3 and 2, player gets a score of 3+2=5";
let ruleOfOne = "If any of the players two dice comes up as a 1 then the score for that round for the player is 0. eg: if the player rolls a 6 and 1, they get a score of 0";
let duplicateRule = "If the player rolls a pair of the same numbers then the players score is the total of the two dice times 2. eg: if he player rolls 5 and 5, they get a score of (5+5)*2=20";

let ruleSet = new Rules(generalRule, ruleOfOne, duplicateRule);
instructions.innerHTML = ruleSet.describeSelf();