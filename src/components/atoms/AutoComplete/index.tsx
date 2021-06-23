import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type AutoCompleteProps = {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  className?: string;
};

const AutoComplete = ({
  suggestions,
  onSuggestionClick,
  className,
}: AutoCompleteProps) => {
  return (
    <Wrapper className={className}>
      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [1, 1],
            y: [null, -10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
          }}
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </Suggestion>
      ))}
    </Wrapper>
  );
};

export default AutoComplete;

const Wrapper = styled(motion.div)`
  display: flex;
  /* justify-content: space-around; */
  margin-left: 20px;
  gap: 20px;
`;

const Suggestion = styled(motion.span)`
  padding: 3px 10px;

  color: black;
  font-size: 0.8rem;

  background-color: var(--color-primary);

  border-radius: 15px;

  :hover {
    cursor: pointer;
  }
`;
