class MyExtension {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'myExtension',
      name: 'My Extension',
      blocks: [
        {
          opcode: 'sayHello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Hello!',
        },
        {
          opcode: 'addNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'add [NUM1] and [NUM2]',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
      ],
    };
  }

  sayHello() {
    console.log('Hello!');
  }

  addNumbers(args) {
    const num1 = args.NUM1;
    const num2 = args.NUM2;
    return num1 + num2;
  }
}

Scratch.extensions.register(new MyExtension());
