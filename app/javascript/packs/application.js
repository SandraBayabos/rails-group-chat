// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "../stylesheets/application"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'

global.toastr = require('toastr')

global.toastr.options = {
  onclick: null,
  timeOut: 0,
  extendedTimeOut: 0,
}

Rails.start()
Turbolinks.start()
ActiveStorage.start()