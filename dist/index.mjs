import { getDictionary } from './keywords.mjs';

var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2["Identifier"] = "Identifier";
  TokenType2["Keyword"] = "Keyword";
  TokenType2["LeftParen"] = "LeftParen";
  TokenType2["RightParen"] = "RightParen";
  TokenType2["LeftCurly"] = "LeftCurly";
  TokenType2["RightCurly"] = "RightCurly";
  TokenType2["Dot"] = "Dot";
  TokenType2["Semicolon"] = "Semicolon";
  TokenType2["StringLiteral"] = "StringLiteral";
  TokenType2["SpecialCharacter"] = "SpecialCharacter";
  TokenType2["Whitespace"] = "Whitespace";
  TokenType2["Comment"] = "Comment";
  return TokenType2;
})(TokenType || {});
const token = {
  identifier(name) {
    return {
      type: "Identifier" /* Identifier */,
      name
    };
  },
  keyword(name) {
    return {
      type: "Keyword" /* Keyword */,
      name
    };
  },
  leftParen() {
    return {
      type: "LeftParen" /* LeftParen */,
      value: "("
    };
  },
  rightParen() {
    return {
      type: "RightParen" /* RightParen */,
      value: ")"
    };
  },
  leftCurly() {
    return {
      type: "LeftCurly" /* LeftCurly */,
      value: "{"
    };
  },
  rightCurly() {
    return {
      type: "RightCurly" /* RightCurly */,
      value: "}"
    };
  },
  dot() {
    return {
      type: "Dot" /* Dot */,
      value: "."
    };
  },
  semicolon() {
    return {
      type: "Semicolon" /* Semicolon */,
      value: ";"
    };
  },
  stringLiteral(value) {
    return {
      type: "StringLiteral" /* StringLiteral */,
      value
    };
  },
  specialCharacter(value) {
    return {
      type: "SpecialCharacter" /* SpecialCharacter */,
      value
    };
  },
  whitespace(value) {
    return {
      type: "Whitespace" /* Whitespace */,
      value
    };
  },
  comment(value) {
    return {
      type: "Comment" /* Comment */,
      value
    };
  }
};

function tokenize(input) {
  let current = 0;
  const tokens = [];
  function finishIdentifier() {
    let name = "";
    while (!isWhitespace(input[current]) && !isSpecialCharacter(input[current]) && !isSingleCharacter(input[current]) && !isTick(input[current]) && !isUndefined(input[current])) {
      name += input[current];
      current++;
    }
    return token.keyword(name);
  }
  function finishSpecialCharacter() {
    let chars = "";
    while (isSpecialCharacter(input[current])) {
      chars += input[current];
      current++;
    }
    return token.specialCharacter(chars);
  }
  function finishStringLiteral(tick) {
    let value = input[current];
    current++;
    while (input[current] && input[current] !== tick) {
      value += input[current];
      current++;
    }
    if (isTick(input[current])) {
      value += input[current];
      current++;
      return token.stringLiteral(value);
    }
    throw new Error("Unterminated string, expected a closing ', \" or `");
  }
  function finishWhitespace() {
    let value = "";
    while (isWhitespace(input[current])) {
      value += input[current];
      current++;
    }
    return token.whitespace(value);
  }
  function finishComment(value) {
    current += value.length;
    return token.comment(value);
  }
  while (current < input.length) {
    const currentChar = input[current];
    const { isComment, end } = checkComment(input, current);
    if (isComment) {
      tokens.push(finishComment(input.slice(current, end + 1)));
      continue;
    }
    if (isWhitespace(currentChar)) {
      tokens.push(finishWhitespace());
      continue;
    }
    if (isTick(currentChar)) {
      tokens.push(finishStringLiteral(currentChar));
    } else if (isSingleCharacter(currentChar)) {
      tokens.push(getCharToken(currentChar));
      current++;
    } else if (isSpecialCharacter(currentChar)) {
      tokens.push(finishSpecialCharacter());
    } else if (isAlpha(currentChar)) {
      tokens.push(finishIdentifier());
    } else {
      throw new Error(`Unknown character: ${currentChar}`);
    }
  }
  return tokens;
}
function isAlpha(char) {
  return /^[\p{L}\p{Nl}$_][\p{L}\p{Nl}\p{Nd}$\u200C\u200D_]*$/u.test(char);
}
function isWhitespace(char) {
  return /\s/.test(char);
}
function isTick(char) {
  return ['"', "'", "`"].includes(char);
}
function isSpecialCharacter(char) {
  return !isWhitespace(char) && !isAlpha(char) && !isTick(char) && !isSingleCharacter(char);
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function checkComment(input, current) {
  if (input[current] === "/" && input[current + 1] === "/") {
    let end = current;
    while (end < input.length && input[end] !== "\n")
      end++;
    return { isComment: true, end };
  }
  if (input[current] === "/" && input[current + 1] === "*") {
    let end = current;
    while (end < input.length && !(input[end] === "*" && input[end + 1] === "/"))
      end++;
    return { isComment: true, end };
  }
  return { isComment: false, end: current };
}
const knownSingleCharacters = /* @__PURE__ */ new Map([
  ["(", token.leftParen],
  [")", token.rightParen],
  ["{", token.leftCurly],
  ["}", token.rightCurly],
  [".", token.dot],
  [";", token.semicolon]
]);
function isSingleCharacter(char) {
  return knownSingleCharacters.has(char);
}
function getCharToken(char) {
  const builder = knownSingleCharacters.get(char);
  return builder();
}

function generate(tokens, reverse = false) {
  const dictionary = getDictionary(reverse);
  let output = "";
  let current = 0;
  function isAtEnd() {
    return current >= tokens.length;
  }
  function peek() {
    return tokens[current];
  }
  function advance() {
    if (!isAtEnd())
      current++;
    return previous();
  }
  function previous() {
    return tokens[current - 1];
  }
  function compileNamedToken(token) {
    return dictionary.get(token.name) || token.name;
  }
  function compileValuedToken(token) {
    return token.value;
  }
  function compileStatement() {
    let statement = "";
    const token = peek();
    switch (token.type) {
      case TokenType.Keyword:
      case TokenType.Identifier:
        statement += compileNamedToken(token);
        break;
      case TokenType.SpecialCharacter:
      case TokenType.StringLiteral:
      case TokenType.Whitespace:
      case TokenType.Comment:
      case TokenType.LeftParen:
      case TokenType.RightParen:
      case TokenType.LeftCurly:
      case TokenType.RightCurly:
      case TokenType.Dot:
      case TokenType.Semicolon:
        return compileValuedToken(token);
      default:
        throw new SyntaxError(`Unexpected token: ${token.type}`);
    }
    return statement;
  }
  while (!isAtEnd()) {
    output += compileStatement();
    advance();
  }
  return output;
}

function compile(code, reverse = false) {
  const tokens = tokenize(code);
  return generate(tokens, reverse);
}

export { compile };
