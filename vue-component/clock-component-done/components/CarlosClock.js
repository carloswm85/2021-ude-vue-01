Vue.component("carlos-clock", {
	props:["format"], 
	data() {
		return {
			message: "Carlos Clock Component",
			now: new Date()
		}
	},
	methods: {
		updateDateTimeHere() {
			const d = this.format === 'short' ? new Date().toLocaleTimeString() : new Date();
			this.now = d;
		}
	},
	mounted() {
		setInterval(() => {
			this.updateDateTimeHere();
		}, 1000);
	},
	template: `<div class="clock"> {{ message}} | {{ now }} </div>`
});