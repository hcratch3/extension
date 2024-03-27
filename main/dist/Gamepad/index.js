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

