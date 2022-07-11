export const stringToColor = (name) => {
  if (!name) return '#e0e0e0';
  let hash = 0;
  let i;
  for (i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export const stringToRGBColor = (name) => {
  if (!name) return '#e0e0e0';
  let hash = 0;
  if (name.length === 0) return hash;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

export const stringToRandomColor = () => {
  const colors = [
    '#ef7479',
    '#ef5d8f',
    '#cc67dd',
    '#926ed1',
    '#3f51b5',
    '#7691fd',
    '#829afd',
    '#baccd6',
    '#009688',
    '#72de71',
    '#bfde9b',
    '#d3d758',
    '#ffbf61',
    '#ff8b67',
    '#b0887a',
    '#607d8b',
  ];
  const item = colors[Math.floor(Math.random() * colors.length)];
  return item;
};

export const stringAvatar = (name) => {
  if (name) {
    const validName = name
      ?.split(' ')
      ?.map((n) => n[0])
      .join('');
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${validName}`,
    };
  }
  return null;
};
