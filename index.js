import app from './api/server/server.js';
import config from './api/config/config.js';


app.listen(config.PORT, () => {
    console.log('Server is running on port ' + config.PORT);
});
