const useZoom = (target) => {
  const container = document.getElementById(target);
  if (container === undefined) return [() => console.log('no target was defined.'), () => console.log('no target was defined.')];
  const bindZoom = () => {
    // (A) GET CONTAINER + IMAGE SOURCE
    let imgsrc = container.currentStyle || window.getComputedStyle(container, false);
    imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, '');
    // (B) LOAD IMAGE + ATTACH ZOOM
    const img = new Image();
    img.src = imgsrc;
    img.onload = () => {
      // (B1) CALCULATE ZOOM RATIO
      const ratio = img.naturalHeight / img.naturalWidth;
      // const percentage = `${ratio * 100}%`;
      // (B2) ATTACH ZOOM ON MOUSE MOVE
      container.onmousemove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        const xPercent = `${xPos / (container.clientWidth / 100)}%`;
        const yPercent = `${yPos / ((container.clientWidth * ratio) / 100)}%`;

        Object.assign(container.style, {
          backgroundPosition: `${xPercent} ${yPercent}`,
          backgroundSize: `${img.naturalWidth * 2.5}px`,
        });
      };

      // (B3) RESET ZOOM ON MOUSE LEAVE
      container.onmouseleave = () => {
        Object.assign(container.style, {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        });
      };
    };
  };
  const cancelZoom = () => { container.onmousemove = null; };
  return [bindZoom, cancelZoom];
};
export default useZoom;
