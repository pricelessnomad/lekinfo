const mongoose = require('mongoose');

const drugSchema = mongoose.Schema({
  medical_condition: String,
  barcode: Number,
  full_trade_name: String,
  trade_name: String,
  number_ru: String,
  dosage_form: String,
  atc_name: String,
  authorized_representative: String,
  holder_ru: String,
  country_holder_ru: String,
  unique_number: String,
  manufacturer: String,
  country: String,
  date_of_issue: String,
  date_of_expire: String,
  is_main_drug: String,
  control_substances: String,
  vacation_terms: String,
  central_procerement_plan: String,
  active_drug: String,
  last_update: String,
});

drugSchema.index({
  full_trade_name: 'text',
  trade_name: 'text',
  atc_name: 'text',
  dosage_form: 'text',
});

const Drug = mongoose.model('Drug', drugSchema);

module.exports = Drug;
