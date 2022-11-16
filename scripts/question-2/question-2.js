// 1. Create an enum (GameGenre):
// Create an enum called GameGenre with the following key/value pairs. The value
//    should be the same as the key:
// - Action
// - Adventure
// - Sport
// 2. Create an interface (Game):
// Create an interface called Game with the following values:
// name: string
// genre: The GameGenre enum
// onlinePlay: boolean, optional
var GameGenre;
(function (GameGenre) {
    GameGenre["Action"] = "Action";
    GameGenre["Adventure"] = "Adventure";
    GameGenre["Sport"] = "Sport";
})(GameGenre || (GameGenre = {}));
// 3. Convert the function to TypeScript. Use your interface from above as the parameter.
function createGame(_a) {
    var string = _a.name, _b = _a.genre, genre = _b === void 0 ? GameGenre : _b, _c = _a.onlinePlay, onlinePlay = _c === void 0 ? false : _c;
    console.log('=============');
    console.log('Game created:');
    console.log('-------------');
    console.log('Name:', "name");
    console.log('Genre:', genre);
    console.log('Online play:', onlinePlay);
}
// 4. Change these function calls to use the enum you created in step 1
createGame({ name: 'Fun action game', genre: GameGenre.Action, });
createGame({ name: 'Fun adventure game', genre: GameGenre.Adventure, onlinePlay: true, });
//# sourceMappingURL=question-2.js.map