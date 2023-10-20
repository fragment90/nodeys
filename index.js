const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'d2787a47-76c5-491b-865a-77ef472b0f63'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
