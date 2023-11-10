export function cpfMask(e) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}
export function phoneMask(e) {
  e.currentTarget.maxLength = 15;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  e.currentTarget.value = value;

  return e;
}
export function postalCodeMask(e) {
  e.currentTarget.maxLength = 10;
  let { value } = e.currentTarget;
  // Aplica a máscara "99.999-999" ao CEP
  value = value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
  e.currentTarget.value = value;

  return e;
}
