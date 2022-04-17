import React from 'react';

const RenderText = ({ children, color }) => {
  return <h3 className={color}>{children}</h3>;
};

const highlightText = (split, keyword, highlight_style) => {
  if (split.search(keyword) >= 0) {
    let left, highlighted, right;

    let startIndex = split.search(keyword);

    left = split.substring(0, startIndex);
    highlighted = split.substring(left.length, left.length + keyword.length);
    right = split.substring(left.length + keyword.length);

    return (
      <span>
        {left}
        <span style={highlight_style}>{highlighted}</span>
        {right}&nbsp;
      </span>
    );
  } else {
    return `${split} `;
  }
};

const HighlightedText = ({ country_name, keyword, color }) => {
  const highlight_style = {
    fontWeight: 900,
    backgroundColor: 'hsl(52, 100%, 62%)',
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
