function isLongestString(string, maxLength) {
  return string.length <= maxLength;
}

isLongestString('проверяемая строка', 20);
isLongestString('проверяемая строка', 18);
isLongestString('проверяемая строка', 10);
