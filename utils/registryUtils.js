const axios = require('axios')
const { appBloxGetBloxDetails, appBloxUpdateReadme, appBloxGetAppConfig } = require('./api')
const { getShieldHeader } = require('./getHeaders')

const headers = getShieldHeader()

// TODO -- use this in pull also
const getBloxDetails = (componentName) =>
  axios.post(
    appBloxGetBloxDetails,
    {
      blox_name: componentName,
    },
    { headers }
  )

const updateReadme = (bloxId, key, visibility) =>
  axios.post(
    appBloxUpdateReadme,
    {
      blox_id: bloxId,
      readme_url: key,
      visibility,
    },
    { headers }
  )

const getAppConfigFromRegistry = (id) => axios.post(appBloxGetAppConfig, { blox_id: id }, { headers })

module.exports = {
  getBloxDetails,
  updateReadme,
  getAppConfigFromRegistry,
}
