const app = require('./app');
const config = require('./utils/config');
const infoLogger = require('./utils/logger').info;

app.listen(config.PORT, () => {
	infoLogger(`Server running on port ${config.PORT}`);
});
