/* eslint-disable */

const getPrefix = jest.fn()
const getBloxName = jest.fn().mockResolvedValue('TODO')
const getBloxType = jest.fn()
const WipeAllConfirmation = jest.fn().mockResolvedValue({ wipeAll: true })

module.exports = {
  getPrefix,
  getBloxName,
  getBloxType,
  WipeAllConfirmation,
}
