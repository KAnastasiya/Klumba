export function lockPageScroll() {
  const width = $('body').width();
  $('body').width(width);
  $('.root').addClass('root_lock');
}

export function unLockPageScroll() {
  $('.root').removeClass('root_lock');
  $('body').width('');
}
