var Counters = require('./Counters.js');
var User = require('./models/Users.js');

module.exports.saveUser = function (userInfo, callback) {
	Counters.getNextSeq('users', function (err, seq) {
		if (err) {
			console.error("ERROR OF GETTING AUTO_INCREMENT :", err);
			return;
		}
		console.log('next sq', seq);
		userInfo._id = seq.seq;
		User.create(userInfo, callback);
	});
}




