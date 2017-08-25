/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "CHINA Holidays",
			position: "top_left",
			config: {
				calendars: [{
					symbol: "calendar-check-o",
					url: "http://7xlcyv.com1.z0.glb.clouddn.com/China_Holidays.ics"
				}]
			}
		},
		{
			module: "compliments",
			position: "bottom_center",
			config: {
				compliments: {
					anytime: [
						"Hey there sexy!",
						"Hey ThoughtWorkers!",
						"Hello, beauty!",
						"You look sexy!",
						"Looking good today!",
						"Hi, sexy!"
					],
					morning: [
						"Good morning, handsome!",
						"Enjoy your day!",
						"How was your sleep?"
					]
				}
			}
		},
		{
			module: "MMM-MirrorMirrorOnTheWall",
			position: "middle_center",
			config: {}
		}, {
			module: "newsfeed",
			position: "top_right",
			header: "Hot technology News",
			config: {
				feeds: [{
						title: "InfoQ",
						url: "http://www.infoq.com/cn/feed"
					},
					{
						title: "36Kr",
						url: "http://36kr.com/feed"
					}
				],
				wrapTitle: true,
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-AirQuality',
			position: 'top_right', // you may choose any location
			config: {
				location: 'xian' // the location to check the index for
			}
		}, {
			module: 'MMM-bitcoin',
			position: 'top_right',
			config: {
				fiat: 'usd', // 'usd' and 'eur' available, defaults to 'usd'
				showBefore: 'Bitstamp', // will display before the bitcoin price, default 'Bitstamp'
				updateInterval: 60000 // update interval in milliseconds
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}