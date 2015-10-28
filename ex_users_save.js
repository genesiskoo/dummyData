
var mongoose = require('./mongoose_conn.js');


var Users = require('./Users.js') 

Users.saveUser({
		email: 'answjdgus222@naver.com',
		name: "문정",
		nick: "moon",
		profile_photo: "/fdsk/sfdfsd/fsdfdsfds/fdsfds",
		intro: 'jfsdkljfklsdjfklsdjfklsdjflksdjfklsajflsdhgwaawfwehjiognjdf',
		phone: '010-0000-0000',
	}, function (err, doc) {
		console.log(' create' + doc);
	});
