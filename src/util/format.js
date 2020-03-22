export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function replacePrice(price) {
  return Number(price.replace(/R\$/, '').replace(',', '.'));
}

export function ordenationASC(color) {
  return color.sort((a, b) =>
    a.cor.localeCompare(b.cor, undefined, {
      caseFirst: 'upper',
    })
  );
}

export function repeatDelete(repeat) {
  const valuesRepeat = repeat.map(color => color.cor);

  const colors = valuesRepeat.filter(
    (elem, index, self) => index === self.indexOf(elem)
  );

  const valuesObj = colors.map(cor => ({
    cor,
  }));

  return valuesObj;
}
