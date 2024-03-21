const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdp...dGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+R1A8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg==';

/**
 * Icon svg to be displayed in the category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdp...dGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+R1A8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg==';
var mPad=null;

function mStartGamePad()
{
    window.requestAnimationFrame(mStartGamePad);
    var gamepad_info = '';
    var gamepads = navigator.getGamepads();
    var gamepad_num =gamepads.length;
    mPad = new Array(gamepad_num);

    for (var i=0; i<gamepad_num; i++) {
        if(gamepads[i]!=null) mPad[i] = gamepads[i];
    }
}
class Scratch3GamePad {

    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;

        window.requestAnimationFrame(mStartGamePad);

        //this._onTargetCreated = this._onTargetCreated.bind(this);
        //this.runtime.on('targetWasCreated', this._onTargetCreated);
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'gamepad',

            name: formatMessage({
                id: 'Game Pad for Scratch3',
                default: 'Game Pad',
                description: 'Label for the game pad extension category'
            }),

            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,

            blocks: [
                {
                    opcode: 's_X_Button',
                    text: 'X Button',
                    blockType: BlockType.HAT,
                },
                {
                    opcode: 's_Y_Button',
                    text: 'Y Button',
                    blockType: BlockType.HAT,
                },
                {
                    opcode: 's_A_Button',
                    text: 'A Button',
                    blockType: BlockType.HAT,
                },
                {
                    opcode: 's_B_Button',
                    text: 'B Button',
                    blockType: BlockType.HAT,
                },

            ],
            menus: {
            }
        };
    }

/* ================================ */
// BUTTON X- Y- A- B-
    s_X_Button() {
        return mPad[0].buttons[2].pressed;
    };

    s_Y_Button() {
        return mPad[0].buttons[3].pressed;
    };

    s_A_Button() {
        return mPad[0].buttons[0].pressed;
    };

    s_B_Button() {
        return mPad[0].buttons[1].pressed;
    };

}
module.exports = Scratch3GamePad;
