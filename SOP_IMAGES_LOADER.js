// SOP_IMAGES_LOADER.js — runs synchronously after all image scripts
(function() {
  // Background
  const bgImg = document.querySelector('.bg-img');
  if (bgImg && typeof IMG_BACKGROUND !== 'undefined') bgImg.src = IMG_BACKGROUND;

  // Logos
  document.querySelectorAll('.terra-logo-img').forEach(el => {
    if (typeof IMG_LOGO !== 'undefined') el.src = IMG_LOGO;
  });
  document.querySelectorAll('.print-logo').forEach(el => {
    if (typeof IMG_LOGO_PRINT !== 'undefined') el.src = IMG_LOGO_PRINT;
  });

  // Populate phase thumbnail registry so getPhaseThumb() can find them
  if (typeof PHASE_THUMB_REGISTRY !== 'undefined') {
    if (typeof IMG_PHASE_PREDEV         !== 'undefined') PHASE_THUMB_REGISTRY[0] = IMG_PHASE_PREDEV;
    if (typeof IMG_PHASE_DESIGN         !== 'undefined') PHASE_THUMB_REGISTRY[1] = IMG_PHASE_DESIGN;
    if (typeof IMG_PHASE_PRECONSTRUCTION!== 'undefined') PHASE_THUMB_REGISTRY[2] = IMG_PHASE_PRECONSTRUCTION;
    if (typeof IMG_PHASE_CONSTRUCTION   !== 'undefined') PHASE_THUMB_REGISTRY[3] = IMG_PHASE_CONSTRUCTION;
    if (typeof IMG_PHASE_CLOSEOUT       !== 'undefined') PHASE_THUMB_REGISTRY[4] = IMG_PHASE_CLOSEOUT;
  }

  // Rebuild HUDs now that registry is populated
  if (typeof buildHuds === 'function') buildHuds();
})();
