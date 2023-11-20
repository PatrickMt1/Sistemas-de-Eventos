export function formatPrice(price) {
  if (!price) return "R$00,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 1);
}
