class ReflectionPainter {
    static get inputProperties() {
        return ['--reflection-color'];
    }

    static get inputArguments() {
        return ['*'];
    }

    paint(context, size, properties, args) {
      const reflectionColor = properties.get('--reflection-color');
      const position = {
        'left': size.width * .1,
        'izquierda': size.width * .1,
        'middle': size.width / 2,
        'center': size.width / 2,
        'medio': size.width / 2,
        'centro': size.width / 2,
        'right': size.width * .9,
        'derecha': size.width * .9
      }[args[0].toString()];


      context.beginPath();
      context.fillStyle = reflectionColor;
      context.rect(position, 0, 20, size.height);
      context.fill();
    }
}

registerPaint('reflection', ReflectionPainter);