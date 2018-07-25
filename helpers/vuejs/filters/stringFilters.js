import Vue from 'vue';

Vue.filter('dataHora', (value) => {
  if (!value) return '--';

  let date = new Date(value);
  return `${('00' + date.getDate()).substr(-2)}/${('00' + (date.getMonth() + 1)).substr(-2)}/${date.getFullYear()}`
});

Vue.filter('firstCharUpper', (value) => {
  if (!value) return '';
  return value.substr(0, 1) + value.toLowerCase().substr(1);
});

Vue.filter('valorReal', (value) => {
  if (!value) return '--';
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
});

Vue.filter('valorParaSistema', (value) => {
  if (!value) return '--';
  return value.replace('R$ ', '')
    .replace('.', ',')
    .replace(',', '.');
})

Vue.filter('removeSpecialChar', (value) => {
  if (!value) return;
  return value.replace(/(\.|\/|\-)/g, '');
})