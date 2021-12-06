const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  select * from shippers;
  const rows = await db('shippers')
    .select('shipperid', 'phone')

  // escape hatch, don't do it, please!
  // const rows = await db.raw('select * from shippers;')
  return rows
}

async function getById() {
  return 'getById wired'
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
