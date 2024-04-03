class Test {

  constructor() {}

  getInfo() { // 拡張機能の各種情報
    return {
      "id": "save_code",
      "name": "Save Code",
      "blocks": [
        {
          "opcode": "saveCode",
          "blockType": "command",
          "text": "Save Code"
        }
      ]
    }
  }

  hello() {
    console.log('hello'); // console log に hello と出力
  }
}

Scratch.extensions.register(new Test());
