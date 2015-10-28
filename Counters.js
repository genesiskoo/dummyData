//var mongoose = require('./mongoose_conn.js');
var Counter = require('./models/Counters.js');

module.exports.saveCounter = function (idName, callback) {
	Counter.create({ _id: idName, seq: 0 }, callback);
}


module.exports.getNextSeq = function (idName, callback) {
	Counter.findOneAndUpdate({ _id: idName },
		{ $inc: { seq: 1 } },
		{ new: true, upsert: true },
		callback);
}

