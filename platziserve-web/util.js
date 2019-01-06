'use strict'

function pipe(source, target) {
    if (!source.emit || !target.emit) {
        return Error('No se encontro el EVENTEMITTER')
    }

    const emit = source._emit = source.emit
    source.emit = function() {
        emit.apply(source, arguments)
        target.emit.apply(target,  arguments)
        return source
    }
}


module.exports = {
    pipe
}