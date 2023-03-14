import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: #ffffff;
  background-color: #f75f64;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 20px;
  appearance: none;
  position: relative;

  &::before {
    content: '⌄';
    width: 12px;
    height: 6px;
    display: absolute;
    color: #ffffff;
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 5px 7px;
`
