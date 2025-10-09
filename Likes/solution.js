  function yourKataFunction(args) {
    switch(args.length) {
      case 0:
        return 'no one likes this';
      case 1:
        return `${args[0]} likes this`
      case 2:
        return `${args[0]} and ${args[1]} like this`
      case 3:
        return `${args[0]}, ${args[1]} and ${args[2]} like this`
      default:
        return `${args[0]}, ${args[1]} and ${args.length - 2} others like this`

    }
  }

  module.exports = yourKataFunction;
