require('colors');
module.exports = (gameId, options)=>{
    console.log(`play a game, id is: ${gameId}`.green);
    let game = options.game || '';
    if (game) {
        console.log(`you select a game: ${game}`.green);
    }
}