const showTooltip = (event) => {
  console.log('event', event)
}

const removeTooltip = (event) => {
  console.log('event', event)
}

(function Tooltip() {
  const tooltipElements = document.querySelectorAll('[tooltip]');
  console.log('toooltipElements', tooltipElements);
  tooltipElements.forEach((element, index) => {
    element.addEventListener('mouseenter', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const tooltipElement = document.getElementsByClassName('tooltipContainer')[0];
      console.log('tooltipElement.dataset', element.dataset);
      const tooptipText = element.dataset.tooltiptext;
      const newSpan = document.createElement('span');
      newSpan.innerText = tooptipText;
      // tooltipElement.append(tooptipText);
      // tooltipElement.append(newSpan);
      tooltipElement.lastChild && tooltipElement.removeChild(tooltipElement.lastChild);
      tooltipElement.appendChild(newSpan);
      const { x: hoverX, y: hoverY, bottom } = element.getBoundingClientRect();
      const { height, width } = tooltipElement.getBoundingClientRect();
      console.log(tooltipElement.getBoundingClientRect())
      // tooltipElement.style.bottom = hoverY;
      // tooltipElement.style.left = hoverX;
      // tooltipElement.style.display = "inline";
      tooltipElement.style.cssText = "display: inline; top: " + (hoverY + 40) + "px; left: " + (hoverX ) + "px;";
    });
    element.addEventListener('mouseleave', () => {
      const tooltipElement = document.getElementsByClassName('tooltipContainer')[0];
      tooltipElement.style.display = "none";
      tooltipElement.textContent = '';
    });
  })
})()