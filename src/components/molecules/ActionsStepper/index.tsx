import React, { useState } from 'react';
import styled from 'styled-components';
import { Action } from '@type/hasura';

export type ActionsStepperProps = {
  actions: Array<Pick<Action, 'id' | 'acted_at' | 'text'>>;
  className?: string;
};

const ActionsStepper = ({ actions, className }: ActionsStepperProps) => {
  console.log({ actions });

  const [activeStepId, setActiveStepId] = useState(actions[0]?.id);

  return (
    <Wrapper className={className}>
      {actions.map((action, index) => (
        <Step
          key={index}
          isActive={action.id === activeStepId}
          minimized={action.id !== activeStepId}
          onClick={() => {
            setActiveStepId(action.id);
          }}
        >
          <StepLabel>
            <div className="subheader">
              {`${action.chamber} - ${new Date(
                action.acted_at
              ).toDateString()}`}
            </div>
          </StepLabel>
          <StepContent minimized={action.id !== activeStepId}>
            {action.text}
          </StepContent>
        </Step>
      ))}
    </Wrapper>
  );
};

export default ActionsStepper;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 270px;

  padding: 0;
`;

const Step = styled.div<{ isActive?: boolean; minimized?: boolean }>`
  position: relative;
  padding: 0 20px 24px 50px;
  transition: all 0.4s ease-in-out;

  :before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    background-color: ${(properties) =>
      properties.isActive ? 'var(--color-secondary)' : 'var(--color-gray700)'};
    border-radius: 15px;
    box-shadow: ${(properties) =>
      properties.isActive ? '0 0 40px 1px var(--color-secondary)' : 'none'};

    left: calc(50px / 2);
    transform: translateX(-45%);
    z-index: 2;
  }

  :after {
    position: absolute;
    content: '';
    height: 100%;
    width: 1px;
    background-color: rgb(198, 198, 198);
    left: calc(50px / 2);
    top: 0;
    z-index: 1;
  }

  ${(properties) => {
    if (properties.minimized) {
      return `
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;

        :hover {
          :before {
            background-color: var(--color-secondary);
            box-shadow: 0 0 40px 1px var(--color-secondary);
          }
        }
        `;
    }
  }}
`;

const StepLabel = styled.div`
  .header {
    color: var(--color-text);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    user-select: none;
    font-size: 1rem;
    font-weight: 600;
  }

  .subheader {
    user-select: none;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const StepContent = styled.div<{ minimized?: boolean }>`
  position: relative;
  height: auto;
  min-height: 100px;
  max-height: 300px;
  margin-top: 10px;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;

  font-weight: 500;
  color: var(--color-text);

  ${(properties) => {
    if (properties.minimized) {
      return `
        height: 0;
        min-height: 0;
        max-height: 0;
      `;
    }
  }};
`;

// Const NextButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   border: 0;
//   padding: 10px 20px;
//   border-radius: 4px;
//   background-color: var(--color-secondary);
//   box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.3);
//   transition: background-color 0.3s ease-in-out;
//   cursor: pointer;
//   transform: translate(-50%, -50%);

//   :hover {
//     background-color: rgba(255, 0, 0, 0.6);
//   }

//   :focus {
//     outline: 0;
//   }
// `;
