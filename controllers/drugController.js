const Drug = require('../models/drugModel');

exports.getAllDrugs = async (req, res, next) => {
  try {
    // BUILD QUERY
    const queryObject = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObject[el]);

    // Search by keywords
    let query = Drug.find(queryObject);
    if (req.query.all) {
      query = Drug.find({
        $text: { $search: req.query.all },
      });
    }

    // Count total number of results
    const results = await Drug.count(query);

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 20;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      if (skip > results) throw new Error();
    }

    // SEND RESPONSE
    const drugs = await query;
    res.status(200).json({
      status: 'success',
      data: {
        drugs,
      },
      links: {
        total: results,
        per_page: limit,
        current_page: page,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createDrug = async (req, res, next) => {
  try {
    const newDrug = await Drug.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        drug: newDrug,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getDrug = async (req, res, next) => {
  try {
    const drug = await Drug.find({ barcode: req.params.id });
    if (drug.length < 1) throw new Error();

    res.status(200).json({
      status: 'success',
      data: {
        drug,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid barcode!',
    });
  }
};

exports.searchDrug = async (req, res, next) => {
  try {
    // BUILD QUERY
    const queryObject = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObject[el]);

    let query = Drug.find(queryObject);

    // Count total number of results
    const results = await Drug.count(query);

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 20;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      if (skip > results) throw new Error();
    }

    // EXECUTE QUERY
    const drugs = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        drugs,
      },
      links: {
        total: results,
        per_page: limit,
        current_page: page,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
