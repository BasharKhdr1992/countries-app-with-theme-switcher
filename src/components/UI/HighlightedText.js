import React from 'react';

const RenderText = ({ children, color }) => {
  return <h3 className={color}>{children}</h3>;
};

const CamelCase = (word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
};

const highlightText = (split, keyword, highlight_style) => {
  let startIndex;

  startIndex = split.search(keyword);

  if (startIndex >= 0) {
    let left, highlighted, right;

    left = split.substring(0, startIndex);
    highlighted = split.substring(left.length, left.length + keyword.length);
    right = split.substring(left.length + keyword.length);

    if (left.length > 0) {
      left = CamelCase(left);
    } else {
      highlighted = CamelCase(highlighted);
    }

    return (
      <span>
        {left}
        <span style={highlight_style}>{highlighted}</span>
        {right}&nbsp;
      </span>
    );
  } else {
    return CamelCase(split);
  }
};

const HighlightedText = ({ country_name, keyword, color, darkMode }) => {
  const highlight_style = {
    fontWeight: 900,
    backgroundColor: darkMode ? 'hsl(216, 12%, 54%)' : 'hsl(52, 100%, 62%)',
  };

  const lowerCaseName = country_name.toLowerCase();
  const lowerCaseKeyword = keyword.toLowerCase();

  let result;

  const splits = lowerCaseName.split(/\s+/);

  let formatted_splits = [];

  for (let split of splits) {
    formatted_splits = [
      ...formatted_splits,
      highlightText(split, lowerCaseKeyword, highlight_style),
    ];
  }

  result = (
    <RenderText color={color}>
      {formatted_splits.map((formatted_split, index) => (
        <span key={index}>{formatted_split}</span>
      ))}
    </RenderText>
  );

  return result;
};

export default HighlightedText;
