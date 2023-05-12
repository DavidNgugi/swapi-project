import styled from 'styled-components';

// Define color constants
const activeColor = '#000';
const disabledColor = '#817f7f';
const defaultColor = '#FFFFFF';
const activeTextColor = '#cec418';
const disabledTextColor = '#2D3748';
const defaultTextColor = '#2D3748';
const activeBorderColor = '#cec418';
const disabledBorderColor = '#CBD5E0';
const defaultBorderColor = '#CBD5E0';
const hoverBackgroundColor = '#CBD5E0';
const hoverTextColor = '#2D3748';

export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li<{ active?: boolean; disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 8px 16px;
  margin-right: 4px;
  background-color: ${({ active, disabled }) =>
    active ? activeColor : disabled ? disabledColor : defaultColor};
  color: ${({ active, disabled }) =>
    active || disabled ? activeTextColor : disabled ? disabledTextColor : defaultTextColor};
  border: 1px solid
    ${({ active, disabled }) =>
      active || disabled ? activeBorderColor : disabled ? disabledBorderColor : defaultBorderColor};
  border-radius: 4px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'inherit' : hoverBackgroundColor)};
    color: ${({ disabled }) => (disabled ? 'inherit' : hoverTextColor)};
  }
}`;