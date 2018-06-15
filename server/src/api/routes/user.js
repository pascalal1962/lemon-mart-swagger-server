const config = require('../lib/config')
const logger = require('../lib/logger')

const log = logger(config.logger)

log.info('This is routes/user')
