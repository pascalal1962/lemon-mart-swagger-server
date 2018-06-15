const config = require('../../lib/config')
const logger = require('../../lib/logger')

const log = logger(config.logger)

module.exports = config => {
  log.info('This is routes/users')
}
