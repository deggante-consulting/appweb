const portraitPlaceholderSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 16'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop stop-color='#d8e2d1'/><stop offset='.55' stop-color='#f0efe7'/><stop offset='1' stop-color='#9dbf91'/></linearGradient></defs><rect width='12' height='16' fill='url(#g)'/><circle cx='6.2' cy='4.6' r='2.2' fill='#6c8c63' opacity='.45'/><rect x='2.2' y='8' width='7.8' height='6.5' rx='2' fill='#1e3f2a' opacity='.22'/></svg>";

export const portraitBlurDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  portraitPlaceholderSvg,
)}`;
