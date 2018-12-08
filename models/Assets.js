var mongoose = require("mongoose");

var AssetsSchema = new mongoose.Schema({
	name: String,
	value: String,
	address: String, 
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Assets", AssetsSchema);


