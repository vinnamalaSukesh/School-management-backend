const toObjectById = (arr) =>
    arr.reduce((obj, item) => {
        obj[item._id] = item;
        return obj;
    }, {})
module.exports = {toObjectById}