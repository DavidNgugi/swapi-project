import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li<{ active?: boolean; disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 8px 16px;
  margin-right: 4px;
  background-color: ${({ active, disabled }) => (active ? '#2D3748' : disabled ? '#E2E8F0' : '#FFFFFF')};
  color: ${({ active, disabled }) => (active || disabled ? '#FFFFFF' : '#2D3748')};
  border: 1px solid #CBD5E0;
  border-radius: 4px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'inherit' : '#CBD5E0')};
  }
`;