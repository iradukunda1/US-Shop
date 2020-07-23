/* Handling Errors through Toastr */

import toastr from "toastr";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "2000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  toastClass: "toastr"
};

export const successToaster = ( title, message) => {
  return toastr.success(message, title);
};
export const errorToaster = (title, message) => {
  return toastr.error(message, title);
};

export const warnToaster = (title, message) => {
  return toastr.warning(message, title);
};

export const infoToaster = (title, message) => {
  return toastr.info(message, title);
};
