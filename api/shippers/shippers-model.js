// const db etc etc

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // select * from shippers;
  return 'get wired'
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
