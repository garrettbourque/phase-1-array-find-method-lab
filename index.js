
function superbowlWin(wins){
    let outcome=wins.find(({result})=>result==='W');
    console.log(outcome);
    if(outcome!=undefined)
        return outcome.year;

    return outcome;

}