class Test {

  constructor() {}

  getInfo() { // 拡張機能の各種情報
    return {
      "id": "save_code",
      "name": "Save Code",
      "blocks": [
        {
          "opcode": "saveCode",
          "blockType": Scratch.BlockType.COMMAND,
          "text": "Save Code"
        }
      ]
    }
  }

  saveCode() {
    // Scratchの現在のプロジェクトを取得
    var project = JSON.stringify(Blockly.mainWorkspace.saveProjectSb3());

    // プロジェクトをテキストファイルに保存
    var file = new Blob([project], { type: 'text/plain' });
    var a = document.createElement('a');
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'scratch_project.sb3';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

Scratch.extensions.register(new Test());
